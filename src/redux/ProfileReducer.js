import { profileAPI } from "../api/api";

const SET_PROFILE='SET_PROFILE'
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
    profile: null,
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:{
            return {...state, profile:action.profile}
        }

        case 'CREATE-POST-OBJECT': {
            let post = {
                id: 5,
                text: action.text,
                likesCount: 0,
                avatarSrc: 'https://i.pinimg.com/736x/b7/61/b8/b761b89e7349e353c5330af6dbdc0ada.jpg'
            }
            let copystate = {...state};
            copystate.posts = [...state.posts];
            copystate.posts.push(post);
            return copystate; }

        default:
            return state


    }
}
export const getProfile=(id)=> async (dispatch)=>{
let response = await profileAPI.getProfile(id)
dispatch(setProfile(response.data))
}
export const addPost = (text) =>
    ({ type: 'CREATE-POST-OBJECT',text });

export const setProfile =(profile)=>
({type:SET_PROFILE, profile})
    
export default profileReducer;