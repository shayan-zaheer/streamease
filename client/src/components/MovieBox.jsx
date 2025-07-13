import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { favoritesActions } from "../store/favoritesSlice";

function MovieBox({ movie }) {
    const dispatch = useDispatch();
    const [like, setLike] = useState(false);

    const showToastMessage = (message) => {
        toast.success(message, {
            theme: "dark",
          position: "bottom-right",
        });
      };

      async function addFavorite(movieId, movieTitle){
        try{
            const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}movies/add-favorite/${movieId}`, {}, {withCredentials: true});
            dispatch(favoritesActions.addFavorite(movieId));
            return result;
        }
        catch(err){
            let statusCode = err.response.status;
            if(statusCode === 409){
                toast.error(`${movieTitle} is already in favorites!`,
                    {
                        theme: "dark",
                        position: "bottom-right"
                    }
                )
                return statusCode;
            }
            return err;
        }
    }
    
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
    

      const handleLikeClick = async (movieId, movieTitle) => {
        if (like) {
            await removeFavorite(movieId);
            showToastMessage(`${movieTitle} has been removed from your favorites!`);
        } else {
            const result = await addFavorite(movieId, movieTitle);
            if(result === 409){
                return;
            }
            showToastMessage(`${movieTitle} has been added to your favorites!`);
        }
        setLike(!like);
    };

    return (
        <div className="card-movie group">
            {/* Movie Poster */}
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
                        onClick={() => handleLikeClick(movie.id, movie.title)} 
                        className="btn-secondary p-3 rounded-full text-white" 
                        data-id={movie.id}
                    >
                        <FontAwesomeIcon 
                            icon={faHeart} 
                            className={`text-lg ${like ? 'text-red-500' : 'text-white'}`} 
                        />
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
    );
}

export default MovieBox;
