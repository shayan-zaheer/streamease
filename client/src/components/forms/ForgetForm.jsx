function ForgetForm({setActive}) {
	return (
		<div className="form-box forgot-password">
			<h2>Forgot Password</h2>
			<form
				action="#"
				id="forgotPasswordForm"
				method="POST"
				enctype="multipart/form-data"
			>
				<div className="input-box">
					<span className="icon">
						<ion-icon name="mail"></ion-icon>
					</span>
					<input
						id="forgotEmailInput"
						name="email"
						type="email"
						required
					/>
					<label htmlFor="forgotEmail">Email</label>
				</div>
				<button type="submit" className="boto">
					Submit
				</button>
				<div className="login-register">
					<p>
						Remembered?
						<a onClick={() => setActive("login")} className="login-link">
							Login
						</a>
					</p>
					<p>
						Received OTP?
						<a onClick={() => setActive("otp")} className="continue-link">
							Continue
						</a>
					</p>
				</div>
			</form>
		</div>
	);
}

export default ForgetForm;
