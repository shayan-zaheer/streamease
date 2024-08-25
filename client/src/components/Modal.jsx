function Modal(){
    return (
        <div className="box active-popup">
				<div className="hero">
					<span className="icon-close"><ion-icon name="close-outline" role="img" className="md hydrated"></ion-icon></span>
					<div className="form-box login">
						<h2>Login</h2>
						<form action="#" id="loginForm" method="POST" enctype="multipart/form-data">
							<div className="input-box">
								<span className="icon"><ion-icon name="mail" role="img" className="md hydrated"></ion-icon></span>
								<input id="eInput" name="email" type="email" required="" />
								<label for="email">Email</label>
							</div>
							<div className="input-box">
								<span className="icon"><ion-icon name="lock-closed" role="img" className="md hydrated"></ion-icon></span>
								<input id="pInput" name="pass" type="password" required="" />
								<label for="pass">Password</label>
							</div>
							<div className="remember-forget">
								<label>
									<input type="checkbox" />Remember me
								</label>
								<a href="#" id="forgetPasswordLink">Forget Password?</a>
							</div>
							<button type="submit" className="boto">Login</button>
							<div className="login-register">
								<p>
									Don't have an account?
									<a href="#" className="register-link">Register</a>
								</p>
							</div>
						</form>
					</div>
					<div className="form-box register">
						<h2>Registration</h2>
						<form action="#" id="signupForm" method="POST" enctype="multipart/form-data">
							<div className="input-box">
								<span className="icon"><ion-icon name="person" role="img" className="md hydrated"></ion-icon></span>
								<input id="fnameInput" name="fname" type="text" required="" />
								<label for="fname">First Name</label>
							</div>

							<div className="input-box">
								<span className="icon"><ion-icon name="person" role="img" className="md hydrated"></ion-icon></span>
								<input id="lnameInput" name="lname" type="text" required="" />
								<label for="lname">Last Name</label>
							</div>

							<div className="input-box">
								<span className="icon"><ion-icon name="person" role="img" className="md hydrated"></ion-icon></span>
								<input id="usernameInput" name="username" type="text" required="" />
								<label for="username">Username</label>
							</div>

							<div className="input-box">
								<span className="icon"><ion-icon name="mail" role="img" className="md hydrated"></ion-icon></span>
								<input id="emailInput" name="email" type="email" required="" />
								<label for="email">Email</label>
							</div>

							<div className="input-box">
								<span className="icon"><ion-icon name="lock-closed" role="img" className="md hydrated"></ion-icon></span>
								<input id="pwInput" name="pass" type="password" required="" />
								<label for="pass">Password</label>
							</div>

							<div className="input-box">
								<span className="icon"><ion-icon name="image" role="img" className="md hydrated"></ion-icon></span>
								<input id="profileImageInput" name="profileImage" type="file" accept="image/*" />
								<label for="profileImage">Profile Image</label>
							</div>

							<div className="remember-forget">
								<label>
									<input type="checkbox" required="" />I agree to
									the terms and conditions
								</label>
							</div>

							<button type="submit" className="boto">Register</button>
							<div className="login-register">
								<p>
									Already have an account?
									<a href="#" className="login-link">Login</a>
								</p>
							</div>
						</form>
					</div>
					<div className="form-box forgot-password" style="display: none">
						<h2>Forgot Password</h2>
						<form action="#" id="forgotPasswordForm" method="POST" enctype="multipart/form-data">
							<div className="input-box">
								<span className="icon"><ion-icon name="mail" role="img" className="md hydrated"></ion-icon></span>
								<input id="forgotEmailInput" name="email" type="email" required="" />
								<label for="forgotEmail">Email</label>
							</div>
							<button type="submit" className="boto">Submit</button>
							<div className="login-register">
								<p>
									Remembered?
									<a href="#" className="login-link">Login</a>
								</p>
                                <p>
                                    Received OTP?
                                    <a href="#" className="continue-link">Continue</a>
                                </p>
							</div>
						</form>
					</div>

                    <div className="form-box otp-form" style="display: none">
                        <h2>Enter OTP</h2>
                        <form action="#" id="otpForm" method="POST" enctype="multipart/form-data">
                            <div className="input-box">
                                <span className="icon"><ion-icon name="mail" role="img" className="md hydrated"></ion-icon></span>
                                <input id="otpInput" name="otp" type="text" required="" />
                                <label for="otp">OTP</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><ion-icon name="lock-closed" role="img" className="md hydrated"></ion-icon></span>
                                <input id="newPasswordInput" name="newPassword" type="password" required="" />
                                <label for="newPassword">New Password</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><ion-icon name="lock-closed" role="img" className="md hydrated"></ion-icon></span>
                                <input id="confirmPasswordInput" name="confirmPassword" type="password" required="" />
                                <label for="confirmPassword">Confirm Password</label>
                            </div>
                            <button type="submit" className="boto">Submit</button>
                            <div className="login-register">
                                <p>Remembered? <a href="#" className="login-link">Login</a></p>
                            </div>
                        </form>
                    </div>

				</div>
			</div>
    )
};

export default Modal;