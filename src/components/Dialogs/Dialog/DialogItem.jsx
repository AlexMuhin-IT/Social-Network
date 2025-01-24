import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {ProfileInfo} from "../../Profile/ProfileInfo/ProfileInfo";

export const DialogItem = (props) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={s.dialogUser + ' ' + s.active}>
            <ProfileInfo user={props.img}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}