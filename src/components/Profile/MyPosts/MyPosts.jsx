import React from "react";
import {Post} from "./Posts/Post";


export const MyPosts = (props) => {

    let newPostElement = React.createRef()


    const addPost = () => {
        let text = newPostElement.current.value;
        // alert(`написали этот текст: ${ text }`)
        props.addPost(text);
    }
    const removePost = () => {
        alert("Add Post");
    }
    return (
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
                <button onClick={removePost}>Remove</button>
            </div>
            {props.posts.map((p) => (
                <Post message={p.message} key={p.id}/>
            ))}
        </div>

    )
}