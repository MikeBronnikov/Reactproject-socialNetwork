import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {getProfile, getStatus, updateStatus, uploadAvatar, setProfileInfo, getFollowInformation} from '../../redux/ProfileReducer'
import {setUnFollow, setFollow} from '../../redux/UsersReducer'
import Profile from './Profile'

const ProfileContainer=(props)=>{

let userId= props.match.params.id;
let users = props.users
const isAuthUserOwnIt = (props.authUserID === Number(userId))
useEffect(() => {
    props.getProfile(userId);
    props.getStatus(userId)
}, [userId])

useEffect(() => {
    if (!isAuthUserOwnIt){
        props.getFollowInformation(userId)
        }
}, [users])

  return (  
  <div>
        <Profile {...props} isAuthUserOwnIt={isAuthUserOwnIt} userId={userId}/>
    </div>
  )
}

let mapStateToProps=(state)=>{
    return {
        error: state.profilePage.error,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isFetching: state.profilePage.isFetching,
        authUserID: state.auth.id,
        isUserFollowed: state.profilePage.isUserFollowed,
        followingInProgress: state.usersPage.followingInProgress,
        users:state.usersPage.users
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps,{getProfile, setProfileInfo, getStatus, updateStatus, 
    uploadAvatar, getFollowInformation, setUnFollow, setFollow })
    )(ProfileContainer)