import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS='SET_USERS';
const TOGGLE_IS_FOLLOWING_PROGRESS='TOGGLE_IS_FOLLOWING_PROGRESS';
const TOGGLE_FETCHING='TOGGLE_FETCHING';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_TOTAL_COUNT='SET_TOTAL_COUNT';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};



const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
           let copyState={...state};
            copyState.users = state.users.map((u)=>{
                if (u.id===action.id){return {...u, followed: true}
            }
                return u
            });
            return copyState
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map((u)=>{
                if (u.id===action.id){return {...u, followed: false}}
                else return u
            })}
        }
        case SET_USERS: {
            return {...state, users: [...action.users ], totalUsersCount: action.totalCount}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case TOGGLE_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        
        default: return state
    }
};
export const toggleFetching = (isFetching) => 
({type: TOGGLE_FETCHING, isFetching })

export const getUsers = (page)=> async (dispatch)=>{
dispatch(toggleFetching(true))
let response = await usersAPI.getUsers(page)
dispatch(setUsers(response.items))
dispatch(setTotalCount(response.totalCount))
dispatch(setCurrentPage(page))
dispatch(toggleFetching(false))
}
export const setFollow=(id)=>async (dispatch)=>{
dispatch(toggleFollowingProgress(true, id));
let response = await usersAPI.follow(id);
if (response.data.resultCode==0) {
    dispatch(toggleFollowingProgress(false, id))
    dispatch(followSucceed(id))
}}
export const setUnFollow=(id)=>async (dispatch)=>{
dispatch(toggleFollowingProgress(true, id));
let response = await usersAPI.unfollow(id);
if (response.data.resultCode==0) {
    dispatch(toggleFollowingProgress(false, id))
    dispatch(unFollowSucceed(id))
}
}
export const setCurrentPage = (currentPage=1) => 
({type: SET_CURRENT_PAGE, currentPage })
export const followSucceed = (userID) =>
    ({ type: FOLLOW, id: userID})
export const unFollowSucceed = (userID) =>
    ({ type: UNFOLLOW, id: userID })
export const setUsers = (users) =>
    ({type:SET_USERS, users})
export const setTotalCount = (totalUsersCount) =>
    ({type:SET_TOTAL_COUNT, totalCount:totalUsersCount})
export const toggleFollowingProgress = (isFetching, userId) => 
({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })
export default UsersReducer;