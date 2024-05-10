import { IoMdClose } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { PostListContext } from "../store/post-lite-store";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import "./Post.css";

function Post({ post }) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const { deletePost } = useContext(PostListContext);

	return (
		<div className="card m-3 bg-dark text-white text-shadow-black" style={{ width: "30rem" }}>
            <img src={post.thumbnail} className="card-img" alt="..." />
            <div className="card-img-overlay">
                <h5 className="card-title">{post.title}</h5>
                <button
					type="button"
					className="btn btn-dark position-absolute top-50 start-50 translate-middle"
                    onClick={openModal}
				>
					<FaPlayCircle />
				</button>
                <button
					onClick={() => deletePost(post.title)}
					className="btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger close-button"
				>
					<IoMdClose />
				</button>
                {/* <p className="card-text">{post.de}</p> */}
                {/* <p className="card-text">Last updated 3 mins ago</p> */}
            </div>
			<ModalVideo
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
				url={post.link}
				onClose={closeModal}
				autoplay={false}
				allowFullScreen={true}
				// styles={{ modal: { background: "rgba(0, 0, 0, 0.2)" } }} 
			/>
		</div>
	);
}

export default Post;