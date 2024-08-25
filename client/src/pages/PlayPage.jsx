import { useEffect, useState } from "react";
import MoviePlay from "../components/MoviePlay";

function PlayPage() {
	const [movie, setMovie] = useState("");

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const movieId = urlParams.get("id");

        const controller = new AbortController();
		const signal = controller.signal;

		const fetchMovie = async () => {
			if (movieId) {
				try {
					const data = await fetch(
						`http://localhost:8000/movies/${movieId}`,
						{ signal }
					);
					const response = await data.json();
					setMovie(response.movie);
				} catch (err) {
					console.error(err);
				}
			}
		};

		fetchMovie();

		return () => {
			controller.abort();
		};
	}, []);

	return (
        <div className="play-container container">
            {movie && <MoviePlay movie={movie} />}
        </div>
	);
}

export default PlayPage;
