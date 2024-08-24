import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFire, faCompass, faTv, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<div className="nav container">
				<Link to="/home-page" className="logo">
					Stream<span>Ease</span>
				</Link>
				<div className="search-box">
					<input
						type="search"
						id="search-input"
						placeholder="Search movie"
					/>
					<i className="bx bx-search"></i>
					<div id="dropdown" className="dropdown-content"></div>
				</div>

				<Link to="/profile" className="user">
					<img alt="" className="user-img" />
				</Link>

				<div className="navbar">
					<Link to="/home-page" className="nav-link">
						<FontAwesomeIcon icon={faHome} className="bx bx-home" />
						<span className="nav-link-title">Home</span>
					</Link>
					<Link to="/#popular" className="nav-link">
						<FontAwesomeIcon icon={faFire} className="bx bxs-hot" />
						<span className="nav-link-title">Trending</span>
					</Link>
					<Link to="/#movies" className="nav-link">
						<FontAwesomeIcon
							icon={faCompass}
							className="bx bx-compass"
						/>
						<span className="nav-link-title">Explore</span>
					</Link>
					<Link to="/" className="nav-link">
						<FontAwesomeIcon icon={faTv} className="bx bx-tv" />
						<span className="nav-link-title">Movies</span>
					</Link>
					<Link to="/favorite" className="nav-link">
						<FontAwesomeIcon
							icon={faHeart}
							className="bx bx-heart"
						/>
						<span className="nav-link-title">Favorite</span>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
