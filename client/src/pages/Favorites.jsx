import { useEffect, useState } from "react";
import MovieBox from "../components/MovieBox";

function Favorites(){
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        async function removeFavorite(){
            
        }
    }, [favorites]);

    return (
        <section className="movies container" id="movies">
			<div className="heading">
				<h2 className="heading-title">Favorites</h2>
			</div>
			<div className="movies-content">
            {favorites.map(movie => <MovieBox key={movie.id} movie={movie} />)}
			</div>
		</section>
    )
};

export default Favorites;