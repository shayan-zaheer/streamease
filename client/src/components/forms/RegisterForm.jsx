function RegisterForm({setActive}) {
	return (
		<div className="form-box register">
			<h2>Registration</h2>
			<form
				action="#"
				id="signupForm"
				method="POST"
				enctype="multipart/form-data"
			>
				<div className="input-box">
					<span className="icon">
						<ion-icon name="person"></ion-icon>
					</span>
					<input id="fnameInput" name="fname" type="text" required />
					<label htmlFor="fname">First Name</label>
				</div>

				<div className="input-box">
					<span className="icon">
						<ion-icon name="person"></ion-icon>
					</span>
					<input id="lnameInput" name="lname" type="text" required />
					<label htmlFor="lname">Last Name</label>
				</div>

				<div className="input-box">
					<span className="icon">
						<ion-icon name="person"></ion-icon>
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
						<ion-icon name="mail"></ion-icon>
					</span>
					<input id="emailInput" name="email" type="email" required />
					<label htmlFor="email">Email</label>
				</div>

				<div className="input-box">
					<span className="icon">
						<ion-icon name="lock-closed"></ion-icon>
					</span>
					<input id="pwInput" name="pass" type="password" required />
					<label htmlFor="pass">Password</label>
				</div>

				<div className="input-box">
					<span className="icon">
						<ion-icon name="image"></ion-icon>
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
