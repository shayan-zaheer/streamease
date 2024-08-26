import { useEffect, useState } from "react";
import MoviePlay from "../components/MoviePlay";
import axios from "axios";

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
					const data = await axios.get(
						`http://localhost:8000/movies/${movieId}`,
						{ signal, withCredentials: true }
					);
					const response = data.data;
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
