import React from "react";
import s from './Profile.module.css'


export const Profile = () => {

    return (
        <div className={s.content__wrapper}>
            <div>
                <img className={s.background}
                    src={'https://www.balmerlawrie.com/img/main_images/inside_banner/travel-banner1.jpg'}/>
            </div>
            <div>
                <div><img
                    className={s.avatar}
                    src="https://pngimg.com/uploads/aries/small/aries_PNG10.png" alt="oven"/></div>
                ava + discription
            </div>
            <div>my posts
                <div>new posts
                </div>
            </div>
            <div>post 1</div>
            <div>post 2</div>
        </div>
    )
}