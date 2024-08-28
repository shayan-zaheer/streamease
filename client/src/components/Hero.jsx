import { useSelector } from "react-redux";

function Hero() {
    const {generalMovies} = useSelector(store => store.movies);

    if (generalMovies.length === 0) {
        return <div>Loading...</div>;
    }

    const randomIndex = Math.floor(Math.random() * generalMovies.length);

    return (
        <section className="home container" id="home">
            <img src={generalMovies[randomIndex].h_poster} alt="" className="home-img" />
            <div className="home-text">
                <h1 className="home-title">
                    {generalMovies[randomIndex].title}
                </h1>
            </div>
        </section>
    );
}

export default Hero;
