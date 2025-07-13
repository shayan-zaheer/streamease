import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { userActions } from "../store/userSlice";
import { persistor } from "../store/index";

async function logout(navigate, dispatch) {
    try {
        dispatch(userActions.clearUser());
        await persistor.purge();
        
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth/logout`, {}, { withCredentials: true });
        
        navigate("/login");
    } catch (error) {
        console.error("Logout failed", error);
        navigate("/login");
    }
}

function ProfileSidebar({ page, setPage }) {
    const { first_name, last_name, profile_image_url, username } = useSelector((store) => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="profile-card w-full lg:w-80">
            <div className="text-center mb-6">
                <img 
                    src={profile_image_url} 
                    alt="Profile Picture" 
                    className="user-avatar w-24 h-24 mx-auto mb-4"
                />
                <h2 className="text-xl font-bold text-white mb-1">
                    {`${first_name} ${last_name}`}
                </h2>
                <h3 className="text-purple-400 font-medium">
                    @{username}
                </h3>
            </div>
            
            <nav className="space-y-2 mb-8">
                <button 
                    onClick={() => setPage("account")} 
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        page === "account" 
                            ? "bg-purple-600 text-white" 
                            : "text-gray-300 hover:bg-purple-900/50 hover:text-white"
                    }`}
                >
                    Account Settings
                </button>
                <button 
                    onClick={() => setPage("password")} 
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        page === "password" 
                            ? "bg-purple-600 text-white" 
                            : "text-gray-300 hover:bg-purple-900/50 hover:text-white"
                    }`}
                >
                    Change Password
                </button>
            </nav>
            
            <button 
                onClick={() => logout(navigate, dispatch)} 
                className="btn-outline w-full"
            >
                <i className="bx bx-log-out mr-2"></i>
                Logout
            </button>
        </div>
    );
}

ProfileSidebar.propTypes = {
    page: PropTypes.string.isRequired,
    setPage: PropTypes.func.isRequired,
};

export default ProfileSidebar;
