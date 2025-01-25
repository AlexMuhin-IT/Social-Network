import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {BackGroundProject} from "./BackGroundProject/BackGroundProject";
import {Outlet} from "react-router-dom";
import {addPost} from "../../redux/state";


export const Profile = (props) => {
debugger
    return (
        <div className={s.content__wrapper}>
            <BackGroundProject/>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={addPost}/>
        </div>
    )
}