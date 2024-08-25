import { IonIcon } from '@ionic/react';
import { lockClosed, mail } from 'ionicons/icons';

function OTPForm({setActive}) {
	return (
		<div className="form-box otp-form">
			<h2>Enter OTP</h2>
			<form
				action="#"
				id="otpForm"
				method="POST"
				encType="multipart/form-data"
			>
				<div className="input-box">
					<span className="icon">
						<IonIcon icon={mail} />
					</span>
					<input id="otpInput" name="otp" type="text" required />
					<label htmlFor="otp">OTP</label>
				</div>
				<div className="input-box">
					<span className="icon">
						<IonIcon icon={lockClosed} />
					</span>
					<input
						id="newPasswordInput"
						name="newPassword"
						type="password"
						required
					/>
					<label htmlFor="newPassword">New Password</label>
				</div>
				<div className="input-box">
					<span className="icon">
                        <IonIcon icon={lockClosed} />
					</span>
					<input
						id="confirmPasswordInput"
						name="confirmPassword"
						type="password"
						required
					/>
					<label htmlFor="confirmPassword">Confirm Password</label>
				</div>
				<button type="submit" className="boto">
					Submit
				</button>
				<div className="login-register">
					<p>
						Remembered?{" "}
						<a onClick={() => setActive("login")} className="login-link">
							Login
						</a>
					</p>
				</div>
			</form>
		</div>
	);
}

export default OTPForm;
