import { authAPI } from "../api/api"

const SET_AUTH_DATA='SET_AUTH_DATA'
const SET_FETCHING='SET_FETCHING'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA : {
            return {...state, ...action.payload}
        }
        case SET_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const setAuthData =(id, login, email, isAuth)=>{
    return {type: SET_AUTH_DATA, payload: {email, id, login, isAuth}}
}
export const setFetching = (isFetching)=>{
    return {type: SET_FETCHING, isFetching}
}

export const getUserAuth = ()=> async (dispatch)=>{
let response = await authAPI.me();
console.log(response)
if (response.data.resultCode === 0) {
let {id, login, email} = response.data.data;
dispatch(setAuthData(id, login, email, true))
}
return response };

export const getLogin=(email, password, rememberMe)=>async (dispatch)=>{
dispatch(setFetching(true));
let response = await authAPI.login(email, password, rememberMe)
dispatch(setFetching(false));
if(response.data.resultCode==0){
    dispatch(getUserAuth())
} else {console.log('нужно показать ошибку в самой форме')}
}
export const getLogout=()=>async(dispatch)=>{
    debugger
let response = await authAPI.logout();
debugger
if (response.data.resultCode==0){
    dispatch(setAuthData(null, null, null, false))
}
}

export default authReducer