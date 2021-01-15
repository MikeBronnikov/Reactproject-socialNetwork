import { usersAPI } from "../api/api";

const FOLLOW = 'UsersReducer/FOLLOW';
const UNFOLLOW ='UsersReducer/UNFOLLOW';
const SET_USERS='UsersReducer/SET_USERS';
const TOGGLE_IS_FOLLOWING_PROGRESS='UsersReducer/TOGGLE_IS_FOLLOWING_PROGRESS';
const TOGGLE_FETCHING='UsersReducer/TOGGLE_FETCHING';
const SET_CURRENT_PAGE='UsersReducer/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT='UsersReducer/SET_TOTAL_COUNT';
const SET_PAGE_SIZE = 'UsersReducer/SET_PAGE_SIZE'
const SET_ERROR ='UsersReducer/SET_ERROR'

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    error: false

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
                if (u.id === action.id){return {...u, followed: false}}
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
        case SET_ERROR: {
            return {...state, error: action.bolean}
        }
        case TOGGLE_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case SET_PAGE_SIZE: {
            return {...state, pageSize: action.size}
        }
        
        default: return state
    }
};

export const getUsers = (page, size, isfriends)=> async (dispatch)=>{
dispatch(toggleFetching(true))
let response = await usersAPI.getUsers(page, size, isfriends)
dispatch(setUsers(response.items))
dispatch(setTotalCount(response.totalCount))
dispatch(setCurrentPage(page))
dispatch(toggleFetching(false))
}
export const setFollow=(id)=>async (dispatch)=>{
    try{
dispatch(toggleFollowingProgress(true, id));
let response = await usersAPI.follow(id);
if (response.data.resultCode === 0) {
    dispatch(toggleFollowingProgress(false, id))
    dispatch(followSucceed(id))
}} catch{
      dispatch(toggleFollowingProgress(false, id))
      dispatch(setError(true))
      setTimeout(() => {
      dispatch(setError(false)) 
      }, 5000);
    }
}
export const setUnFollow=(id)=>async (dispatch)=>{ try{
dispatch(toggleFollowingProgress(true, id));
let response = await usersAPI.unfollow(id);
if (response.data.resultCode === 0) {
    dispatch(toggleFollowingProgress(false, id))
    dispatch(unFollowSucceed(id))
}
} catch{
    dispatch(toggleFollowingProgress(false, id))
    dispatch(setError(true))
    setTimeout(() => {
    dispatch(setError(false)) 
    }, 5000);
  }}
//action creators here 
export const setCurrentPage = (currentPage=1) => 
({type: SET_CURRENT_PAGE, currentPage })
export const setPageSize = (size) => 
({type: SET_PAGE_SIZE, size })
export const followSucceed = (userID) =>
    ({ type: FOLLOW, id: userID})
export const unFollowSucceed = (userID) =>
    ({ type: UNFOLLOW, id: userID })
export const setError =(bolean)=>
({type:SET_ERROR, bolean})
export const setUsers = (users) =>
    ({type:SET_USERS, users})
export const toggleFetching = (isFetching) => 
({type: TOGGLE_FETCHING, isFetching })
export const setTotalCount = (totalUsersCount) =>
    ({type:SET_TOTAL_COUNT, totalCount:totalUsersCount})
export const toggleFollowingProgress = (isFetching, userId) => 
({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })
export default UsersReducer;