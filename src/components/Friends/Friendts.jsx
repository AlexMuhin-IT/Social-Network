import * as React from 'react';


export const Friends = (props) => {
    debugger
    return (
        <>
        {props.state.dialogPage.users.map(user => <div key={user.id} >{user.name}</div>)}
        </>
    )
};