import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

async function addFavorite(movieId){
    try{
        const result = await axios.post(`http://localhost:8000/movies/add-favorite/${movieId}`, {}, {withCredentials: true});
        console.log(result);
    }
    catch(err){
        console.error(err);
    }
}

function MovieBox({ movie }) {
    const [like, setLike] = useState(false);

    const showToastMessage = (message) => {
        toast.success(message, {
          position: "bottom-right",
        });
      };

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
                    <FontAwesomeIcon icon={faPlay} />
                </Link>
                <a onClick={() => {
                    addFavorite(movie.id)
                    setLike(true);
                    showToastMessage(`${movie.title} has been added to your favorites!`);
                }} className="watch-btn heart-btn" data-id={movie.id}>
                    <FontAwesomeIcon icon={faHeart} style={like && {color: "red"}} />
                </a>
            </div>
            <ToastContainer />
        </div>
    );
}

export default MovieBox;
