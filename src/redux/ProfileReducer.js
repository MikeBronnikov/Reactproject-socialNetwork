import { profileAPI } from "../api/api";
import userPhoto from '../assets/images/user.png'

const SET_PROFILE='SET_PROFILE'
const SET_STATUS='SET_STATUS'
const SET_FETCHING='SET_FETCHING'
const UPLOAD_SUCCEED = 'UPLOAD_SUCCEED'
const SET_PROFILE_INFO='SET_PROFILE_INFO'

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
        case UPLOAD_SUCCEED: {
            return {...state, profile: {...state.profile, photos: action.photos }}
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

        case SET_PROFILE_INFO: {

            return {...state, profile: {...state.profile, fullName: action.info.FullName, 
            lookingForAJob: action.info.lookingForAJob, lookingForAJobDescription:action.info.LookingForAJobDescription,
            AboutMe:action.info.AboutMe}}
        }

        default:
            return state


    }
}
//thunks creators
export const getProfile=(id)=> async (dispatch)=>{
dispatch(setFetching(true))
let response = await profileAPI.getProfile(id)
dispatch(setFetching(false))
dispatch(setProfile(response.data))
}
export const setProfileInfo=(object)=> async (dispatch)=>{
    debugger
dispatch(setFetching(true))
let response = await profileAPI.setProfileInfo(object)
dispatch(setFetching(false))
if (response.data.resultCode=== 0)
dispatch(setProfileInfoAC(object))
}
export const getStatus=(id)=> async (dispatch)=>{
    let response = await profileAPI.getStatus(id)
    dispatch(setStatusAC(response.data))
}
export const updateStatus=(status)=>async (dispatch)=>{
dispatch(setFetching(true))
let response = await profileAPI.updateStatus(status);
dispatch(setFetching(false))
if (response.data.resultCode==0){
dispatch(setStatusAC(status))
}
}
export const uploadAvatar = (photo)=> async (dispatch)=>{
dispatch(setFetching(true));
let response = await profileAPI.uploadAvatar(photo)
dispatch(setFetching(false));
if (response.data.resultCode === 0) {
dispatch(uploadAvatarSucceed(response.data.data.photos))
}
}
//actions creators
export const addPost = (text) =>
    ({ type: 'CREATE-POST-OBJECT',text });

export const setProfile =(profile)=>
({type:SET_PROFILE, profile})
export const setProfileInfoAC =(info)=>{
console.log(info)
return ({type:SET_PROFILE_INFO, info})}
export const uploadAvatarSucceed =(photos)=>
({type:UPLOAD_SUCCEED, photos})
export const setFetching =(isFetching)=>
({type:SET_FETCHING, isFetching })
export const setStatusAC = (status)=>
({type: SET_STATUS, status})
    
export default profileReducer;