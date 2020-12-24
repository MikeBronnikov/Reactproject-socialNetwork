import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS='SET_USERS';
const TOGGLE_IS_FOLLOWING_PROGRESS='TOGGLE_IS_FOLLOWING_PROGRESS';
const TOGGLE_FETCHING='TOGGLE_FETCHING';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';

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
                if (u.id===action.id){return {...u, AmIfollowed: true}
            }
                return u
            });
            return copyState
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map((u)=>{
                if (u.id===action.id){return {...u, AmIfollowed: false}}
                else return u
            })}
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users ]}
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

export const getUsers = ()=> async (dispatch)=>{
dispatch(toggleFetching(true))
let response = await usersAPI.getUsers()
dispatch(setUsers(response.items))
dispatch(toggleFetching(false))
}
export const setCurrentPage = (currentPage) => 
({type: SET_CURRENT_PAGE, currentPage })

export const follow = (userID) =>
    ({ type: FOLLOW, id: userID})
export const unFollow = (userID) =>
    ({ type: UNFOLLOW, id: userID })
export const setUsers = (users) =>
    ({type:SET_USERS, users})
export const toggleFollowingProgress = (isFetching, userId) => 
({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })
export default UsersReducer;