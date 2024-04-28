import {PostListContext} from "../store/post-lite-store";
import Post from "./Post";
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

function PostList(){
    const {postList, addPosts} = useContext(PostListContext)
    const [loadingState, setLoadingState] = useState(false);

    // useEffect(()=>{
    //     setLoadingState(true);
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then(data => {
    //         addPosts(data.posts);
    //         setLoadingState(false);
    //     });
    // }, []);

    return (
        <>
            {loadingState ? <LoadingSpinner/> : (
                <>
                    {postList.length === 0 && <WelcomeMessage />}
                    {postList.map(post => <Post post={post} />)}
                </>
            )}
            
        </>
    )
}

export default PostList;