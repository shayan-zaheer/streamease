import { IonIcon } from '@ionic/react';
import { image, lockClosed, mail, person } from 'ionicons/icons';

function RegisterForm({setActive}) {
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
					<span className="icon">
                        <IonIcon icon={lockClosed} />
					</span>
					<input id="pwInput" name="pass" type="password" required />
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
						<a onClick={() => setActive("login")} className="login-link">
							Login
						</a>
					</p>
				</div>
			</form>
		</div>
	);
}

export default RegisterForm;
