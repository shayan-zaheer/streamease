import { useSelector } from "react-redux";
import MovieBox from "./MovieBox";
import { motion } from "framer-motion";

function GeneralMovies(){
    const {generalMovies} = useSelector(store => store.movies);

    return (
        <motion.section 
            className="py-8" 
            id="movies"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <motion.div 
                className="container mx-auto px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
            >
				<div className="mb-8">
					<h2 className="text-responsive-2xl text-white font-bold">
						Movies and Shows
					</h2>
				</div>
				
				<div className="movies-grid" id="all-movies">
					{generalMovies.map(movie => {
						return <MovieBox key={movie.id} movie={movie} />
					})}
				</div>
			</motion.div>
		</motion.section>
    )
}

export default GeneralMovies;