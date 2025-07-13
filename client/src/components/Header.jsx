import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFire, faCompass, faTv, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { userActions } from '../store/userSlice';
import SearchBox from './SearchBox';

function Header() {
    const [image, setImage] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        async function updateProfile() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}users/userdata`,
                    { withCredentials: true }
                );

                if (!response.data || !response.data.result || response.data.result.length === 0) {
                    window.location.href = "/login";
                    return;
                }

                const userData = response.data.result[0];
                dispatch(userActions.userProfile(userData));

                if (userData && userData.profile_image_url) {
                    setImage(userData.profile_image_url);
                }
            } catch (err) {
                console.log(err);
            }
        }

        updateProfile();
    }, [dispatch]);

    return (
        <>
            {image && (
                <header className="nav-netflix">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <Link to="/home-page" className="footer-title">
                                Stream<span className="text-white">Ease</span>
                            </Link>

                            {/* Search Box - Hidden on mobile */}
                            <div className="hidden md:flex flex-1 max-w-md mx-8">
                                <SearchBox />
                            </div>

                            {/* User Profile */}
                            <Link to="/profile" className="flex items-center">
                                <img 
                                    src={image} 
                                    className="user-avatar" 
                                    alt="User Profile" 
                                />
                            </Link>
                        </div>

                        {/* Navigation Bar - Mobile responsive */}
                        <nav className="flex justify-center mt-4 pt-4 border-t border-purple-800/30">
                            <div className="flex items-center space-x-6 md:space-x-8">
                                <Link to="/home-page" className="nav-link">
                                    <FontAwesomeIcon icon={faHome} className="nav-icon" />
                                    <span className="text-xs font-medium">Home</span>
                                </Link>
                                <Link to="#popular" className="nav-link">
                                    <FontAwesomeIcon icon={faFire} className="nav-icon" />
                                    <span className="text-xs font-medium">Trending</span>
                                </Link>
                                <Link to="#movies" className="nav-link">
                                    <FontAwesomeIcon icon={faCompass} className="nav-icon" />
                                    <span className="text-xs font-medium">Explore</span>
                                </Link>
                                <Link to="/" className="nav-link">
                                    <FontAwesomeIcon icon={faTv} className="nav-icon" />
                                    <span className="text-xs font-medium">Movies</span>
                                </Link>
                                <Link to="/favorites" className="nav-link">
                                    <FontAwesomeIcon icon={faHeart} className="nav-icon" />
                                    <span className="text-xs font-medium">Favorite</span>
                                </Link>
                            </div>
                        </nav>

                        {/* Mobile Search Box */}
                        <div className="md:hidden mt-4">
                            <SearchBox />
                        </div>
                    </div>
                </header>
            )}
        </>
    );
}

export default Header;
