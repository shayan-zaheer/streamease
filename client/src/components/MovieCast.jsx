import { useEffect, useState } from "react";

function MovieCast({ movie }) {
	const [castList, setCastList] = useState([]);
	useEffect(() => {
        const apiKey = import.meta.env.VITE_MOVIE_API;
		const searchMovie = async (movieName) => {
			const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
				movieName
			)}`;
			const response = await fetch(searchUrl);
			const searchResults = await response.json();
			if (searchResults.results && searchResults.results.length > 0) {
				return searchResults.results[0].id;
			} else {
				throw new Error("Movie not found");
			}
		};

		const getMovieCredits = async (movieId) => {
			const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
			const response = await fetch(creditsUrl);
			const credits = await response.json();
			return credits.cast;
		};

		const fetchMovieCast = async (movieName) => {
			const movieId = await searchMovie(movieName);
			const cast = await getMovieCredits(movieId);
			setCastList(cast);
		};
		fetchMovieCast(movie.title);
	}, []);

	return (
		<>
			{castList.map((member) => {
				if (member.profile_path == null) {
					return;
				}
				return (
                          <div className="cast-box">
                              <img
                                  src={`https://image.tmdb.org/t/p/original${member.profile_path}`}
                                  className="cast-img"
                              />
                              <span className="cast-title">
                                  ${member.original_name}
                              </span>
                          </div>
				);
			})}
		</>
	);
}

export default MovieCast;
