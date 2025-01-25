import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "../Friends/Friendts";
import {state} from "../../redux/state";


export const Navbar = () => {
    return (
        <nav className={s.nav__wrapper}>
            <div className={s.item}>
                <ul>
                    <li className={s.item}>
                        <NavLink
                            to='/profile'
                            className={({isActive}) => (isActive ? s.active : s.item)}
                        >Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/dialogs'
                            className={({isActive}) => (isActive ? s.active : s.item)}
                        >Messages</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/news'
                            className={({isActive}) => (isActive ? s.active : s.item)}
                        >News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/music'
                            className={({isActive}) => (isActive ? s.active : s.item)}
                        >Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/settings'
                            className={({isActive}) => (isActive ? s.active : s.item)}
                        >Settings</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/friends'
                            className={({isActive}) => (isActive ? s.active : s.item)}
                            // state={state.dialogPage}
                        >Friends
                            <div className={s.item_container}>
                                {/*<Friends state={state.dialogPage} />*/}
                                <div>
                                    <div className={s.item_avatar}></div>
                                    <div className={s.item_name}>Alex</div>
                                </div>
                                <div>
                                    <div className={s.item_avatar}></div>
                                    <div className={s.item_name}>Bob</div>
                                </div>
                                <div>
                                    <div className={s.item_avatar}></div>
                                    <div className={s.item_name}>Sasha</div>
                                </div>

                                {/*<div className={s.item_avatar}></div>*/}
                                {/*<div className={s.item_name}>Bob</div>*/}
                                {/*<div className={s.item_avatar}></div>*/}
                                {/*<div className={s.item_name}>Sasha</div>*/}
                            </div>

                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

