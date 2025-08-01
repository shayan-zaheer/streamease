const jwt = require("jsonwebtoken");
const util = require("util");
const upload = require("../utils/multer");
const multer = require("multer");
const bcrypt = require("bcryptjs");
const executeQuery = require("../connection/execution");
const sendEmail = require("../utils/email");
const redisClient = require("../utils/redis");

const compareHashPW = async (password, passwordDB) => {
    return await bcrypt.compare(password, passwordDB);
};

const signToken = (email) => {
    return jwt.sign({ email }, process.env.SECRET_STR, {
        expiresIn: process.env.LOGIN_EXPIRES,
    });
};

exports.signup = async (request, response) => {
    try {
        upload.single("profileImage")(request, response, async (err) => {
            if (err instanceof multer.MulterError) {
                return response.status(400).json({
                    status: "fail",
                    message: "Error uploading file",
                    error: err.message,
                });
            } else if (err) {
                return response.status(400).json({
                    status: "fail",
                    message: "Error uploading file",
                    error: err.message,
                });
            }

            const { firstname, lastname, username, email, password } =
                request.body;
            const hashedPassword = await bcrypt.hash(password, 10);

            const profileImageUrl = request.file ? request.file.path : null;

            const SQL =
                "INSERT INTO USERS(first_name, last_name, username, email, password, profile_image_url, registration_date) VALUES (?, ?, ?, ?, ?, ?, CURDATE())";
            await executeQuery(SQL, [
                firstname,
                lastname,
                username,
                email,
                hashedPassword,
                profileImageUrl,
            ]);

            response.status(201).json({
                status: "success",
                message: "User registered successfully",
                data: {
                    username,
                    profileImageUrl,
                },
            });
        });
    } catch (err) {
        response.status(500).json({
            status: "fail",
            message: "Failed to register user",
            error: err.message,
        });
    }
};

exports.login = async (request, response) => {
    try {
        const { email, password } = request.body;
        if (!email || !password) {
            console.log("Email or password not provided");
            return response.status(400).json({
                status: "fail",
                message: "Please provide email ID & password for login!",
            });
        }

        const SQL = "SELECT * FROM USERS WHERE EMAIL = ?";
        const result = await executeQuery(SQL, [email]);

        if (!result[0]) {
            console.log("User not found with provided email");
            return response.status(400).json({
                status: "fail",
                message: "Incorrect email or password!",
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            result[0].password
        );

        if (!isPasswordCorrect) {
            return response.status(400).json({
                status: "fail",
                message: "Incorrect email or password!",
            });
        }

        const user_id = result[0].user_id;
        const token = signToken(result[0].email);

        console.log("Setting cookies and sending response");

        response.cookie("uid", user_id, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "None",
            secure: true,
            path: "/",
        });

        response.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "None",
            secure: true,
            path: "/",
        });

        response.status(200).json({
            status: "success",
        });
    } catch (err) {
        response.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.checkToken = async (request, response, next) => {
    try {
        const token = request.cookies.token;
        // console.log("Request cookie:" , request.cookies);

        if (!token) {
            return response.status(401).json({
                status: "fail",
                message: "You are not logged in!",
            });
        }

        // 2. verify/validate the token
        const decodedToken = await util.promisify(jwt.verify)(
            token,
            process.env.SECRET_STR
        );
        // console.log(decodedToken);

        // 3. Check if the user exists
        const SQL = "SELECT * FROM USERS WHERE EMAIL = ?";
        const result = await executeQuery(SQL, [decodedToken.email]);

        if (!result) {
            return response.status(401).json({
                status: "fail",
                message: "The user with the given token does not exist!",
            });
        }

        next();
    } catch (err) {
        console.error(err);
        return response.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

exports.logout = async (request, response) => {
    try {
        response.clearCookie("uid", {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "None",
            secure: true,
        });

        response.clearCookie("token", {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "None",
            secure: true,
        });

        response.status(200).json({
            status: "success",
        });
    } catch (err) {
        response.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};

async function storeOTP(userId, otp) {
    await redisClient.set(`otp:${userId}`, otp, { EX: 300 });
}

async function verifyOTP(userId, enteredOTP) {
    const storedOTP = await redisClient.get(`otp:${userId}`);
    if (storedOTP === enteredOTP) {
        await redisClient.del(`otp:${userId}`);
        return true;
    }
    return false;
}

exports.forgotPassword = async (request, response) => {
    const { email } = request.body;
    const SQL = "SELECT * FROM USERS WHERE email = ?";

    try {
        const [user] = await executeQuery(SQL, [email]);

        if (!user) {
            return response.status(404).json({
                status: "fail",
                message: "User with the given email not found!",
            });
        }

        const OTP = Math.floor(100000 + Math.random() * 900000).toString();

        await storeOTP(user?.user_id, OTP);
        await sendEmail({
            recipient_email: email,
            OTP,
        });

        response.status(200).json({
            status: "success",
            message: "OTP sent to your email",
        });
    } catch (err) {
        response.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.updatePassword = async (request, response) => {
    try {
        const {
            oldPassword: oldPw,
            newPassword: newPw,
            confirmPassword: confirmPw,
        } = request.body;
        const userId = request.cookies.uid;

        const selectSQL = "SELECT password FROM USERS WHERE user_id = ?";
        const [user] = await executeQuery(selectSQL, [userId]);

        if (!user) {
            return response.status(400).json({
                status: "fail",
                message: "User not found.",
            });
        }

        const oldHashedPw = user.password;
        const result = await compareHashPW(oldPw, oldHashedPw);

        if (result) {
            if (newPw === confirmPw) {
                const hashedPassword = await bcrypt.hash(newPw, 10);
                const updateSQL =
                    "UPDATE USERS SET password = ? WHERE user_id = ?";
                await executeQuery(updateSQL, [hashedPassword, userId]);

                return response.status(200).json({
                    status: "success",
                    message: "Password updated successfully!",
                });
            } else {
                return response.status(400).json({
                    status: "fail",
                    message:
                        "New Password and Confirm Password are not the same!",
                });
            }
        } else {
            return response.status(400).json({
                status: "fail",
                message: "Old Password is not correct. Try again!",
            });
        }
    } catch (err) {
        return response.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.resetPassword = async (request, response) => {
    try {
        const { email, otp, newPassword, confirmPassword } = request.body;

        const SQL = "SELECT * FROM USERS WHERE email = ?";

        const [user] = await executeQuery(SQL, [email]);

        if (!user) {
            return response.status(404).json({
                status: "fail",
                message: "User with the given email not found!",
            });
        }

        const result = await verifyOTP(user?.user_id, otp);

        if (result) {
            if (newPassword == confirmPassword) {
                const hashedPassword = await bcrypt.hash(newPassword, 10);
                const updateSQL =
                    "UPDATE USERS SET password = ? WHERE email = ?";
                await executeQuery(updateSQL, [hashedPassword, email]);

                response.status(200).json({
                    status: "success",
                    message: "Password updated successfully",
                });
            } else {
                return response.status(400).json({
                    status: "fail",
                    message: "New password and Old password are not the same!",
                });
            }
        } else {
            response.status(400).json({
                status: "fail",
                message: "Invalid OTP",
            });
        }
    } catch (err) {
        console.log(err);
        response.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};
