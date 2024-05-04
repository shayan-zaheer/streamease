import { IoMdClose } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { PostListContext } from "../store/post-lite-store";
import ModalVideo from "react-modal-video";
import "./Post.css";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

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
		<div className="card m-5" style={{ width: "30rem" }}>
			<div className="card-body">
				<h5 className="card-title">{post.title}</h5>
				<button
					onClick={() => deletePost(post.title)}
					className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger close-button"
				>
					<IoMdClose />
				</button>
				<button
					type="button"
					className="btn btn-primary"
					onClick={openModal}
				>
					<FaPlayCircle />
				</button>
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
				styles={{ modal: { background: "rgba(0, 0, 0, 0.2)" } }} // Apply custom styles to the modal
			/>
		</div>
	);
}

export default Post;