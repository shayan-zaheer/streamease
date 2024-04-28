import { useRef, useContext, useState } from "react";
import axios from 'axios';
import { PostListContext } from "../store/post-lite-store";

function CreatePost() {
	const { addPost } = useContext(PostListContext);
	const postID = useRef("");
	const postTitle = useRef("");
	const postTags = useRef("");
	const postReactions = useRef("");
    const postVideo = useRef("");

    async function handleForm(e) {
        e.preventDefault();
		const id = postID.current.value;
		const title = postTitle.current.value;
		const tags = postTags.current.value.split(" ");
		const reactions = postReactions.current.value;
        const video = postVideo.current.files;


        console.log("ID:", id);
        console.log("Title:", title);
        console.log("Tags:", tags);
        console.log("Reactions:", reactions);
        console.log("Video File:", video[0]);

        const formData = new FormData();
        formData.append("id", id);
        formData.append("title", title);
        formData.append("tags", tags);
        formData.append("reactions", reactions);
        formData.append("video", video[0]);

        try {
            const response = await axios.post("http://localhost:8000/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }); 
            if (response.status === 200) {
                const data = response.data;
                if (data.success) {
                    addPost({ id, title, video: data.path, tags, reactions, videoName: video[0].name });
                    postID.current.value = "";
                    postTitle.current.value = "";
                    postTags.current.value = "";
                    postReactions.current.value = "";
                    postVideo.current.value = "";
                } else {
                    console.error(data.message);
                }
            } else {
                console.error(`Failed to upload post (${response.status} ${response.statusText})`);
            }
        } catch (error) {
            console.error("Error uploading post:", error);
        }
    }
	return (
		<form className="m-5" onSubmit={handleForm} encType="multipart/form-data">
			<div className="mb-3">
				<label htmlFor="userID" className="form-label">
					User ID
				</label>
				<input
					type="text"
					className="form-control"
					id="userID"
					ref={postID}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="title" className="form-label">
					Title
				</label>
				<input
					type="text"
					className="form-control"
					id="title"
					ref={postTitle}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="formFile" className="form-label">
					Upload Video
				</label>
				<input className="form-control" name="video" type="file" id="formFile" ref={postVideo} 
                    accept="video/*"/>
			</div>
			<div className="mb-3">
				<label htmlFor="tags" className="form-label">
					Tags
				</label>
				<input
					type="text"
					className="form-control"
					id="tags"
					ref={postTags}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="reactions" className="form-label">
					Reactions
				</label>
				<input
					type="text"
					className="form-control"
					id="reactions"
					ref={postReactions}
				/>
			</div>
			<div className="mb-3 form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="exampleCheck1"
				/>
				<label className="form-check-label" htmlFor="exampleCheck1">
					Check me out
				</label>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
}

export default CreatePost;
