import { authAPI, securityAPI } from "../api/api"

const SET_AUTH_DATA = 'authReducer/SET_AUTH_DATA'
const SET_FETCHING = 'authReducer/SET_FETCHING'
const SET_CAPTCHA='authReducer/SET_CAPTCHA'
const SET_ERRORS_LOGIN = 'authReducer/SET_ERRORS_LOGIN'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null,
    isFetching: false,
    errorsDuringLogin:[]
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return { ...state, ...action.payload }
        }
        case SET_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_CAPTCHA: {
            return {...state, captcha: action.url}
        }
        case SET_ERRORS_LOGIN: {
            return {...state, errorsDuringLogin: [...action.errors]}
        }
        default:
            return state
    }
}
//Action creators here
export const setAuthData = (id, login, email, isAuth) => {
    return { type: SET_AUTH_DATA, payload: { email, id, login, isAuth } }
}
export const setFetching = (isFetching) => {
    return { type: SET_FETCHING, isFetching }
}
export const setCaptcha = (url) => {
    return { type: SET_CAPTCHA, url }
}
export const errorsDuringLogin = (errors) => {
    return { type: SET_ERRORS_LOGIN, errors }
}

//Thunks creators here
export const getUserAuth = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthData(id, login, email, true))
    }
    return response
};

export const getCapchaURL= ()=> async (dispatch) =>{
    const responseURL = await securityAPI.getCaptcha()
    dispatch(setCaptcha(responseURL.data.url))
}

export const getLogin = (email, password, rememberMe, captcha) => async (dispatch) => {
    debugger
    dispatch(setFetching(true));
    let response = await authAPI.login(email, password, rememberMe, captcha)
    dispatch(setFetching(false));
    if (response.data.resultCode === 0) {
        dispatch(getUserAuth())
    }
     else if (response.data.resultCode === 10) {
    dispatch(getCapchaURL())
    }
    if (response.data.resultCode === 1){
        dispatch(errorsDuringLogin(response.data.messages))
    }   
}
export const getLogout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false))
    }
}

export default authReducer