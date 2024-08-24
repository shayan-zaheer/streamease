import { useSelector } from "react-redux";
import Movie from "./Movie";

function GeneralMovies(){
    const {generalMovies} = useSelector(store => store.movies);
    console.log("General:", generalMovies);

    return (
        <section className="movies container" id="movies">
			<div className="heading">
				<h2 className="heading-title">Movies and Shows</h2>
			</div>
			<div className="movies-content" id="all-movies">
                {generalMovies.map(movie => {
                    return <Movie key={movie.id} movie={movie} />
                })}
			</div>
		</section>
    )
}

export default GeneralMovies;