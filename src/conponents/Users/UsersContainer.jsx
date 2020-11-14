import React from 'react'
import { connect } from 'react-redux'
import { followAC, unFollowAC, setUsersAC } from '../../redux/UsersReducer'
import Users from './Users'

let mapStateToProps=(state)=>{
    debugger
    console.log(state)
    debugger
    return {
        usersData: state.usersPage.users
    }
    
}
let mapDispatchToProps=(dispatch)=>{
    return {
        follow: (userID)=>{
            dispatch(followAC(userID))
        },
        unFollow: (userID)=>{
            dispatch(unFollowAC(userID))
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;