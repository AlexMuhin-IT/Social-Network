import React from "react";
import s from './BackGroundProject.module.css'
import backgroundImg from '../../images/travel-banner1.webp'



export const BackGroundProject = () => {

    return (
        <div className={s.content__wrapper}>
            <div>
                <img className={s.background}
                     src={backgroundImg}
                     alt="Travel Banner"
                />
            </div>
        </div>
    )
}