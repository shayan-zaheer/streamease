import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function MovieBox({ movie }) {
    return (
        <div className="movie-box">
            <img src={movie.v_poster} alt={movie.title} className="movie-box-img" />
            <div className="box-text">
                <h2 className="movie-title">{movie.title}</h2>
                <span className="movie-type">{movie.genre}</span>
                <Link
                    to={`/play?id=${movie.id}`}
                    className="watch-btn play-btn"
                    data-id={movie.id}
                >
                    <FontAwesomeIcon size="1x" icon={faArrowRight} className="bx bx-right-arrow" />
                </Link>
                <a className="watch-btn heart-btn" data-id={movie.id}>
                    <FontAwesomeIcon size="1x" icon={faHeart} className="bx bxs-heart" style={{ color: "#ffffff" }} />
                </a>
            </div>
        </div>
    );
}

export default MovieBox;
