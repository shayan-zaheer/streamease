import FetchFavorites from "../components/FetchFavorites";
import FavoriteMovie from "../components/FavoriteMovie";
import { useSelector } from "react-redux";
// import "../css/Favorites.module.css";

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
                            <FavoriteMovie key={movie.id} movie={movie} />
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
