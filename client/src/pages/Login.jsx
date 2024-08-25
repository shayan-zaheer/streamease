import { useEffect, useState } from "react";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import ForgetForm from "../components/forms/ForgetForm";
import OTPForm from "../components/forms/OTPForm";

function Login() {
    const [active, setActive] = useState("");

    useEffect(() => {
        console.log(active);
    }, [active]);

	return (
		<>
			<header>
				<div className="nav container">
					<a href="login-signup.html" className="logo">
						Stream<span>Ease</span>
					</a>

					<button onClick={() => setActive("login")} className="btn btn-red-sm">Login</button>

					<a href="#" className="user">
						<img alt="" className="user-img" />
					</a>
				</div>
			</header>
			<div className="main">
				<div className="box active-popup">
					<div className="hero active">
						<span className="icon-close">
							<ion-icon name="close-outline"></ion-icon>
						</span>
						
						{active === "login" && <LoginForm setActive={setActive} /> }
						{active === "register" && <RegisterForm setActive={setActive} />}
						{active === "forget" && <ForgetForm setActive={setActive} />}
						{active === "otp" && <OTPForm setActive={setActive} />}

					</div>
				</div>
			</div>
			<div className="seperation"></div>

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
			<div className="seperation"></div>

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
					<video src="videos/video1.mp4" autoplay loop muted></video>
				</div>
			</section>
			<div className="seperation"></div>

			<div className="copyright">
				<p>&#169; WebWar All rights reserved</p>
			</div>
		</>
	);
}

export default Login;
