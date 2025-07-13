import FetchFavorites from "../components/FetchFavorites";
import FavoriteMovie from "../components/FavoriteMovie";
import { useSelector } from "react-redux";

function Favorites() {
	const favorites = useSelector(store => store.favorites);
	return (
		<div className="profile-container">
			<section className="py-8" id="movies">
				<div className="container mx-auto px-6">
					<div className="mb-8">
						<h2 className="text-responsive-2xl text-white font-bold">
							Your Favorites
						</h2>
					</div>
					<div className="movies-grid">
						{favorites.length > 0 ? (
							favorites.map((movie) => (
								<FavoriteMovie key={movie.id} movie={movie} />
							))
						) : (
							<div className="col-span-full text-center py-16">
								<p className="text-lg text-gray-400">No favorites added yet.</p>
								<p className="text-sm text-gray-500 mt-2">Start adding movies to see them here!</p>
							</div>
						)}
					</div>
				</div>
			</section>

			<FetchFavorites />
		</div>
	);
}

export default Favorites;
