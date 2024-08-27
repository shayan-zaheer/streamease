import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { favoritesActions } from "../store/favoritesSlice";

function MovieBox({ movie }) {
    const dispatch = useDispatch();
    const [like, setLike] = useState(false);

    const showToastMessage = (message) => {
        toast.success(message, {
          position: "bottom-right",
        });
      };

      async function addFavorite(movieId){
        try{
            const result = await axios.post(`http://localhost:8000/movies/add-favorite/${movieId}`, {}, {withCredentials: true});
            return result;
        }
        catch(err){
            return err;
        }
    }
    
    async function removeFavorite(movieId){
        try{
            const result = await axios.post(`http://localhost:8000/movies/remove-favorite/${movieId}`, {}, {withCredentials: true});
            dispatch(favoritesActions.removeFavorite(movieId));
            return result;
        }
        catch(err){
            return err;
        }
    }
    

      const handleLikeClick = async (movieId) => {
        if (like) {
            await removeFavorite(movie.id);
            showToastMessage(`${movie.title} has been removed from your favorites!`);
        } else {
            await addFavorite(movie.id);
            showToastMessage(`${movie.title} has been added to your favorites!`);
        }
        setLike(!like);
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
                <a onClick={() => handleLikeClick(movie.id)} className="watch-btn heart-btn" data-id={movie.id}>
                    <FontAwesomeIcon icon={faHeart} style={like && {color: "red"}} />
                </a>
            </div>
            <ToastContainer />
        </div>
    );
}

export default MovieBox;
