import { useSelector } from "react-redux";
import MovieBox from "./MovieBox";

function GeneralMovies(){
    const {generalMovies} = useSelector(store => store.movies);

    return (
        <section className="movies container" id="movies">
			<div className="heading">
				<h2 className="heading-title">Movies and Shows</h2>
			</div>
			<div className="movies-content" id="all-movies">
                {generalMovies.map(movie => {
                    return <MovieBox key={movie.id} movie={movie} />
                })}
			</div>
		</section>
    )
}

export default GeneralMovies;