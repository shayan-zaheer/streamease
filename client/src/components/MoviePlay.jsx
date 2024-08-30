import { faClose, faStar, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function MoviePlay({ movie }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<img src={movie.h_poster} alt="" className="play-img" />
			<div className="play-text">
				<h2>{movie.title}</h2>
				<div className="raiting">
                    <FontAwesomeIcon icon={faStar} />
					 {movie.vote_average}
				</div>
				<div className="tags">
					<span>{movie.genre}</span>
				</div>
			</div>
			<i
				onClick={() => setIsOpen(true)}
				className="bx bx-right-arrow play-movie"
			>
                <FontAwesomeIcon icon={faPlay} />
            </i>
			{isOpen && (
				<div class="video-container">
					<div class="video-box">
						<video
							id="myvideo"
							src={movie.url}
							controls
							preload="auto"
							controlsList="nodownload"
						></video>
						<i
							onClick={() => setIsOpen(false)}
							class="bx bx-x close-video"
						>
							<FontAwesomeIcon
								icon={faClose}
								style={{ cursor: "pointer" }}
							/>
						</i>
					</div>
				</div>
			)}
		</>
	);
}

export default MoviePlay;

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