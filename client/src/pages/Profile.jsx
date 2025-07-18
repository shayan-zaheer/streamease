import { useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import Account from "../components/Account";
import ChangePass from "../components/ChangePass";
import { motion } from "framer-motion";

function Profile() {
    const [page, setPage] = useState("account");

	return (
        <motion.div 
            className="profile-container px-4 sm:px-6 md:px-8 lg:px-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                    <div className="lg:w-80 flex-shrink-0">
                        <ProfileSidebar page={page} setPage={setPage} />
                    </div>
                    <div className="flex-1 min-w-0">
                        {page === "account" && <Account />}
                        {page === "password" && <ChangePass />}
                    </div>
                </div>
            </div>
        </motion.div>
	);
}

export default Profile;
