import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


export const Navbar = () => {

    return (
        <nav className={s.nav__wrapper}>
            <div className={s.item}>
                <NavLink
                    to='/profile'
                    activeClassName={s.active}
                >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to='/dialogs'
                    activeClassName={s.active}
                >Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to='/news'
                    activeClassName={s.active}
                >News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to='/music'
                    activeClassName={s.active}
                >Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to='/settings'

                >Settings</NavLink>
            </div>

        </nav>
    )
}


{/*<ul>*/
}
{/*    <li className={s.item}>*/
}
{/*        <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>*/
}
{/*    </li>*/
}
{/*    <li className={s.item}>*/
}
{/*        <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>*/
}
{/*    </li>*/
}
{/*    <li className={s.item}>*/
}
{/*        <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>*/
}
{/*    </li>*/
}
{/*    <li className={s.item}>*/
}
{/*        <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>*/
}
{/*    </li>*/
}
{/*    <li className={s.item}>*/
}
{/*        <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>*/
}
{/*    </li>*/
}
{/*</ul>*/
}
