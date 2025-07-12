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
		<>
			<img src={movie.h_poster} alt={movie.title} className="play-img" />
			<div className="play-text">
				<h2>{movie.title}</h2>
				<div className="rating">
					<FontAwesomeIcon icon={faStar} /> {movie.vote_average}
				</div>
				<div className="tags">
					<span>{movie.genre}</span>
				</div>
			</div>
			<i onClick={() => setIsOpen(true)} className="bx bx-right-arrow play-movie">
				<FontAwesomeIcon icon={faPlay} />
			</i>

			{isOpen && (
				<div className="video-container">
					<div className="video-box">
						<video
							ref={videoRef}
							controls
							preload="auto"
							controlsList="nodownload"
							style={{ width: "100%" }}
						>
							<source src={movie.url} type="application/x-mpegURL" />
							Your browser does not support HLS streaming.
						</video>
						<i onClick={() => setIsOpen(false)} className="bx bx-x close-video">
							<FontAwesomeIcon icon={faClose} style={{ cursor: "pointer" }} />
						</i>
					</div>
				</div>
			)}
		</>
	);
}

export default MoviePlay;
