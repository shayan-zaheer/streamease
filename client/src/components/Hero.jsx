import { useSelector } from "react-redux";

function Hero() {
    const {generalMovies} = useSelector(store => store.movies);

    if (generalMovies.length === 0) {
        return (
            <div className="spinner-netflix">
                <div className="spinner-ring"></div>
            </div>
        );
    }

    const randomIndex = Math.floor(Math.random() * generalMovies.length);

    return (
        <section className="hero-section mt-4 mx-6 rounded-lg" id="home">
            {/* Background Image */}
            <img 
                src={generalMovies[randomIndex].h_poster} 
                alt={generalMovies[randomIndex].title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg filter brightness-50 hover:brightness-75 transition-all duration-500 hover:scale-105" 
            />
            
            {/* Gradient Overlay */}
            <div className="hero-overlay rounded-lg"></div>
            
            {/* Content */}
            <div className="hero-content p-8 md:p-16 max-w-2xl">
                <h1 className="hero-title">
                    {generalMovies[randomIndex].title}
                </h1>
                <div className="flex items-center gap-4 mt-8">
                    <button className="btn-primary">
                        ▶ Play Now
                    </button>
                    <button className="btn-secondary">
                        More Info
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
