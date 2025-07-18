import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../store/userSlice';
import SearchBox from './SearchBox';
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

function Header() {
    const [image, setImage] = useState("");
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    useEffect(() => {
        async function updateProfile() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}users/userdata`,
                    { withCredentials: true }
                );

                if (!response.data || !response.data.result || response.data.result.length === 0) {
                    dispatch(userActions.clearUser());
                    return;
                }

                const userData = response.data.result[0];
                dispatch(userActions.userProfile(userData));

                if (userData && userData.profile_image_url) {
                    setImage(userData.profile_image_url);
                }
            } catch (err) {
                dispatch(userActions.clearUser());
                toast.error('Failed to fetch user data.');
            }
        }

        if (!user.user_id || !user.username) {
            updateProfile();
        } else if (user.profile_image_url) {
            setImage(user.profile_image_url);
        }
    }, [dispatch, user.user_id, user.username, user.profile_image_url]);

    const isAuthenticated = user && (user.username || user.user_id);

    return (
        <>
            {isAuthenticated && (
                <motion.header 
                    className="nav-netflix bg-[#18182f] bg-opacity-95 mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.div 
                        className="container mx-auto px-6 py-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        <div className="flex items-center justify-between">
                            <Link to="/home-page" className="footer-title">
                                Stream<span className="text-white">Ease</span>
                            </Link>

                            <div className="hidden md:flex flex-1 max-w-md mx-8">
                                <SearchBox />
                            </div>

                            <Link to="/profile" className="flex items-center">
                                <img 
                                    src={image || user.profile_image_url} 
                                    className="user-avatar" 
                                    alt="User Profile" 
                                />
                            </Link>
                        </div>

                        <nav className="flex justify-center mt-4 pt-4 border-t border-purple-800/30">
                            <div className="flex items-center space-x-6 md:space-x-8">
                                <Link to="/home-page" className="nav-link">
                                    <FontAwesomeIcon icon={faHome} className="nav-icon" />
                                    <span className="text-xs font-medium">Home</span>
                                </Link>
                                <Link to="/favorites" className="nav-link">
                                    <FontAwesomeIcon icon={faHeart} className="nav-icon" />
                                    <span className="text-xs font-medium">Favorite</span>
                                </Link>
                                <Link to="/profile" className="nav-link">
                                    <FontAwesomeIcon icon={faUser} className="nav-icon" />
                                    <span className="text-xs font-medium">Profile</span>
                                </Link>
                            </div>
                        </nav>

                        <div className="md:hidden mt-4">
                            <SearchBox />
                        </div>
                    </motion.div>
                </motion.header>
            )}
        </>
    );
}

export default Header;
