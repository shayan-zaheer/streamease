function ChangePass() {
	return (
		<div className="main-content" id="passwordSettings">
			<h1>Password Settings</h1>
			<form id="change-form">
				<div className="form-group">
					<label for="oldPassword">Old password</label>
					<input
						type="password"
						id="oldPassword"
						name="oldPassword"
					/>
				</div>
				<div className="form-group">
					<label for="newPassword">New password</label>
					<input
						type="password"
						id="newPassword"
						name="newPassword"
					/>
				</div>
				<div className="form-group">
					<label for="confirmPassword">Confirm new password</label>
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
					/>
				</div>
				<div className="form-group">
					<button type="submit" id="updatePasswordButton">
						Update
					</button>
					<button type="button" id="cancelPasswordButton">
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default ChangePass;
