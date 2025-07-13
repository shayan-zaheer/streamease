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
            const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}movies/remove-favorite/${movieId}`, {}, {withCredentials: true});
            dispatch(favoritesActions.removeFavorite(movieId));
            return result;
        }
        catch(err){
            return err;
        }
    }

    return (
        <div className="card-movie group">
            <div className="relative aspect-[2/3] overflow-hidden">
                <img 
                    src={movie.v_poster} 
                    alt={movie.title} 
                    className="movie-poster" 
                />
                
                {/* Overlay with buttons - appears on hover */}
                <div className="movie-overlay">
                    <Link   
                        to={`/play?id=${movie.id}`}
                        className="btn-primary p-3 rounded-full text-white"
                        data-id={movie.id}
                    >   
                        <FontAwesomeIcon icon={faPlay} className="text-lg" />
                    </Link>
                    <button 
                        onClick={() => showToastMessage(movie.id, `${movie.title} has been removed from favorites!`)} 
                        className="btn-secondary p-3 rounded-full text-white" 
                        data-id={movie.id}
                    >
                        <FontAwesomeIcon icon={faClose} className="text-lg" />
                    </button>
                </div>
            </div>

            {/* Movie Info */}
            <div className="movie-info">
                <h3 className="movie-title">
                    {movie.title}
                </h3>
                <span className="movie-genre">
                    {movie.genre}
                </span>
            </div>
        </div>
    )
}

export default FavoriteMovie;