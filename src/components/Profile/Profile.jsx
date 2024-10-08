import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {BackGroundProject} from "./BackGroundProject/BackGroundProject";


export const Profile = () => {

    return (
        <div className={s.content__wrapper}>
            <BackGroundProject/>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}