import { useState, useEffect } from "react";

function Login() {
	const [activeForm, setActiveForm] = useState("");
	const [backgroundIndex, setBackgroundIndex] = useState(0);

	const images = [
		"https://i0.wp.com/interplanetary.tv/wp-content/uploads/2024/02/Alienoid-1-landscape-poster-1.jpg?ssl=1",
		"https://s0.smartresize.com/wallpaper/156/622/HD-wallpaper-avengers-endgame-all-characters-superheroes-movies.jpg",
		"https://assets-in.bmscdn.com/discovery-catalog/events/et00040397-psbktzcwam-landscape.jpg",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 2500);
		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<>
			<header>
				<div className="nav container">
					<a href="login-signup.html" className="logo">
						Stream<span>Ease</span>
					</a>
					<button
						className="btn btn-red-sm"
						onClick={() => setActiveForm("login")}
					>
						Login
					</button>
					<a href="#" className="user">
						<img alt="" className="user-img" />
					</a>
				</div>
			</header>

			<div
				className="main"
				style={{ backgroundImage: `url(${images[backgroundIndex]})` }}
			>
				<div className="box">
					<div className="hero">
						<span
							className="icon-close"
							onClick={() => setActiveForm("none")}
						>
							<ion-icon name="close-outline"></ion-icon>
						</span>

						{/* Login Form */}
						{activeForm === "login" && (
							<div className="form-box login">
								<h2>Login</h2>
								<form action="#" method="POST">
									<div className="input-box">
										<span className="icon">
											<ion-icon name="mail"></ion-icon>
										</span>
										<input
											name="email"
											type="email"
											required
										/>
										<label>Email</label>
									</div>
									<div className="input-box">
										<span className="icon">
											<ion-icon name="lock-closed"></ion-icon>
										</span>
										<input
											name="pass"
											type="password"
											required
										/>
										<label>Password</label>
									</div>
									<div className="remember-forget">
										<label>
											<input type="checkbox" />
											Remember me
										</label>
										<a
											href="#"
											onClick={() =>
												setActiveForm("forgot-password")
											}
										>
											Forget Password?
										</a>
									</div>
									<button type="submit" className="boto">
										Login
									</button>
									<div className="login-register">
										<p>
											Don't have an account?{" "}
											<a
												href="#"
												onClick={() =>
													setActiveForm("register")
												}
											>
												Register
											</a>
										</p>
									</div>
								</form>
							</div>
						)}

						{/* Register Form */}
						{activeForm === "register" && (
							<div className="form-box register">
								<h2>Registration</h2>
								<form action="#" method="POST">
									{/* Registration fields here */}
									<button type="submit" className="boto">
										Register
									</button>
									<div className="login-register">
										<p>
											Already have an account?{" "}
											<a
												href="#"
												onClick={() =>
													setActiveForm("login")
												}
											>
												Login
											</a>
										</p>
									</div>
								</form>
							</div>
						)}

						{/* Forgot Password Form */}
						{activeForm === "forgot-password" && (
							<div className="form-box forgot-password">
								<h2>Forgot Password</h2>
								<form action="#" method="POST">
									{/* Forgot password fields */}
									<button type="submit" className="boto">
										Submit
									</button>
									<div className="login-register">
										<p>
											Remembered?{" "}
											<a
												href="#"
												onClick={() =>
													setActiveForm("login")
												}
											>
												Login
											</a>
										</p>
										<p>
											Received OTP?{" "}
											<a
												href="#"
												onClick={() =>
													setActiveForm("otp")
												}
											>
												Continue
											</a>
										</p>
									</div>
								</form>
							</div>
						)}

						{/* OTP Form */}
						{activeForm === "otp" && (
							<div className="form-box otp-form">
								<h2>Enter OTP</h2>
								<form action="#" method="POST">
									{/* OTP fields */}
									<button type="submit" className="boto">
										Submit
									</button>
									<div className="login-register">
										<p>
											Remembered?{" "}
											<a
												href="#"
												onClick={() =>
													setActiveForm("login")
												}
											>
												Login
											</a>
										</p>
									</div>
								</form>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Sections (additional content) */}
			<section className="first">
				<div className="secimg">
					<img src="images/mobile.png" alt="" />
				</div>
				<div>
					<span>Download your shows to watch offline</span>
					<span>
						Save your favorites easily and always have something to
						watch.
					</span>
				</div>
			</section>

			<section className="first second">
				<div>
					<span>Watch everywhere</span>
					<span>
						Stream unlimited movies and TV shows on your phone,
						tablet, laptop, and TV.
					</span>
				</div>
				<div className="secimg">
					<img src="images/tv.png" alt="" />
					<video src="videos/video1.mp4" autoPlay loop muted></video>
				</div>
			</section>
		</>
	);
}

export default Login;
