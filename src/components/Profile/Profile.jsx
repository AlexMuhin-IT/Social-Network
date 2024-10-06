import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import backgroundImg from '../images/travel-banner1.webp'



export const Profile = () => {

    return (
        <div className={s.content__wrapper}>
            <div>
                <img className={s.background}
                    src={backgroundImg}
                    alt="Travel Banner"
                />
            </div>
            <div>
                <div>
                    <img
                    className={s.avatar}
                    src="https://pngimg.com/uploads/aries/small/aries_PNG10.png" alt="oven"/></div>
                 <div>description</div>
            </div>
            <MyPosts/>
        </div>
    )
}