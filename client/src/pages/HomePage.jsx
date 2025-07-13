import PopularMovies from "../components/PopularMovies";
import Hero from "../components/Hero";
import GeneralMovies from "../components/GeneralMovies";
import FetchMovies from "../components/FetchMovies";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";

function HomePage(){
    const { fetching, fetchDone } = useSelector(store => store.status);
    
    return (
        <div className="profile-container">         
            {fetching || !fetchDone ? (
                <LoadingSpinner />
            ) : (
                <div className="space-y-8">
                    <Hero />
                    <div className="px-6">
                        <PopularMovies />
                        <GeneralMovies />
                    </div>
                </div>
            )}
            <FetchMovies />
        </div>
        
    )
};

export default HomePage;