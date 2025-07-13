import { useSelector } from "react-redux";
import MovieBox from "./MovieBox";

function GeneralMovies(){
    const {generalMovies} = useSelector(store => store.movies);

    return (
        <section className="py-8" id="movies">
			<div className="container mx-auto px-6">
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
			</div>
		</section>
    )
}

export default GeneralMovies;