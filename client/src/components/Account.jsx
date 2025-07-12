import axios from "axios";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { toast } from "react-toastify";

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
		}
        catch(err){
            console.error(err);
        }
    }

    return (
        <div className="main-content" id="accountSettings">
				<h1>Account Settings</h1>
				<form onSubmit={handleSubmit} className="profile-form">
					<div className="form-group">
						<label htmlFor="firstName">First Name</label>
						<input 
							type="text" 
							id="firstName" 
							name="firstName" 
							ref={firstNameRef}
							defaultValue={first_name || ""}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="lastName">Last Name</label>
						<input 
							type="text" 
							id="lastName" 
							name="lastName" 
							ref={lastNameRef}
							defaultValue={last_name || ""}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input 
							type="text" 
							id="username" 
							name="username" 
							ref={usernameRef}
							defaultValue={username || ""}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input 
							type="email" 
							id="email" 
							name="email" 
							ref={emailRef}
							defaultValue={email || ""}
						/>
					</div>

					<div className="form-group">
						<button type="submit" id="updateButton">
							Update
						</button>
						<button type="button" id="cancelButton">
							Cancel
						</button>
					</div>
				</form>
			</div>
    )
}

export default Account;