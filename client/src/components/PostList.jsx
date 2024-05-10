import {PostListContext} from "../store/post-lite-store";
import Post from "./Post";
import { useContext, useState, useEffect } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";

function PostList(){
    const {postList, addPosts} = useContext(PostListContext)
    const [loadingState, setLoadingState] = useState(false);

    const fetchData = async () => {
        setLoadingState(true);
        const response = await axios.get("http://localhost:8000/videos");
        const data = response.data;
        console.log(data);
        addPosts(data.videos);
        setLoadingState(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {loadingState ? <LoadingSpinner/> : (
                <>
                    {postList.length === 0 && <WelcomeMessage />}
                    {postList.map(post => <Post key={post} post={post} />)}
                </>
            )}
        </>
    );
};

export default PostList;