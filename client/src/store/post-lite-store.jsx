import { useReducer } from "react";
import { createContext } from "react";

export const PostListContext = createContext({
    postList: [],
    addPost: () => {},
    addPosts: () => {},
    deletePost: () => {}
});

function PostListReducer(currentPostList, action){
    let newPostList = currentPostList;
    if(action.type === "NEW_POST"){
        newPostList = [...currentPostList, {id: action.payload.id, title: action.payload.title, link: action.payload.link, thumbnail: action.payload.thumbnail}];
    }
    else if(action.type === "DELETE_POST"){
        newPostList = currentPostList.filter(post => post.title !== action.payload.title);
    }
    else if(action.type === "NEW_POSTS"){
        newPostList = action.payload.posts;
    }
    return newPostList;
}

const PostListProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer(PostListReducer, []);

    const addPost = ({id, title, link, thumbnail}) => {
        const newAction = {
            type: "NEW_POST",
            payload: {
                id, title, link, thumbnail
            }
        }
        dispatchPostList(newAction);
    }

    const deletePost = (title) => {
        const newAction = {
            type: "DELETE_POST",
            payload: {
                title
            }
        }
        dispatchPostList(newAction);
    }

    const addPosts = (posts) => {
        const newAction = {
            type: "NEW_POSTS",
            payload: {
                posts
            }
        }
        dispatchPostList(newAction);
    }

    return (
        <PostListContext.Provider value={{
            postList,
            addPost,
            addPosts,
            deletePost
        }}>
            {children}
        </PostListContext.Provider>
    )
}

export default PostListProvider;