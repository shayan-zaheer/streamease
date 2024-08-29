import { IonIcon } from "@ionic/react";
import { mail } from "ionicons/icons";
import { Form, Link, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function ForgetForm() {
	const [, , , setEmail] = useOutletContext();

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const { email } = Object.fromEntries(formData.entries());

		let toastId; 
		try {
			toastId = toast.loading("Sending OTP...", {
				theme: "dark",
				position: "bottom-right",
			});

			const response = await axios.patch(
				"http://localhost:8000/auth/forgot-password",
				{ email }
			);

			setEmail(email);

			const data = response.data;
			toast.update(toastId, {
				render: data.message,
				type: "success",
				isLoading: false,
				autoClose: 4000,
				position: "bottom-right",
			});
			return data;
		} catch (err) {
			console.log(err);
			const errorMessage = err.response?.data?.message || "An error occurred. Please try again.";
			toast.update(toastId, {
				render: errorMessage,
				type: "error",
				isLoading: false,
				autoClose: 4000,
				position: "bottom-right",
			});
			return { error: errorMessage };
		}
	}

	return (
		<div className="form-box forgot-password">
			<h2>Forgot Password</h2>
			<Form
				onSubmit={handleSubmit}
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
						Remembered?{" "}
						<Link to="/login" className="link">
							Login
						</Link>
					</p>
					<p>
						Received OTP?{" "}
						<Link to="/otp" className="link">
							Continue
						</Link>
					</p>
				</div>
			</Form>
		</div>
	);
}

export default ForgetForm;
