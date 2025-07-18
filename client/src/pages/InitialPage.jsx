import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { closeOutline, playOutline } from "ionicons/icons";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function InitialPage() {
    const [active, setActive] = useState(false);
    const [showPass, setShowPass] = useState(true);
    const [email, setEmail] = useState("");

    return (
        <motion.div 
            className="initial-page-container px-4 sm:px-6 md:px-8 lg:px-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="hero-section">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            'url("/images/PK-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg")',
                    }}
                >
                    <div className="hero-overlay"></div>
                </div>

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

                <div className="hero-content flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="hero-title">
                            Unlimited movies, TV shows, and more
                        </h1>
                        <p className="hero-subtitle">
                            Watch anywhere. Cancel anytime.
                        </p>
                        <p className="text-responsive-lg text-white mb-8 max-w-2xl mx-auto">
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </p>
                        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/login"
                                onClick={() => setActive(true)}
                                className="btn-primary w-full sm:w-auto"
                            >
                                <IonIcon
                                    icon={playOutline}
                                    className="text-2xl"
                                />
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`modal-overlay ${
                    active ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <div className="modal-container">
                    <button
                        className="modal-close"
                        onClick={() => setActive(false)}
                    >
                        <IonIcon icon={closeOutline} />
                    </button>
                    <Outlet
                        context={[showPass, setShowPass, email, setEmail]}
                    />
                </div>
            </div>

            <section className="features-showcase">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Why Choose StreamEase?
                        </h2>
                        <p className="text-xl text-purple-300 max-w-2xl mx-auto">
                            Your complete movie streaming platform with
                            everything you need for the perfect viewing
                            experience
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card group">
                            <div className="feature-visual">
                                <div className="gradient-orb purple"></div>
                                <div className="feature-image">
                                    <img
                                        src="/images/tv.png"
                                        alt="Browse Movies"
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="play-overlay">
                                        <div className="play-btn">
                                            <IonIcon icon={playOutline} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-heading">
                                    Browse & Discover
                                </h3>
                                <p className="feature-text">
                                    Explore our vast movie library with powerful
                                    search functionality to find exactly what
                                    you want to watch
                                </p>
                                <div className="feature-tags">
                                    <span className="tag">Smart Search</span>
                                    <span className="tag">Movie Library</span>
                                </div>
                            </div>
                        </div>

                        <div className="feature-card group">
                            <div className="feature-visual">
                                <div className="gradient-orb pink"></div>
                                <div className="feature-image">
                                    <img
                                        src="/images/mobile.png"
                                        alt="Stream Movies"
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="device-glow"></div>
                                </div>
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-heading">
                                    Stream Instantly
                                </h3>
                                <p className="feature-text">
                                    Watch movies online with our built-in HLS
                                    video player. Responsive streaming on any
                                    device, anywhere
                                </p>
                                <div className="feature-tags">
                                    <span className="tag">HLS Streaming</span>
                                    <span className="tag">Any Device</span>
                                </div>
                            </div>
                        </div>

                        <div className="feature-card group">
                            <div className="feature-visual">
                                <div className="gradient-orb blue"></div>
                                <div className="feature-image">
                                    <img
                                        src="/images/kids.png"
                                        alt="Personal Library"
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="ai-particles"></div>
                                </div>
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-heading">
                                    Personal Library
                                </h3>
                                <p className="feature-text">
                                    Create your account, manage your profile,
                                    and build your personal favorites collection
                                    for easy access
                                </p>
                                <div className="feature-tags">
                                    <span className="tag">Favorites</span>
                                    <span className="tag">
                                        Profile Management
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stats-section">
                        <div className="stats-grid">
                            <div className="stat-item">
                                <div className="stat-number">1000+</div>
                                <div className="stat-label">
                                    Movies Available
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">100%</div>
                                <div className="stat-label">Free Streaming</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Access</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">HD</div>
                                <div className="stat-label">Quality</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </motion.div>
    );
}

export default InitialPage;