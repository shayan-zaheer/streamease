import { IonIcon } from '@ionic/react';
import { mail, eye, eyeOff } from 'ionicons/icons';
import { useState } from 'react';
import { Form, Link, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";

function OTPForm() {
    const [showPass, setShowPass, email] = useOutletContext();
    const [confirmPass, setConfirmPass] = useState(true);

    async function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const {otp, newPassword, confirmPassword} = Object.fromEntries(formData.entries());
        try{
            const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}auth/reset-password`, {email, otp, newPassword, confirmPassword}, {withCredentials: true});
            console.log(response);  
            const data = response.data;
            if(data.status === "success"){
                toast.success(data.message, {
                    theme: "dark",
                    position: "bottom-right"
                });
            }
        }
        catch(err){
            toast.error(err.response.data.message, {
                theme: "dark",
                position: "bottom-right"
            })
        }
    };

	return (
		<div className="w-full">
			<h2 className="text-responsive-2xl text-white text-center mb-6">Enter OTP</h2>  
			<Form
				onSubmit={handleSubmit}
				id="otpForm"
				method="POST"
				encType="multipart/form-data"
				className="space-y-4"
			>
				<div className="relative">
					<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
						<IonIcon icon={mail} />
					</span>
					<input 
						id="otpInput" 
						name="otp" 
						type="text" 
						required 
						className="input-netflix pl-10"
						placeholder="Enter OTP"
					/>
				</div>
				
				<div className="relative">
					<span 
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer z-10 hover:text-purple-400 transition-colors duration-300" 
						onClick={() => setShowPass(!showPass)}
					>
                        {showPass ? <IonIcon icon={eyeOff} /> :  <IonIcon icon={eye} />}
					</span>
					<input
						id="newPasswordInput"
						name="newPassword"
						type={showPass ? "password" : "text"}
						required
						className="input-netflix pr-10"
						placeholder="New Password"
					/>
				</div>
				
				<div className="relative">
					<span 
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer z-10 hover:text-purple-400 transition-colors duration-300" 
						onClick={() => setConfirmPass(!confirmPass)}
					>
                        {confirmPass ? <IonIcon icon={eyeOff} /> :  <IonIcon icon={eye} />}
					</span>
					<input
						id="confirmPasswordInput"
						name="confirmPassword"
						type={confirmPass ? "password" : "text"}
						required
						className="input-netflix pr-10"
						placeholder="Confirm Password"
					/>
				</div>
				
				<button type="submit" className="btn-primary w-full">
					Submit
				</button>
				
				<div className="text-center text-gray-300">
					<p>
						Remembered?{" "}
						<Link to="/login" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
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
//         const response = await axios.patch("${import.meta.env.VITE_BACKEND_URLauth/reset-password", {email, otp, newPassword, confirmPassword}, {withCredentials: true});
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
