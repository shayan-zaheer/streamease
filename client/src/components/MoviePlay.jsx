import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import { useState } from "react";

function MoviePlay({ movie }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<img src={movie.h_poster} alt="" className="play-img" />
			<div className="play-text">
				<h2>{movie.title}</h2>
				<div className="raiting">
					<i className="bx bxs-star"></i> {movie.vote_average}
				</div>
				<div className="tags">
					<span>{movie.genre}</span>
				</div>
			</div>
			<i
				onClick={() => setIsOpen(true)}
				className="bx bx-right-arrow play-movie"
			></i>
			{/* <ModalVideo
				classNames={{
					modalVideo: "modal-video",
					modalVideoClose: "modal-video-close",
					modalVideoBody: "modal-video-body",
					modalVideoInner: "modal-video-inner",
					modalVideoIframeWrap: "modal-video-movie-wrap",
					modalVideoCloseBtn: "modal-video-close-btn"
				}}
				channel="custom"
				isOpen={isOpen}
				url={movie.url}
                videoId={movie.id} 
				onClose={() => setIsOpen(false)}
				autoplay={false}
				allowFullScreen={true}
			/> */}
			{isOpen && (
				<div class="video-container">
					<div class="video-box">
						<video
							id="myvideo"
							src={movie.url}
							controls
							controlsList="nodownload"
						></video>
						<i onClick={() => setIsOpen(false)} class="bx bx-x close-video"></i>
					</div>
				</div>
			)}
		</>
	);
}

export default MoviePlay;
