import { useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import Account from "../components/Account";
import ChangePass from "../components/ChangePass";

function Profile() {
    const [page, setPage] = useState("account");

	return (
        <div className="profile-container">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col justify-center items-center lg:flex-row gap-8">
                    <div className="lg:w-80 flex-shrink-0">
                        <ProfileSidebar page={page} setPage={setPage} />
                    </div>
                    <div className="flex-1 min-w-0">
                        {page === "account" && <Account />}
                        {page === "password" && <ChangePass />}
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Profile;
