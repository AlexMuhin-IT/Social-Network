import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {

    return (
        <div>
            <img
                className={s.avatar}
                src="https://pngimg.com/uploads/aries/small/aries_PNG10.png" alt="oven"/>
            <div>description</div>
        </div>
    )
}