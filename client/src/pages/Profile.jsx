import { useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import Account from "../components/Account";
import ChangePass from "../components/ChangePass";

function Profile() {
    const [page, setPage] = useState("account");

	return (
        <div className="profile-container">
            <div className="flex flex-col lg:flex-row gap-8">
                <ProfileSidebar page={page} setPage={setPage} />
                <div className="flex-1">
                    {page === "account" && <Account />}
                    {page === "password" && <ChangePass />}
                </div>
            </div>
        </div>
	);
}

export default Profile;
