import { faClose, faStar, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

function MoviePlay({ movie }) {
    const [isOpen, setIsOpen] = useState(false);
    const videoRef = useRef(null);
    const hlsRef = useRef(null);
    const [levels, setLevels] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState(-1);

    useEffect(() => {
        if (isOpen && Hls.isSupported() && movie.url) {
            const hls = new Hls();
            hlsRef.current = hls;
            hls.loadSource(movie.url);
            hls.attachMedia(videoRef.current);

            const onLevelsUpdated = () => {
                setLevels(hls.levels);
            };
            hls.on(Hls.Events.MANIFEST_PARSED, onLevelsUpdated);

            setSelectedLevel(-1);

            return () => {
                hls.destroy();
                hlsRef.current = null;
                setLevels([]);
            };
        }
    }, [isOpen, movie.url]);

    const handleQualityChange = (e) => {
        const level = parseInt(e.target.value, 10);
        setSelectedLevel(level);
        if (hlsRef.current) {
            hlsRef.current.currentLevel = level;
        }
    };

    return (
        <div className="relative rounded-xl overflow-hidden">
            <img
                src={movie.h_poster}
                alt={movie.title}
                className="w-full h-64 md:h-96 object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    {movie.title}
                </h2>

                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-yellow-400">
                        <FontAwesomeIcon icon={faStar} />
                        <span className="text-white font-semibold">
                            {movie.vote_average}
                        </span>
                    </div>
                    <span className="movie-genre">{movie.genre}</span>
                </div>

                <button onClick={() => setIsOpen(true)} className="btn-primary">
                    <FontAwesomeIcon icon={faPlay} className="mr-2" />
                    Play Movie
                </button>
            </div>

            {isOpen && (
                <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadein">
                    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-purple-700 shadow-2xl rounded-2xl p-4 w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden scale-100 animate-modalpop">
                        <video
                            ref={videoRef}
                            controls
                            preload="auto"
                            controlsList="nodownload"
                            className="w-full h-[50vh] md:h-[60vh] rounded-xl border-2 border-purple-700 shadow-lg bg-black"
                        >
                            <source
                                src={movie.url}
                                type="application/x-mpegURL"
                            />
                            Your browser does not support HLS streaming.
                        </video>

                        {levels.length > 1 && (
                            <div className="absolute top-6 right-6 z-20 bg-gradient-to-r from-purple-800/90 to-black/80 border border-purple-500 rounded-full px-4 py-1 text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                                <label
                                    htmlFor="quality-select"
                                    className="text-xs font-semibold tracking-wide text-purple-200"
                                >
                                    Quality:
                                </label>
                                <select
                                    id="quality-select"
                                    value={selectedLevel}
                                    onChange={handleQualityChange}
                                    className="bg-transparent text-white font-bold rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                >
                                    <option value={-1}>Auto</option>
                                    {levels.map((level, idx) => (
                                        <option key={idx} value={idx}>
                                            {level.height
                                                ? `${level.height}p`
                                                : `${level.bitrate / 1000}kbps`}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 left-4 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/70 border-2 border-purple-600 text-purple-200 hover:bg-purple-700 hover:text-white transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                            title="Close"
                        >
                            <FontAwesomeIcon icon={faClose} size="lg" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MoviePlay;
