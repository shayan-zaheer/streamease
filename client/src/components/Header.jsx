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
                <header>
                    <div className="nav container">
                        <Link to="/home-page" className="logo">
                            Stream<span>Ease</span>
                        </Link>

                        <div className="search-box">
                            <SearchBox />
                        </div>

                        <Link to="/profile" className="user">
                            <img src={image} className="user-img" />
                        </Link>

                        <div className="navbar">
                            <Link to="/home-page" className="nav-link">
                                <FontAwesomeIcon icon={faHome} className="bx bx-home" />
                                <span className="nav-link-title">Home</span>
                            </Link>
                            <Link to="#popular" className="nav-link">
                                <FontAwesomeIcon icon={faFire} className="bx bxs-hot" />
                                <span className="nav-link-title">Trending</span>
                            </Link>
                            <Link to="#movies" className="nav-link">
                                <FontAwesomeIcon icon={faCompass} className="bx bx-compass" />
                                <span className="nav-link-title">Explore</span>
                            </Link>
                            <Link to="/" className="nav-link">
                                <FontAwesomeIcon icon={faTv} className="bx bx-tv" />
                                <span className="nav-link-title">Movies</span>
                            </Link>
                            <Link to="/favorites" className="nav-link">
                                <FontAwesomeIcon icon={faHeart} className="bx bx-heart" />
                                <span className="nav-link-title">Favorite</span>
                            </Link>
                        </div>
                    </div>
                </header>
            )}
        </>
    );
}

export default Header;
