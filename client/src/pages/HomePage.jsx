import PopularMovies from "../components/PopularMovies";
import Hero from "../components/Hero";
import GeneralMovies from "../components/GeneralMovies";
import FetchMovies from "../components/FetchMovies";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function HomePage(){
    const { fetching, fetchDone } = useSelector(store => store.status);
    
    return (
        <div className="profile-container px-4 sm:px-6 md:px-8 lg:px-12">         
            {fetching || !fetchDone ? (
                <LoadingSpinner />
            ) : (
                <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <Hero />
                    <div className="px-6">
                        <PopularMovies />
                        <GeneralMovies />
                    </div>
                </motion.div>
            )}
            <FetchMovies />
        </div>
        
    )
};

export default HomePage;