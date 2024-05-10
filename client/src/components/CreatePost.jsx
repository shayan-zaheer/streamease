import { useContext, useRef } from "react";
import axios from 'axios';
import { PostListContext } from "../store/post-lite-store";

function CreatePost() {
	const { addPost } = useContext(PostListContext);
    const postID = useRef("");
    const postTitle = useRef("");
    const postLink = useRef("");
    const postThumb = useRef("");

    async function handleForm(e){
        e.preventDefault();
		const id = postID.current.value;
		const title = postTitle.current.value;
		const link = postLink.current.value;
        const thumbnail = postThumb.current.value;
        console.log(id, title, link);
        try {
            const response = await axios.post("http://localhost:8000/videos/", {id, title, link, thumbnail}); 
            if(response.status === 201){
                const data = response.data;
                addPost({ id, title, link, thumbnail });
                postID.current.value = "";
                postTitle.current.value = "";
                postLink.current.value = "";
                postThumb.current.value = "";
           } 
           else{
                console.error(`Failed to upload post (${response.status} ${response.statusText})`);
            }
        } 
        catch(error){
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
                    name="userID"
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
                    name="title"
                    ref={postTitle}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="link" className="form-label">
					Link
				</label>
				<input
					type="text"
					className="form-control"
					id="link"
                    name="link"
                    ref={postLink}
				/>
			</div>
            <div className="mb-3">
				<label htmlFor="thumb" className="form-label">
					Thumbnail
				</label>
				<input
					type="text"
					className="form-control"
					id="thumb"
                    name="thumb"
                    ref={postThumb}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
}

export default CreatePost;