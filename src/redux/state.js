export const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 1},
            {id: 2, message: 'Who are you?', likesCount: 11},
        ],


    },
    dialogPage: {
        users: [
            {id: 1, name: 'Limon'},
            {id: 2, name: 'Dimon'},
            {id: 3, name: 'Andron'},
            {id: 4, name: 'Pokimon'},
            {id: 5, name: 'BolesheMon'},
        ],
        profileInfo: [
            {img: 'https://pngimg.com/uploads/aries/small/aries_PNG10.png'}
        ],
        messages: [
            {id: 1, message: 'Hi how are you'},
            {id: 2, message: 'Hi, it"s okey'},
            {id: 3, message: 'Very good!!'},
            {id: 4, message: 'YO'},
        ],
    },
    sitebar: {}
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
}