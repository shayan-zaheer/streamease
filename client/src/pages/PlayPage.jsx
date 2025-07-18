import { useEffect, useState } from "react";
import MoviePlay from "../components/MoviePlay";
import axios from "axios";
import MovieDescription from "../components/MovieDescription";
import MovieCast from "../components/MovieCast";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

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
		<motion.div 
			className="play-page-container px-4 sm:px-6 md:px-8 lg:px-12"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
		>
			<div className="profile-container">
				<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-8">
					{movie && <MoviePlay key={movie.id} movie={movie} />}
					
					<div className="space-y-8">
						{movie && <MovieDescription key={movie.id} movie={movie}/>}
						<div id="cast">
							{movie && <MovieCast movie={movie} />}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default PlayPage;
