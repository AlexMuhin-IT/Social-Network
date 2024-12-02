import React from 'react';
import s from './Dialogs.module.css';
import {NavLink, Outlet} from "react-router-dom";

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={s.dialogUser + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = (props) => {
    const Users = [
        {id: 1, name: 'Limon'},
        {id: 2, name: 'Dimon'},
        {id: 3, name: 'Andron'},
        {id: 4, name: 'Pokimon'},
        {id: 5, name: 'BolesheMon'},
    ]
    const Messages = [
        {id: 1, message: 'Hi how are you'},
        {id: 2, message: 'Hi, it"s okey'},
        {id: 3, message: 'Very good!!'},
        {id: 4, message: 'YO'},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {Users.map(u => (
                    <DialogItem name={u.name} id={u.id} key={u.id} />
                ))}

            </div>
            <div className={s.messages}>
                {Messages.map(m => (
                    <Message message={m.message} key={m.id} />
                ))}

            </div>
        </div>
    )
}
