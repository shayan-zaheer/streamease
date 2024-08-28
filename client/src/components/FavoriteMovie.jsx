import axios from "axios";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { favoritesActions } from "../store/favoritesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function FavoriteMovie({ movie }){
    const dispatch = useDispatch();

    function showToastMessage(movieId, message){
        removeFavorite(movieId);
        toast.success(message, {
            theme: "dark",
            position: "bottom-right",
        });
      };

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
                <a onClick={() => showToastMessage(movie.id, `${movie.title} has been added to favorites!`)} className="watch-btn heart-btn" data-id={movie.id}>
                    <FontAwesomeIcon icon={faClose} style={{cursor: "pointer"}} />
                </a>
            </div>
        </div>
    )
}

export default FavoriteMovie;