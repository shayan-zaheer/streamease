import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { PostListContext } from "../store/post-lite-store";

function Post({ post }) {
	const { deletePost } = useContext(PostListContext);

	return (
		<div
			className="card m-5"
			style={{ width: "30rem", minWidth: "300px", minHeight: "200px", display: "inline-block" }}
		>
			<div className="card-body">
                <video src={`http://localhost:8000/${post.videoName}`} controls style={{ width: "100%", height: "100%" }}></video>
				<h5 className="card-title">{post.title}</h5>
				<button onClick={() => deletePost(post.title)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
					<IoMdClose />
				</button>
				{post.tags.map((tag) => (
					<span style={{margin: "0 5px 20px 0"}} className="badge text-bg-primary">{tag}</span>
				))}
				<div className="alert alert-success" role="alert">
					This post has been reacted by {post.reactions} people!
				</div>
			</div>
		</div>
	);
}

export default Post;
