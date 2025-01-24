import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Messages/Messages";
import {ProfileInfo} from "../Profile/ProfileInfo/ProfileInfo";

export const Dialogs = (props) => {
    let newPostElement = React.createRef()


    const addDialog = () => {
        let text = newPostElement.current.value;
        alert(`написали этот текст: ${ text }`)
    }
    const removePost = () => {
        alert("Add Post");
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {props.state.users.map(u => (
                    <div>
                        {/*<ProfileInfo user={u.img}/>*/}
                        <DialogItem user={u.img} name={u.name} id={u.id} key={u.id}/>
                    </div>
                ))}

            </div>
            <div className={s.messages}>
                {props.state.messages.map(m => (
                    <Message message={m.message} key={m.id}/>
                ))}
            </div>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addDialog}>Add post</button>
            </div>
        </div>
    )
}
