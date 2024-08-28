import { IonIcon } from '@ionic/react';
import { mail, eye, eyeOff } from 'ionicons/icons';
import { useState } from 'react';
import { Form, Link, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";

function OTPForm() {
    const [email, setEmail, showPass, setShowPass] = useOutletContext();
    const [confirmPass, setConfirmPass] = useState(false);

    async function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const {otp, newPassword, confirmPassword} = Object.fromEntries(formData.entries());
        try{
            const response = await axios.patch("http://localhost:8000/auth/reset-password", {email, otp, newPassword, confirmPassword}, {withCredentials: true});
            console.log(response);
            const data = response.data;
            if(data.status === "success"){
                toast.success(data.message, {
                    position: "bottom-right"
                });
            }
        }
        catch(err){
            toast.error(data.messsage, {
                position: "bottom-right"
            })
        }
    };

	return (
		<div className="form-box otp-form">
			<h2>Enter OTP</h2>  
			<Form
				onSubmit={handleSubmit}
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
						<Link to="/login" className="link">
							Login
						</Link>
					</p>
				</div>
			</Form>
		</div>
	);
}

// export const otpAction = async (res) => {
//     const formData = await res.request.formData();
//     const {otp, newPassword, confirmPassword} = Object.fromEntries(formData);
//     try{
//         const response = await axios.patch("http://localhost:8000/auth/reset-password", {email, otp, newPassword, confirmPassword}, {withCredentials: true});
//         const data = response.data;
//         if(data.status === "success"){
//             toast.success(data.message, {
//                 position: "bottom-right"
//             });
//         }
//     }
//     catch(err){
//         toast.error(data.messsage, {
//             position: "bottom-right"
//         })
//     }
// }

export default OTPForm;
