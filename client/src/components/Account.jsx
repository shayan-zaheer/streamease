function Account(){
    return (
        <div className="main-content" id="accountSettings">
				<h1>Account Settings</h1>
				<form id="update-form">
					<div className="form-group">
						<label for="firstName">First Name</label>
						<input type="text" id="firstName" name="firstName" />
					</div>
					<div className="form-group">
						<label for="lastName">Last Name</label>
						<input type="text" id="lastName" name="lastName" />
					</div>
					<div className="form-group">
						<label for="username">Username</label>
						<input type="text" id="username" name="username" />
					</div>
					<div className="form-group">
						<label for="email">Email</label>
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