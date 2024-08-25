function LoginForm({setActive}) {
	return (
		<div className="form-box login">
			<h2>Login</h2>
			<form
				action="#"
				id="loginForm"
				method="POST"
				enctype="multipart/form-data"
			>
				<div className="input-box">
					<span className="icon">
						<ion-icon name="mail"></ion-icon>
					</span>
					<input id="eInput" name="email" type="email" required />
					<label htmlFor="email">Email</label>
				</div>
				<div className="input-box">
					<span className="icon">
						<ion-icon name="lock-closed"></ion-icon>
					</span>
					<input id="pInput" name="pass" type="password" required />
					<label htmlFor="pass">Password</label>
				</div>
				<div className="remember-forget">
					<label>
						<input type="checkbox" />
						Remember me
					</label>
					<a onClick={() => setActive("forget")} id="forgetPasswordLink">
						Forget Password?
					</a>
				</div>
				<button type="submit" className="boto">
					Login
				</button>
				<div className="login-register">
					<p>
						Don't have an account?
						<a onClick={() => setActive("register")} className="register-link">
							Register
						</a>
					</p>
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
