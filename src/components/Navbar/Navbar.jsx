import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className={s.nav__wrapper}>
            <div className={s.item}>
                <ul>
                    <li className={s.item}>
                        <NavLink
                            to='/profile'
                             className={({ isActive }) => (isActive ? s.active : s.item)}
                        >Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/dialogs'
                             className={({ isActive }) => (isActive ? s.active : s.item)}
                        >Messages</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/news'
                             className={({ isActive }) => (isActive ? s.active : s.item)}
                        >News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/music'
                             className={({ isActive }) => (isActive ? s.active : s.item)}
                        >Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/settings'
                             className={({ isActive }) => (isActive ? s.active : s.item)}
                        >Settings</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

