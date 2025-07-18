import { motion } from "framer-motion";

function Footer(){
    return (
        <motion.footer 
            className="footer-netflix"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {/* Main Footer Content */}
            <motion.div 
                className="footer-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
            >
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <h3 className="footer-title">
                            Stream<span className="text-white">Ease</span>
                        </h3>
                        <p className="footer-description">
                            Your ultimate streaming destination
                        </p>
                    </div>

                    {/* Company Links */}
                    <div className="col-span-1">
                        <h4 className="footer-section-title">Company</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="#about" className="footer-link">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#careers" className="footer-link">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="footer-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="col-span-1">
                        <h4 className="footer-section-title">Support</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="#help" className="footer-link">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#terms" className="footer-link">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#privacy" className="footer-link">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p>&copy; 2024 StreamEase. All rights reserved.</p>
                </div>
            </div>
        </motion.footer>
    )
};

export default Footer;