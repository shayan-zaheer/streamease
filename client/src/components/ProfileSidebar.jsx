import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

async function logout(navigate) {
    try {
        await axios.post("http://localhost:8000/auth/logout", {}, { withCredentials: true });
        navigate("/login");
    } catch (error) {
        console.error("Logout failed", error);
    }
}

function ProfileSidebar({ page, setPage }) {
    const { first_name, last_name, profile_image_url, username } = useSelector((store) => store.user);
    const navigate = useNavigate();

    return (
        <div className="sidebar">
            <div className="profile-pic">
                <img src={profile_image_url} alt="Profile Picture" />
            </div>
            <div className="profile-name">
                <h2>{`${first_name} ${last_name}`}</h2>
                <h3>{username}</h3>
            </div>
            <ul>
                <li className={page === "account" ? "active" : ""}>
                    <a onClick={() => setPage("account")} id="accountLink">
                        Account
                    </a>
                </li>
                <li className={page === "password" ? "active" : ""}>
                    <a onClick={() => setPage("password")} id="passwordLink">
                        Password
                    </a>
                </li>
            </ul>
            <div className="logout">
                <i className="bx bx-log-out"></i>
                <span onClick={() => logout(navigate)} className="logout-title">
                    Logout
                </span>
            </div>
        </div>
    );
}

export default ProfileSidebar;
