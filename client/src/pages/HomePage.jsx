import PopularMovies from "../components/PopularMovies";
import Hero from "../components/Hero";
import GeneralMovies from "../components/GeneralMovies";
import FetchMovies from "../components/FetchMovies";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
// import "../css/HomePage.module.css";

function HomePage(){
    const { fetching, fetchDone } = useSelector(store => store.status);

    return (
        <>          
            {fetching || !fetchDone ? (
                <LoadingSpinner />
            ) : (
                <>
                    <Hero />
                    <ToastContainer />
                    <PopularMovies />
                    <GeneralMovies />

                </>
            )}
            <FetchMovies />
        </>
        
    )
};

export default HomePage;