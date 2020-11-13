const FOLLOW = 'FOLLOW'
const UNFOLLOW ='UNFOLLOW'
const SET_USERS='SET_USERS'
let initialState = {
    users: [{
        fullName: 'Dmitry X',
        id: '1',
        status: 'Всем здравстуйте! Ищу программиста в команду',
        location: 'Moscow, Russia',
        AmIfollowed: false,
        avatarImg: 22,
    }]

}
debugger
const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
           let copyState={...state};
            copyState.users = state.users.map((u)=>{
                if (u.id==action.id){return {...u, AmIfollowed: true}
            }
                return u
            });
            return copyState
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map((u)=>{
                if (u.id==action.id){return {...u, AmIfollowed: false}}
                else return u
            })}
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users ]}
        }
        
        default: return state
    }
}

export const followAC = (userID) =>
    ({ type: FOLLOW, id: userID})
export const unFollowAC = (userID) =>
    ({ type: UNFOLLOW, id: userID })
export const setUsersAC = (users) =>
    ({type:SET_USERS, users:users})

export default UsersReducer;