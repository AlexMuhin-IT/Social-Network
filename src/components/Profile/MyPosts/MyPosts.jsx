import React from "react";
import {Post} from "./Posts/Post";


export const MyPosts = () => {

    return (
        <div>
            <div>
            <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message='Hi, how are you?' />
            <Post message='Who are you?' />
        </div>

    )
}