import axios from "axios";
import { redirect } from "react-router-dom";
import store from "../store/index.js";
import { userActions } from "../store/userSlice.js";
import { toast } from "react-hot-toast";

export const loginAction = async (res) => {
	const formData = await res.request.formData();
	const { email, password } = Object.fromEntries(formData);

	try {
		const loginResult = await axios.post(
			`${import.meta.env.VITE_BACKEND_URL}auth/login`,
			{ email, password },
			{ withCredentials: true }
		);

		const loginData = loginResult.data;
		if (loginData.status === "success") {
			try {
				const userDataResponse = await axios.get(
					`${import.meta.env.VITE_BACKEND_URL}users/userdata`,
					{ withCredentials: true }
				);

				if (userDataResponse.data && userDataResponse.data.result && userDataResponse.data.result.length > 0) {
					const userData = userDataResponse.data.result[0];
					store.dispatch(userActions.userProfile(userData));
				}
			} catch (userErr) {
				console.error("Failed to fetch user data after login:", userErr);
			}

			toast.success("Login successful!", { duration: 2000 });
			return redirect("/home-page");
		} else {
			console.error("Login failed:", loginData);
			toast.error("Login failed. Please check your credentials.", { duration: 2500 });
			return null;
		}
	} catch (err) {
		console.error("Login error:", err);
		toast.error("An error occurred during login. Please try again.", { duration: 2500 });
		return null;
	}
};
