import { useState } from "react";
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
// import LoginForm from "../components/forms/LoginForm";
// import RegisterForm from "../components/forms/RegisterForm";
// import ForgetForm from "../components/forms/ForgetForm";
// import OTPForm from "../components/forms/OTPForm";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function InitialPage() {
    const [active, setActive] = useState(false);
    const [showPass, setShowPass] = useState(true);

	return (
		<>
			<header>
				<div className="nav container">
					<Link to="#" className="logo">
						Stream<span>Ease</span>
					</Link>

					<Link to="/login" onClick={() => setActive(true)} className="btn btn-red-sm">Login</Link>
				</div>
			</header>
			<div className="main">
				<div className={`box ${active && "active-popup"}`}>
					<div className="hero active">
						<span className="icon-close" onClick={() => setActive(false)}>
                            <IonIcon icon={closeOutline} />
						</span>

                        <Outlet context={[showPass, setShowPass]} />

					</div>
				</div>
			</div>
			<div className="seperation"></div>

			<section className="first">
				<div className="secimg">
					<img src="/images/mobile.png" alt="" />
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
					<img src="/images/tv.png" alt="" />
					<video src="/videos/video1.mp4" autoPlay loop muted></video>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default InitialPage;