import { useState } from "react";
import { IonIcon } from '@ionic/react';
import { closeOutline, playOutline, downloadOutline, tvOutline, phonePortraitOutline } from 'ionicons/icons';
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function InitialPage() {
	const [active, setActive] = useState(false);
    const [showPass, setShowPass] = useState(true);
    const [email, setEmail] = useState("");
    
	return (
		<>
			{/* Hero Section */}
			<div className="hero-section">
				{/* Background Image */}
				<div 
					className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: 'url("/images/PK-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg")' }}
				>
					<div className="hero-overlay"></div>
				</div>

				{/* Header */}
				<header className="relative z-10 px-6 py-4">
					<div className="container mx-auto flex items-center justify-between">
						<Link to="#" className="footer-title">
							Stream<span className="text-white">Ease</span>
						</Link>
						<div className="nav-actions">
							<Link 
								to="/login" 
								onClick={() => setActive(true)} 
								className="btn-primary text-sm md:text-base px-4 py-2"
							>
								Sign In
							</Link>
						</div>
					</div>
				</header>

				{/* Hero Content */}
				<div className="hero-content">
					<div className="text-center max-w-4xl mx-auto">
						<h1 className="hero-title">
							Unlimited movies, TV shows, and more
						</h1>
						<p className="hero-subtitle">
							Watch anywhere. Cancel anytime.
						</p>
						<p className="text-responsive-lg text-white mb-8 max-w-2xl mx-auto">
							Ready to watch? Enter your email to create or restart your membership.
						</p>
						<div className="hero-cta">
							<Link 
								to="/login" 
								onClick={() => setActive(true)} 
								className="btn-primary"
							>
								<IonIcon icon={playOutline} className="text-2xl" />
								Get Started
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Modal */}
			<div className={`modal-overlay ${active ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
				<div className="modal-container">
					<button 
						className="modal-close"
						onClick={() => setActive(false)}
					>
						<IonIcon icon={closeOutline} />
					</button>
					<Outlet context={[showPass, setShowPass, email, setEmail]} />
				</div>
			</div>

			{/* Features Section */}
			<section className="feature-section">
				<div className="container mx-auto px-6">
					<div className="feature-grid">
						<div className="text-center lg:text-left">
							<h2 className="feature-title">
								Enjoy on your TV
							</h2>
							<p className="feature-description">
								Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, 
								Blu-ray players, and more.
							</p>
						</div>
						<div className="relative">
							<div className="relative">
								<img src="/images/tv.png" alt="TV" className="w-full h-auto" />
								<video 
									className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-auto z-10" 
									autoPlay 
									loop 
									muted
								>
									<source src="/videos/video1.mp4" type="video/mp4" />
								</video>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Separator */}
			<div className="h-2 bg-card"></div>

			{/* Download Feature */}
			<section className="feature-section">
				<div className="container mx-auto px-6">
					<div className="feature-grid">
						<div className="order-2 lg:order-1">
							<img src="/images/mobile.png" alt="Mobile Device" className="w-full h-auto" />
						</div>
						<div className="text-center lg:text-left order-1 lg:order-2">
							<h2 className="feature-title">
								Download your shows to watch offline
							</h2>
							<p className="feature-description">
								Save your favorites easily and always have something to watch.
							</p>
							<div className="feature-icons">
								<IonIcon icon={downloadOutline} />
								<IonIcon icon={phonePortraitOutline} />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Separator */}
			<div className="h-2 bg-card"></div>

			{/* Watch Everywhere */}
			<section className="feature-section">
				<div className="container mx-auto px-6">
					<div className="feature-grid">
						<div className="text-center lg:text-left">
							<h2 className="feature-title">
								Watch everywhere
							</h2>
							<p className="feature-description">
								Stream unlimited movies and TV shows on your phone, tablet, 
								laptop, and TV without paying more.
							</p>
							<div className="feature-icons">
								<IonIcon icon={tvOutline} />
								<IonIcon icon={phonePortraitOutline} />
							</div>
						</div>
						<div className="relative">
							<img src="/images/kids.png" alt="Multiple Devices" className="w-full h-auto" />
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

export default InitialPage;
