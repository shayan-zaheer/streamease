import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviePlay from "../components/MoviePlay";
import { statusActions } from "../store/statusSlice";

function PlayPage() {
	const { fetching, fetchDone } = useSelector((store) => store.status);
	const dispatch = useDispatch();
	const [movie, setMovie] = useState("");

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const movieId = urlParams.get("id");

		if (fetchDone) {
			return;
		}

		const controller = new AbortController();
		const signal = controller.signal;

		const fetchMovie = async () => {
			if (movieId) {
				try {
					dispatch(statusActions.markFetchingStarted());

					const data = await fetch(
						`http://localhost:8000/movies/${movieId}`,
						{ signal }
					);
					const response = await data.json();
					setMovie(response.movie);

					dispatch(statusActions.markFetchDone());
				} catch (err) {
					console.error(err);
				} finally {
					dispatch(statusActions.markFetchingFinished());
				}
			}
		};

		fetchMovie();

		return () => {
			controller.abort();
		};
	}, [fetchDone, dispatch]);

	return (
		<>
			{fetching || !fetchDone ? (
				<LoadingSpinner />
			) : (
				<div class="play-container container">
					{movie && <MoviePlay movie={movie} />}
				</div>
			)}
		</>
	);
}

export default PlayPage;
