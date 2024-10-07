import React from 'react';
import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <div className={s.dialogUser}>Limon</div>
                <div className={s.dialogUser}>Dimon</div>
                <div className={s.dialogUser}>Andpon</div>
                <div className={s.dialogUser}>Pokimon</div>
                <div className={s.dialogUser}>Doleshe Mon</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>'Hi how are you'</div>
                <div className={s.message}>'Hi, it"s okey'</div>
                <div className={s.message}>message</div>
            </div>
        </div>
    )
}