import PopularMovies from "../components/PopularMovies";
import Hero from "../components/Hero";
import GeneralMovies from "../components/GeneralMovies";
import FetchMovies from "../components/FetchMovies";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";

function HomePage(){
    const user = useSelector((store) => store.user);
    const { fetching, fetchDone } = useSelector(store => store.status);

    if (!user || !user.username) {
        window.location.href = "/login";
        return null;
    }

    return (
        <>          
            {fetching || !fetchDone ? (
                <LoadingSpinner />
            ) : (
                <>
                    <Hero />
                    <PopularMovies />
                    <GeneralMovies />
                </>
            )}
            <FetchMovies />
        </>
        
    )
};

export default HomePage;