import ModalVideo from "react-modal-video";
import "node_modules/react-modal-video/scss/modal-video.scss";
import { useState } from "react";

function MoviePlay() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<img src={data.movie.h_poster} alt="" className="play-img" />
			<div className="play-text">
				<h2>{data.movie.title}</h2>
				<div className="raiting">
					<i className="bx bxs-star"></i> {data.movie.vote_average}
				</div>
				<div className="tags">
					<span>{data.movie.genre}</span>
				</div>
			</div>
			<i className="bx bx-right-arrow play-movie"></i>
			<ModalVideo
				url={data.movie.url}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</>
	);
}

export default MoviePlay;
