import { IonIcon } from '@ionic/react';
import { mail } from 'ionicons/icons';
import { Form, Link, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";

function ForgetForm() {
    const [setEmail] = useOutletContext();

	return (
		<div className="form-box forgot-password">
			<h2>Forgot Password</h2>
			<Form
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
			</Form>
		</div>
	);
}

export const forgotAction = async (res) => {
    const formData = await res.request.formData();
    const {email} = Object.fromEntries(formData);
    console.log(email);
    try{
        const toastId = toast.loading("Sending OTP...", {
            theme: "dark",
            position: "bottom-right"
        });
        const response = await axios.patch("http://localhost:8000/auth/forgot-password",
            { email }
        );
        setEmail(email);
        const data = response.data;
        toast.update(toastId, {
            render: data.message,
            type: "success",
            isLoading: false,
            autoClose: 4000,
            position: "bottom-right"
        });
        return data;
    }
    catch(err){
        toast.error(err, {
            position: "bottom-right"
        })
        return err;
    }
    
}

export default ForgetForm;
