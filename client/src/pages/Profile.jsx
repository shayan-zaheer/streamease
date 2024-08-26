import { useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import Account from "../components/Account";
import ChangePass from "../components/ChangePass";

function Profile() {
    const [page, setPage] = useState("account");

	return (
        <>
            <div className="main-profile">
                <ProfileSidebar page={page} setPage={setPage} />
                {page === "account" && <Account />}
                {page === "password" && <ChangePass />}
			</div>


			
        </>
	);
}

export default Profile;
