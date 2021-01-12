import { profileAPI } from "../api/api";
import userPhoto from '../assets/images/user.png'

const SET_PROFILE='ProfileReducer/SET_PROFILE'
const SET_STATUS='ProfileReducer/SET_STATUS'
const SET_FETCHING='ProfileReducer/SET_FETCHING'
const UPLOAD_SUCCEED = 'ProfileReducer/UPLOAD_SUCCEED'
const SET_PROFILE_INFO='ProfileReducer/SET_PROFILE_INFO'
const SET_ERROR = 'ProfileReducer/SET_ERROR'
const CREATE_POST_OBJECT = 'ProfileReducer/CREATE_POST_OBJECT'
const DELETE_POST = 'ProfileReducer/DELETE_POST'
const SET_FOLLOW_INFORMATION = 'ProfileReducer/SET_FOLLOW_INFORMATION'

let initialState = {
    posts: [
        {
            id: 1,
            isAuthor: false,
            text: 'Lorem lor sit amet consece error obcaecati!',
            likesCount: 12,
            avatarSrc: 'https://i.pinimg.com/736x/b7/61/b8/b761b89e7349e353c5330af6dbdc0ada.jpg'
        },
        {
            id: 2,
            isAuthor: false,
            text: 'Привет DГубка Бобчанский!',
            likesCount: 21,
            avatarSrc: 'https://pbs.twimg.com/media/CWN6WdbWEAAJw8h.jpg:large',
        }
    ],
    profile: null,
    status: null,
    isFetching: false,
    error: false,
    isUserFollowed: null
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

        case CREATE_POST_OBJECT: {
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
        
        case DELETE_POST:{
            return {...state, posts: state.posts.filter((item)=> item.id !== action.id && item)}
        }

        case SET_PROFILE_INFO: {

            return {...state, profile: {...state.profile, fullName: action.info.FullName, 
            lookingForAJob: action.info.lookingForAJob, lookingForAJobDescription:action.info.LookingForAJobDescription,
            AboutMe:action.info.AboutMe}}
        }
        case SET_ERROR: {
            return {...state, error: action.bolean}
        }
        case SET_FOLLOW_INFORMATION: {
            return {...state, isUserFollowed: action.boolean}
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
export const getFollowInformation=(id)=> async (dispatch)=>{
    debugger
    let response = await profileAPI.getFollowInformation(id);
    dispatch(setFollowInformation(response.data))
}
export const updateStatus=(status)=>async (dispatch)=>{
     try {
dispatch(setFetching(true))
let response = await profileAPI.updateStatus(status);
dispatch(setFetching(false))
if (response.data.resultCode===0){
dispatch(setStatusAC(status))}
} 
    catch (error) {
    dispatch(setFetching(false))
    dispatch(setError(true))
    setTimeout(() => {
        dispatch(setError(false))
    }, 5000);
   
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
    ({ type: CREATE_POST_OBJECT ,text });
export const deletePost = (id) =>
    ({ type: DELETE_POST ,id });

export const setProfile =(profile)=>
({type:SET_PROFILE, profile})
export const setFollowInformation =(boolean)=>
({type:SET_FOLLOW_INFORMATION, boolean})
export const setError =(bolean)=>
({type:SET_ERROR, bolean})
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