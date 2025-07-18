import FetchFavorites from "../components/FetchFavorites";
import FavoriteMovie from "../components/FavoriteMovie";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Favorites() {
	const favorites = useSelector(store => store.favorites);
	return (
		<motion.div 
			className="profile-container px-4 sm:px-6 md:px-8 lg:px-12"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
		>
			<section className="py-8 space-y-8" id="movies">
				<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
					<div className="mb-8">
						<h2 className="text-responsive-2xl text-white font-bold">
							Your Favorites
						</h2>
					</div>
					<div className="grid movies-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
		</motion.div>
	);
}

export default Favorites;
