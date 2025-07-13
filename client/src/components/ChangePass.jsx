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
        <div className="profile-container">
            <h1 className="text-2xl font-bold text-white mb-6">Password Settings</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <label htmlFor="oldPassword" className="form-label">Old Password</label>
                    <input
                        type="password"
                        id="oldPassword"
                        name="oldPassword"
                        className="input-netflix"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        className="input-netflix"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="input-netflix"
                    />
                </div>
                <div className="flex gap-4 mt-6">
                    <button type="submit" className="btn-primary flex-1">
                        Update Password
                    </button>
                    <button type="button" className="btn-outline flex-1">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ChangePass;
