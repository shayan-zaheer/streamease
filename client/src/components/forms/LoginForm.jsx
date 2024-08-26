import { IonIcon } from "@ionic/react";
import { eye, eyeOff, mail } from "ionicons/icons";
import { Form, redirect } from "react-router-dom";
import axios from "axios";

function LoginForm({ setActive, showPass, setShowPass }) {
	return (
		<div className="form-box login">
			<h2>Login</h2>
			<Form method="POST" encType="multipart/form-data">
				<div className="input-box">
					<span className="icon">
						<IonIcon icon={mail} />
					</span>
					<input id="eInput" name="email" type="email" required />
					<label htmlFor="email">Email</label>
				</div>
				<div className="input-box">
					<span
						style={{ cursor: "pointer" }}
						className="icon"
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
					/>
					<label htmlFor="password">Password</label>
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
						<a
							onClick={() => setActive("register")}
							className="link"
						>
							Register
						</a>
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
			"http://localhost:8000/auth/login",
			{ email, password },
			{ withCredentials: true }
		);
		console.log(result);
		const data = result.data;
		if (data.status === "success") {
			return redirect("/home-page");
		} else {
			return console.log(data);
		}
	} catch (err) {
		return console.log(err);
	}
};

export default LoginForm;
