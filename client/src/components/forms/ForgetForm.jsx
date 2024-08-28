import { IonIcon } from '@ionic/react';
import { mail } from 'ionicons/icons';
import { Link } from 'react-router-dom';

function ForgetForm() {
	return (
		<div className="form-box forgot-password">
			<h2>Forgot Password</h2>
			<form
				action="#"
				id="forgotPasswordForm"
				method="POST"
				encType="multipart/form-data"
			>
				<div className="input-box">
					<span className="icon">
						<IonIcon icon={mail} />
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
						Remembered? {" "}
						<Link to="/login" className="link">
							Login
						</Link>
					</p>
					<p>
						Received OTP? {" "}
						<Link to="/otp" className="link">
							Continue
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}

export default ForgetForm;
