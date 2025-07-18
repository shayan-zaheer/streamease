import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function MovieCast({ movie }) {
	const [castList, setCastList] = useState([]);
	useEffect(() => {
        const apiKey = import.meta.env.VITE_MOVIE_API;
		const searchMovie = async (movieName) => {
			const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
				movieName
			)}`;
			try {
				const response = await fetch(searchUrl);
				if (!response.ok) throw new Error('Failed to fetch movie cast');
				const data = await response.json();
				if (data.results && data.results.length > 0) {
					return data.results[0].id;
				} else {
					throw new Error("Movie not found");
				}
			} catch (err) {
				console.error(err);
				setCastList([]);
			}
		};

		const getMovieCredits = async (movieId) => {
			const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
			try {
				const response = await fetch(creditsUrl);
				if (!response.ok) throw new Error('Failed to fetch movie cast');
				const data = await response.json();
				return data.cast;
			} catch (err) {
				console.error(err);
				setCastList([]);
			}
		};

		const fetchMovieCast = async (movieName) => {
			const movieId = await searchMovie(movieName);
			const cast = await getMovieCredits(movieId);
			setCastList(cast);
		};
		fetchMovieCast(movie.title);
	}, []);

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
			{castList.map((member) => {
				if (member.profile_path == null) {
					return null;
				}
				return (
					<div key={member.id} className="card-netflix group text-center p-4">
						<img
							src={`https://image.tmdb.org/t/p/original${member.profile_path}`}
							alt={member.original_name}
							className="w-full h-32 object-cover rounded-lg mb-3"
						/>
						<span className="text-white font-medium text-sm">
							{member.original_name}
						</span>
						<p className="text-gray-400 text-xs mt-1">
							{member.character}
						</p>
					</div>
				);
			})}
		</div>
	);
}

export default MovieCast;
