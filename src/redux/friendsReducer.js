let initialState = {
        friends: [
            {
        name: 'Skwidvard',
        avatarSrc: 'https://i.pinimg.com/736x/b7/61/b8/b761b89e7349e353c5330af6dbdc0ada.jpg',
        isOnline: true,
        index: 0,
        },
    {
        name: 'Patrik',
        avatarSrc: 'https://i.pinimg.com/736x/9e/d9/88/9ed98867ada260f6113e3a62c90b7159.jpg',
        isOnline: false,
        index : 1
    },
    ]
};
const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NONE': {

            return state; }

        default:
            return state


    }
}
export default friendsReducer;