import { useEffect, useState } from "react";
import MoviePlay from "../components/MoviePlay";
import axios from "axios";
import MovieDescription from "../components/MovieDescription";
import MovieCast from "../components/MovieCast";
import { useSelector } from "react-redux";

function PlayPage() {
    const status = useSelector(store => store.status);
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
						`${import.meta.env.VITE_BACKEND_URL}movies/${movieId}`,
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
                <>
                <div className="play-container container">
                    {movie && <MoviePlay key={movie.id} movie={movie} />}
                </div>
    
                <div class="about-movie container">
                    {movie && <MovieDescription key={movie.id} movie={movie}/>}
                    <div id="cast">
                        {movie && <MovieCast movie={movie} />}
                    </div>
                </div>
            </>
		
	);
}

export default PlayPage;
