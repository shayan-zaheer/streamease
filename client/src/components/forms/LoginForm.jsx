import { IonIcon } from '@ionic/react';
import { eye, eyeOff, mail } from 'ionicons/icons';

function LoginForm({setActive, showPass, setShowPass}) {
	return (
		<div className="form-box login">
			<h2>Login</h2>
			<form
				action="#"
				id="loginForm"
				method="POST"
				encType="multipart/form-data"
			>
				<div className="input-box">
					<span className="icon">
                        <IonIcon icon={mail} />
					</span>
					<input id="eInput" name="email" type="email" required />
					<label htmlFor="email">Email</label>
				</div>
				<div className="input-box">
					<span className="icon" onClick={() => setShowPass(!showPass)}>
                        {showPass ? <IonIcon icon={eyeOff} /> :  <IonIcon icon={eye} />}
					</span>
					<input id="pInput" name="pass" type={showPass ? "password" : "text"} required />
					<label htmlFor="pass">Password</label>
				</div>
				<div className="remember-forget">
					<label>
						<input type="checkbox" />
						Remember me
					</label>
					<a onClick={() => setActive("forget")} className="link">
						Forget Password?
					</a>
				</div>
				<button type="submit" className="boto">
					Login
				</button>
				<div className="login-register">
					<p>
						Don't have an account?
						<a onClick={() => setActive("register")} className="link">
							Register
						</a>
					</p>
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
