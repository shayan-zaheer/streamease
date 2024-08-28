import { IonIcon } from '@ionic/react';
import { image, mail, person, eye, eyeOff } from 'ionicons/icons';
import { Form, Link, redirect, useOutletContext } from 'react-router-dom';
import axios from "axios";

function RegisterForm() {
    const [showPass, setShowPass] = useOutletContext();

	return (
		<div className="form-box register">
			<h2>Registration</h2>
			<Form
				action="#"
				id="signupForm"
				method="POST"
				encType="multipart/form-data"
			>
				<div className="input-box">
					<span className="icon">
                        <IonIcon icon={person} />
					</span>
					<input id="fnameInput" name="firstname" type="text" required />
					<label htmlFor="firstname">First Name</label>
				</div>

				<div className="input-box">
					<span className="icon">
                        <IonIcon icon={person} />
					</span>
					<input id="lnameInput" name="lastname" type="text" required />
					<label htmlFor="lastname">Last Name</label>
				</div>

				<div className="input-box">
					<span className="icon">
                        <IonIcon icon={person} />
					</span>
					<input
						id="usernameInput"
						name="username"
						type="text"
						required
					/>
					<label htmlFor="username">Username</label>
				</div>

				<div className="input-box">
					<span className="icon">
                        <IonIcon icon={mail} />
					</span>
					<input id="emailInput" name="email" type="email" required />
					<label htmlFor="email">Email</label>
				</div>

				<div className="input-box">
					<span style={{cursor: "pointer"}} className="icon" onClick={() => setShowPass(!showPass)}>
                        {showPass ? <IonIcon icon={eyeOff} /> :  <IonIcon icon={eye} />}
					</span>
					<input id="pInput" name="password" type={showPass ? "password" : "text"} required />
					<label htmlFor="password">Password</label>
				</div>

				<div className="input-box">
					<span className="icon">
                        <IonIcon icon={image} />
					</span>
					<input
						id="profileImageInput"
						name="profileImage"
						type="file"
						accept="image/*"
					/>
					<label htmlFor="profileImage">Profile Image</label>
				</div>

				<div className="remember-forget">
					<label>
						<input type="checkbox" required />I agree to the terms
						and conditions
					</label>
				</div>

				<button type="submit" className="boto">
					Register
				</button>
				<div className="login-register">
					<p>
						Already have an account?
						<Link to="/login" className="link">
							Login
						</Link>
					</p>
				</div>
			</Form>
		</div>
	);
}

export const registerAction = async (res) => {
    const formData = await res.request.formData();
    const {firstname, lastname, username, email, password, profileImage} = Object.fromEntries(formData);
    try{
        const result = await axios.post(
            "http://localhost:8000/auth/signup",
            {
                firstname,
                lastname,
                username,
                email,
                password,
                profileImage,
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        const data = result.data;
        console.log(data);
        return redirect("/home-page");
    }
    catch(err){
        return console.error(err);
    }
    
}

export default RegisterForm;
