import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchBox() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const searchInputRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        let debounceTimeout;
        const debounce = (func, delay) => {
            return (...args) => {
                clearTimeout(debounceTimeout);
                debounceTimeout = setTimeout(() => {
                    func(...args);
                }, delay);
            };
        };

        const fetchMovies = async (searchQuery) => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}movies/search?q=${searchQuery}`,
                    { withCredentials: true }
                );
                setMovies(response.data.movies);
                setDropdownVisible(true);
            } catch (error) {
                console.error("Error fetching movies:", error);
                setMovies([]);
                setDropdownVisible(false);
            }
        };

        const handleSearchInput = debounce(() => {
            const searchValue = searchInputRef.current.value.trim();
            if (searchValue) {
                fetchMovies(searchValue);
            } else {
                setDropdownVisible(false);
            }
        }, 300);

        const searchInputElement = searchInputRef.current;
        if (searchInputElement) {
            searchInputElement.addEventListener("input", handleSearchInput);
        }

        const handleClickOutside = (event) => {
            if (!dropdownRef?.current?.contains(event.target) && !searchInputRef?.current?.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            if (searchInputElement) {
                searchInputElement.removeEventListener("input", handleSearchInput);
            }
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="search-container">
            <input
                type="text"
                id="search-input"
                placeholder="Search for movies..."
                ref={searchInputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input-netflix"
            />
            {isDropdownVisible && (
                <div 
                    id="dropdown" 
                    className="search-dropdown" 
                    ref={dropdownRef}
                >
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <Link
                                key={movie.id}
                                to={`/play?id=${movie.id}`}
                                className="search-item"
                                onClick={() => setDropdownVisible(false)}
                            >
                                {movie.title}
                            </Link>
                        ))
                    ) : (
                        <div className="px-4 py-3 text-gray-500">
                            No results found
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchBox;
