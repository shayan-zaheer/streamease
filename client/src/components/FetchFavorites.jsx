import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { favoritesActions } from "../store/favoritesSlice";

function FetchFavorites(){
    const dispatch = useDispatch();
    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

        async function showFavorites() {
            try {
                const response = await axios.get(`http://localhost:8000/movies/favorites`, { signal, withCredentials: true });
                const data = response.data.result;
                const movieIds = data.map(item => item.movie_id);

                const movieObjs = await Promise.all(
                    movieIds.map(async (movieId) => {
                        const movieResponse = await axios.get(`http://localhost:8000/movies/moviedata/${movieId}`, { signal, withCredentials: true });
                        return movieResponse.data.result[0];
                    })
                );
                dispatch(favoritesActions.addFavorites(movieObjs));

            } catch (err) {
                console.error("Error fetching favorites:", err);
            }
        }

        showFavorites();


        return () => {
            controller.abort();
        }
    }, [dispatch]);

    return null;
};

export default FetchFavorites;