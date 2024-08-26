import { useEffect } from "react";

function Favorites(){
    useEffect(() => {

    }, []);

    return (
        <section className="movies container" id="movies">
			<div className="heading">
				<h2 className="heading-title">Favorites</h2>
			</div>
			<div className="movies-content">

			</div>
		</section>
    )
};

export default Favorites;