import FetchFavorites from "../components/FetchFavorites";
import MovieBox from "../components/MovieBox";
import { useSelector } from "react-redux";

function Favorites() {
	const favorites = useSelector(store => store.favorites);
	return (
		<>
			<section className="movies container" id="movies">
				<div className="heading">
					<h2 className="heading-title">Favorites</h2>
				</div>
				<div className="movies-content">
                {favorites.length > 0 ? (
                        favorites.map((movie) => (
                            <MovieBox key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <p>No favorites added yet.</p>
                    )}
				</div>
			</section>

			<FetchFavorites />
		</>
	);
}

export default Favorites;
