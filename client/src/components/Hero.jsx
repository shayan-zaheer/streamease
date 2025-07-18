import { useSelector } from "react-redux";
import { motion } from "framer-motion";

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
        <section className="hero-section mx-6 rounded-lg min-h-[calc(100vh-120px)] flex items-center justify-center" id="home">
            {/* Background Image */}
            <img 
                src={generalMovies[randomIndex].h_poster} 
                alt={generalMovies[randomIndex].title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg filter brightness-50 hover:brightness-75 transition-all duration-500 hover:scale-105" 
            />
            
            {/* Gradient Overlay */}
            <div className="hero-overlay rounded-lg"></div>
            
            {/* Content */}
            <motion.div 
                className="hero-content p-8 md:p-16 max-w-2xl flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h1 className="hero-title">
                    {generalMovies[randomIndex].title}
                </h1>
                <motion.div 
                    className="flex flex-row items-center gap-4 mt-8 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                >
                    <motion.button 
                        className="btn-primary"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        ▶ Play Now
                    </motion.button>
                    <motion.button 
                        className="btn-secondary"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        More Info
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Hero;
