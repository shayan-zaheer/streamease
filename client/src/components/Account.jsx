function Account(){
    async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());

        try{
            const result = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}users/update-profile`, formObject, {
                withCredentials: true
            });
            console.log(result);
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
						<input type="text" id="firstName" name="firstName" />
					</div>
					<div className="form-group">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" name="lastName" />
					</div>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" name="username" />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" />
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