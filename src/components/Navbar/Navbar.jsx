import React from "react";
import s from './Navbar.module.css'
// import {News} from "../News/News";




export const Navbar = () => {

    return (
        <nav className={s.nav__wrapper}>
            <ul>
                <li className={s.item}>
                    <a href='/profile'>Profile</a>
                </li>
                <li className={s.item}>
                    <a href='/dialogs'>Messages</a>
                </li>
                <li className={s.item}>
                    <a href='/news'>News</a>
                </li>
                <li className={s.item}>
                    <a href='/music'>Music</a>
                </li>
                <li className={s.item}>
                    <a href='/settings'>Settings</a>
                </li>
            </ul>
        </nav>
    )
}