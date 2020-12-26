import { profileAPI } from "../api/api";
import userPhoto from '../assets/images/user.png'

const SET_PROFILE='SET_PROFILE'
const SET_STATUS='SET_STATUS'
const SET_FETCHING='SET_FETCHING'

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
    status: null,
    isFetching: false
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:{
            return {...state, profile:action.profile}
        }
        case SET_STATUS:{
            return {...state, status: action.status}
        }
        case SET_FETCHING:{
            return{...state, isFetching: action.isFetching}
        }

        case 'CREATE-POST-OBJECT': {
            let post = {
                id: 5,
                text: action.text,
                likesCount: 0,
                avatarSrc: state.profile.photos.small?state.profile.photos.small: userPhoto
            }
            let copystate = {...state};
            copystate.posts = [...state.posts];
            copystate.posts.unshift(post);
            return copystate; }

        default:
            return state


    }
}
//thunks creators
export const getProfile=(id)=> async (dispatch)=>{
dispatch(setFetching(true))
debugger
let response = await profileAPI.getProfile(id)
dispatch(setFetching(false))
dispatch(setProfile(response.data))
}
export const getStatus=(id)=> async (dispatch)=>{
    let response = await profileAPI.getStatus(id)
    debugger
    dispatch(setStatusAC(response.data))
}
export const updateStatus=(status)=>async (dispatch)=>{
dispatch(setFetching(true))
debugger
let response = await profileAPI.updateStatus(status);
debugger
dispatch(setFetching(false))
if (response.data.resultCode==0){
dispatch(setStatusAC(status))
}
}
//actions creators
export const addPost = (text) =>
    ({ type: 'CREATE-POST-OBJECT',text });

export const setProfile =(profile)=>
({type:SET_PROFILE, profile})
export const setFetching =(isFetching)=>
({type:SET_FETCHING, isFetching })
export const setStatusAC = (status)=>
({type: SET_STATUS, status})
    
export default profileReducer;