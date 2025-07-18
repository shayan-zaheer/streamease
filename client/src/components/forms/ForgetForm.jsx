import { IonIcon } from "@ionic/react";
import { mail } from "ionicons/icons";
import { Form, Link, useOutletContext } from "react-router-dom";
import { toast } from "react-hot-toast";
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
				`${import.meta.env.VITE_BACKEND_URL}auth/forgot-password`,
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
		<div className="w-full">
			<h2 className="text-responsive-2xl text-white text-center mb-6">Forgot Password</h2>
			<Form
				onSubmit={handleSubmit}
				id="forgotPasswordForm"
				method="POST"
				encType="multipart/form-data"
				className="space-y-4"
			>
				<div className="relative">
					<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
						<IonIcon icon={mail} />
					</span>
					<input
						id="forgotEmailInput"
						name="email"
						type="email"
						required
						className="input-netflix pl-10"
						placeholder="Enter your email"
					/>
				</div>
				
				<button type="submit" className="btn-primary w-full">
					Send OTP
				</button>
				
				<div className="text-center text-gray-300 space-y-2">
					<p>
						Remembered?{" "}
						<Link to="/login" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
							Login
						</Link>
					</p>
					<p>
						Received OTP?{" "}
						<Link to="/otp" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
							Continue
						</Link>
					</p>
				</div>
			</Form>
		</div>
	);
}

export default ForgetForm;
