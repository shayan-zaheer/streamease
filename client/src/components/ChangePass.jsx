import axios from "axios";
import { toast } from "react-toastify";

function ChangePass() {
    async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());

        try{
            const result = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}auth/update-password`, formObject, {
                withCredentials: true
            });
			toast.success("Password updated successfully!");
		}
        catch(err){
            
            console.error(err);
        }
    }

	return (
		<div className="main-content" id="passwordSettings">
			<h1>Password Settings</h1>
			<form onSubmit={handleSubmit} className="profile-form">
				<div className="form-group">
					<label htmlFor="oldPassword">Old password</label>
					<input
						type="password"
						id="oldPassword"
						name="oldPassword"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="newPassword">New password</label>
					<input
						type="password"
						id="newPassword"
						name="newPassword"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="confirmPassword">Confirm new password</label>
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
					/>
				</div>
				<div className="form-group">
					<button type="submit" id="updatePasswordButton">
						Update
					</button>
					<button type="button" id="cancelPasswordButton">
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default ChangePass;
