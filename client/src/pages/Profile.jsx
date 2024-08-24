function Profile() {
	return (
		<div class="main">
			<div class="sidebar">
				<div class="profile-pic">
					<img src="path/to/profile.jpg" alt="Profile Picture" />
				</div>
				<div class="profile-name">
					<h2></h2>
					<h3></h3>
				</div>
				<ul>
					<li class="active">
						<a href="#" id="accountLink">
							Account
						</a>
					</li>
					<li>
						<a href="#" id="passwordLink">
							Password
						</a>
					</li>
				</ul>
				<div class="logout">
					<i class="bx bx-log-out"></i>
					<span class="logout-title">Logout</span>
				</div>
			</div>

			<div class="notifications"></div>

			<div class="main-content" id="accountSettings">
				<h1>Account Settings</h1>
				<form id="update-form">
					<div class="form-group">
						<label for="firstName">First Name</label>
						<input type="text" id="firstName" name="firstName" />
					</div>
					<div class="form-group">
						<label for="lastName">Last Name</label>
						<input type="text" id="lastName" name="lastName" />
					</div>
					<div class="form-group">
						<label for="username">Username</label>
						<input type="text" id="username" name="username" />
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" />
					</div>

					<div class="form-group">
						<button type="submit" id="updateButton">
							Update
						</button>
						<button type="button" id="cancelButton">
							Cancel
						</button>
					</div>
				</form>
			</div>

			<div
				class="main-content"
				id="passwordSettings"
				style={{display: "none"}}
			>
				<h1>Password Settings</h1>
				<form id="change-form">
					<div class="form-group">
						<label for="oldPassword">Old password</label>
						<input
							type="password"
							id="oldPassword"
							name="oldPassword"
						/>
					</div>
					<div class="form-group">
						<label for="newPassword">New password</label>
						<input
							type="password"
							id="newPassword"
							name="newPassword"
						/>
					</div>
					<div class="form-group">
						<label for="confirmPassword">
							Confirm new password
						</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
						/>
					</div>
					<div class="form-group">
						<button type="submit" id="updatePasswordButton">
							Update
						</button>
						<button type="button" id="cancelPasswordButton">
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Profile;
