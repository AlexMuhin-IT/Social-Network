import React from "react";
import s from './Header.module.css'

export const Header = () => {

    return (
        <header className={s.header__wrapper}>
            <img alt={'logotipe'}
                 src={'https://static.vecteezy.com/system/resources/thumbnails/038/516/357/small/ai-generated-eagle-logo-design-in-black-style-on-transparant-background-png.png'}/>
        </header>
    )
}