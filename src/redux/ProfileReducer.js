let initialState = {
    posts: [
        {
            id: 1,
            text: 'Lorem lor sit amet consece error obcaecati!',
            likesCount: 12,
            avatarSrc: 'https://i.pinimg.com/736x/b7/61/b8/b761b89e7349e353c5330af6dbdc0ada.jpg'
        },
        {
            id: 2,
            text: 'Привет DГубка Бобчанский!',
            likesCount: 21,
            avatarSrc: 'https://pbs.twimg.com/media/CWN6WdbWEAAJw8h.jpg:large',
        },
    ],
    posttext: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE-POST-TEXT': {
        let copyState = {...state};
        copyState.posttext = {...state.posttext}
        copyState.posttext = action.text;
            return copyState; }

        case 'CREATE-POST-OBJECT': {
            let post = {
                id: 5,
                text: state.posttext,
                likesCount: 0,
                avatarSrc: 'https://i.pinimg.com/736x/b7/61/b8/b761b89e7349e353c5330af6dbdc0ada.jpg'
            }
            let copystate = {...state};
            copystate.posts = [...state.posts];
            copystate.posts.push(post);
            copystate.posttext = '';
            return copystate; }

        default:
            return state


    }
}
export const addPostActionCreator = () =>
    ({ type: 'CREATE-POST-OBJECT' });

export const updatePostTextActionCreator = (text) =>
    ({
        type: 'UPDATE-POST-TEXT',
        text: text
    });
    
export default profileReducer;