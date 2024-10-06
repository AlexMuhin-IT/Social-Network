import React from "react";
import s from './Post.module.css'


export const Post = () => {

    return <div className={s.item}>
        <img src="https://cdn.kinocheck.com/i/tbqw8eo6dt.jpg" alt="avatar"/>
        <div>
            <span>Like</span>
        </div>
    </div>
}