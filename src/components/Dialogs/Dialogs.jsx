import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialogUser}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>

    )
}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <DialogItem name={'Limon'} id='1'/>
                <DialogItem name={'Dimon'} id='2'/>
                <DialogItem name={'Andron'} id='3'/>
                <DialogItem name={'Pokimon'} id='4'/>
                <DialogItem name={'Doleshe Mon'} id='5'/>
                </div>
            <div className={s.messages}>
                <Message message={'Hi how are you'} />
                <Message message={'Hi, it"s okey'} />
                <Message message={'Very good!!'} />
            </div>
        </div>
    )
}
