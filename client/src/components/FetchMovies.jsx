import { useDispatch, useSelector } from "react-redux";
import { statusActions } from "../store/statusSlice";
import { moviesActions } from "../store/moviesSlice";
import { useEffect } from "react";

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

                const [generalResponse, popularResponse] = await Promise.all([
                    fetch("http://localhost:8000/movies/general", { signal }),
                    fetch("http://localhost:8000/movies/popular", { signal })
                ]);

                if (!generalResponse.ok || !popularResponse.ok) {
                    throw new Error('Failed to fetch movies');
                }

                const generalMovies = await generalResponse.json();
                const popularMovies = await popularResponse.json();

                dispatch(moviesActions.addGeneralMovies(generalMovies.movies));
                dispatch(moviesActions.addPopularMovies(popularMovies.movies));

                dispatch(statusActions.markFetchDone());
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
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
