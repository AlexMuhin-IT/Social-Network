import React from "react";
import s from './AvatarUser.module.css'

export const AvatarUser = () => {

    return (
        <div>
            <img
                className={s.avatar}
                src="https://pngimg.com/uploads/aries/small/aries_PNG10.png" alt="oven"/>
            <div>description</div>
        </div>
    )
}