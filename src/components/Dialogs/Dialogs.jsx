import React from 'react';
import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <div className={s.dialog_user}>Limon</div>
                <div className={s.dialog_user}>Dimon</div>
                <div className={s.dialog_user}>Andpon</div>
                <div className={s.dialog_user}>Pokimon</div>
                <div className={s.dialog_user}>Doleshe Mon</div>
            </div>
                <div className={s.messages}>
                    <div className={s.message}>'Hi how are you'</div>
                    <div className={s.message}>'Hi, it"s okey'</div>
                    <div className={s.message}>message</div>
                </div>
        </div>
    )
}