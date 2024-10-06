import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {

    return (
        <div className={s.content__wrapper}>
            <div>
                <img className={s.background}
                    src={'https://www.balmerlawrie.com/img/main_images/inside_banner/travel-banner1.jpg'}/>
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