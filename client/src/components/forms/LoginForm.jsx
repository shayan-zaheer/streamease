import { IonIcon } from "@ionic/react";
import { eye, eyeOff, mail } from "ionicons/icons";
import { Form, Link, redirect, useOutletContext } from "react-router-dom";
import axios from "axios";

function LoginForm() {
    const [showPass, setShowPass] = useOutletContext();

	return (
		<div className="w-full">
			<h2 className="text-responsive-2xl text-white text-center mb-6">Login</h2>
			<Form method="POST" encType="multipart/form-data" className="space-y-4">
				<div className="relative">
					<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
						<IonIcon icon={mail} />
					</span>
					<input 
						id="eInput" 
						name="email" 
						type="email" 
						required 
						className="input-netflix pl-10"
						placeholder="Email"
					/>
				</div>
				
				<div className="relative">
					<span
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer z-10 hover:text-purple-400 transition-colors duration-300"
						onClick={() => setShowPass(!showPass)}
					>
						{showPass ? (
							<IonIcon icon={eyeOff} />
						) : (
							<IonIcon icon={eye} />
						)}
					</span>
					<input
						id="pInput"
						name="password"
						type={showPass ? "password" : "text"}
						required
						className="input-netflix pr-10"
						placeholder="Password"
					/>
				</div>
				
				<div className="flex items-center justify-between text-sm">
					<label className="flex items-center text-gray-300">
						<input 
							type="checkbox" 
							className="mr-2 bg-purple-900/50 border-purple-500 rounded focus:ring-purple-500"
						/>
						Remember me
					</label>
					<Link to="/forgot-password" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
						Forget Password?
					</Link>
				</div>
				
				<button 
					type="submit" 
					className="btn-primary w-full"
				>
					Login
				</button>
				
				<div className="text-center text-gray-300">
					<p>
						Don&apos;t have an account?{' '}
						<Link 
							to="/register"
							className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
						>
							Register
						</Link>
					</p>
				</div>
			</Form>
		</div>
	);
}

export const loginAction = async (res) => {
	const formData = await res.request.formData();
	const { email, password } = Object.fromEntries(formData);

	try {
		const result = await axios.post(
			`${import.meta.env.VITE_BACKEND_URL}auth/login`,
			{ email, password },
			{ withCredentials: true }
		);
		console.log(result);
		const data = result.data;
		if (data.status === "success") {
			return redirect("/home-page");
		} else {
			console.error("Login failed:", data);
			return null;
		}
	} catch (err) {
		console.error("Login error:", err);
		return null;
	}
};

export default LoginForm;
