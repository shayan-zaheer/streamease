import axios from "axios";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { toast } from "react-hot-toast";

function Account(){
	const { first_name, last_name, username, email } = useSelector((store) => store.user);
	
	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const usernameRef = useRef(null);
	const emailRef = useRef(null);

	useEffect(() => {
		if (firstNameRef.current) firstNameRef.current.value = first_name || "";
		if (lastNameRef.current) lastNameRef.current.value = last_name || "";
		if (usernameRef.current) usernameRef.current.value = username || "";
		if (emailRef.current) emailRef.current.value = email || "";
	}, [first_name, last_name, username, email]);

    async function handleSubmit(e){
        e.preventDefault();
        
        const formObject = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value
        };

        try{
            const result = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}users/update-profile`, formObject, {
                withCredentials: true
            });
            toast.success("Profile updated successfully!");
        } catch(err){
            toast.error("Failed to update profile.");
            console.error(err);
        }
    }

    return (
        <div className="profile-container">
            <h1 className="text-2xl font-bold text-white mb-6">Account Settings</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        ref={firstNameRef}
                        defaultValue={first_name || ""}
                        className="input-netflix"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        ref={lastNameRef}
                        defaultValue={last_name || ""}
                        className="input-netflix"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        ref={usernameRef}
                        defaultValue={username || ""}
                        className="input-netflix"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        ref={emailRef}
                        defaultValue={email || ""}
                        className="input-netflix"
                    />
                </div>

                <div className="flex gap-4 mt-6">
                    <button type="submit" className="btn-primary flex-1">
                        Update Profile
                    </button>
                    <button type="button" className="btn-outline flex-1">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Account;