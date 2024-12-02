import React from "react";
import {Post} from "./Posts/Post";


export const MyPosts = () => {
const Posts = [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: 'Who are you?'},
]
    return (
        <div>
            <div>
            <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            {Posts.map((p) => (
                <Post message={p.message} key={p.id} />
            ))}
        </div>

    )
}