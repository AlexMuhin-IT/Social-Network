import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import backgroundImg from '../images/travel-banner1.webp'
import {AvatarUser} from "./AvatarUser/AvatarUser";
import {BackGroundProject} from "./BackGroundProject/BackGroundProject";


export const Profile = () => {

    return (
        <div className={s.content__wrapper}>
            <BackGroundProject/>
            <AvatarUser/>
            <MyPosts/>
        </div>
    )
}