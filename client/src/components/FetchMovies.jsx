import { useDispatch, useSelector } from "react-redux";
import { statusActions } from "../store/statusSlice";
import { moviesActions } from "../store/moviesSlice";
import { useEffect } from "react";
import axios from "axios";

function FetchMovies() {
    const status = useSelector(store => store.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status.fetchDone) {
            return;
        }

        const controller = new AbortController();
        const signal = controller.signal;

        const fetchMovies = async () => {
            try {
                dispatch(statusActions.markFetchingStarted());

                const [generalMovies, popularMovies] = await Promise.all([
                    axios.get(`${import.meta.env.VITE_BACKEND_URL}movies/general`, { signal, withCredentials: true}),
                    axios.get(`${import.meta.env.VITE_BACKEND_URL}movies/popular`, { signal , withCredentials: true})
                ]);

                dispatch(moviesActions.addGeneralMovies(generalMovies.data.movies));
                dispatch(moviesActions.addPopularMovies(popularMovies.data.movies));

                dispatch(statusActions.markFetchDone());
            } catch (err) {
                console.error(err)
            } finally{
                dispatch(statusActions.markFetchingFinished());
            }
        };

        fetchMovies();

        return () => {
            controller.abort();
        };
    }, [status.fetchDone, dispatch]);

    return null;
}

export default FetchMovies;
