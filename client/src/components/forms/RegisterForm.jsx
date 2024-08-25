import { IonIcon } from '@ionic/react';
import { image, mail, person, eye, eyeOff } from 'ionicons/icons';

function RegisterForm({setActive, showPass, setShowPass}) {
	return (
		<div className="form-box register">
			<h2>Registration</h2>
			<form
				action="#"
				id="signupForm"
				method="POST"
				encType="multipart/form-data"
			>
				<div className="input-box">
					<span className="icon">
                        <IonIcon icon={person} />
					</span>
					<input id="fnameInput" name="fname" type="text" required />
					<label htmlFor="fname">First Name</label>
				</div>

				<div className="input-box">
					<span className="icon">
                        <IonIcon icon={person} />
					</span>
					<input id="lnameInput" name="lname" type="text" required />
					<label htmlFor="lname">Last Name</label>
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
					<input id="pInput" name="pass" type={showPass ? "password" : "text"} required />
					<label htmlFor="pass">Password</label>
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
						<a onClick={() => setActive("login")} className="link">
							Login
						</a>
					</p>
				</div>
			</form>
		</div>
	);
}

export default RegisterForm;
