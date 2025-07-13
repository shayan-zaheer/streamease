import { faClose, faStar, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

function MoviePlay({ movie }) {
	const [isOpen, setIsOpen] = useState(false);
	const videoRef = useRef(null);

	useEffect(() => {
		if (isOpen && Hls.isSupported() && movie.url) {
			const hls = new Hls();
			hls.loadSource(movie.url);
			hls.attachMedia(videoRef.current);

			return () => hls.destroy();
		}
	}, [isOpen, movie.url]);

	return (
		<div className="relative rounded-xl overflow-hidden">
			<img 
				src={movie.h_poster} 
				alt={movie.title} 
				className="w-full h-64 md:h-96 object-cover" 
			/>
			
			{/* Overlay with movie info */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
			
			<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
				<h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
					{movie.title}
				</h2>
				
				<div className="flex items-center gap-4 mb-4">
					<div className="flex items-center gap-2 text-yellow-400">
						<FontAwesomeIcon icon={faStar} />
						<span className="text-white font-semibold">{movie.vote_average}</span>
					</div>
					<span className="movie-genre">
						{movie.genre}
					</span>
				</div>
				
				<button 
					onClick={() => setIsOpen(true)} 
					className="btn-primary"
				>
					<FontAwesomeIcon icon={faPlay} className="mr-2" />
					Play Movie
				</button>
			</div>

			{isOpen && (
				<div className="modal-overlay">
					<div className="relative bg-black rounded-xl p-4 w-full max-w-6xl mx-4 max-h-[90vh] overflow-hidden">
						<video
							ref={videoRef}
							controls
							preload="auto"
							controlsList="nodownload"
							className="w-full h-auto rounded-lg"
						>
							<source src={movie.url} type="application/x-mpegURL" />
							Your browser does not support HLS streaming.
						</video>
						<button 
							onClick={() => setIsOpen(false)} 
							className="modal-close"
						>
							<FontAwesomeIcon icon={faClose} />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default MoviePlay;
