import { IonIcon } from '@ionic/react';
import { mail, eye, eyeOff } from 'ionicons/icons';
import { useState } from 'react';

function OTPForm({setActive, showPass, setShowPass}) {
    const [confirmPass, setConfirmPass] = useState(false);
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
                <span style={{cursor: "pointer"}} className="icon" onClick={() => setShowPass(!showPass)}>
                        {showPass ? <IonIcon icon={eyeOff} /> :  <IonIcon icon={eye} />}
					</span>
					<input
						id="newPasswordInput"
						name="newPassword"
						type={showPass ? "password" : "text"}
						required
					/>
					<label htmlFor="newPassword">New Password</label>
				</div>
				<div className="input-box">
                <span style={{cursor: "pointer"}} className="icon" onClick={() => setConfirmPass(!confirmPass)}>
                        {confirmPass ? <IonIcon icon={eyeOff} /> :  <IonIcon icon={eye} />}
					</span>
					<input
						id="confirmPasswordInput"
						name="confirmPassword"
						type={confirmPass ? "password" : "text"}
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
						<a onClick={() => setActive("login")} className="link">
							Login
						</a>
					</p>
				</div>
			</form>
		</div>
	);
}

export default OTPForm;
