import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {getProfile, getStatus, updateStatus, uploadAvatar, setProfileInfo, getFollowInformation} from '../../redux/ProfileReducer'
import { getErrorSelector, getProfileSelector, getAuthUserIDSelector, getIsUserFollowedSelector,
    getUsersSelector, getStatusSelector, getisFetchingSelector, getFollowingInProgressSelector } from '../../redux/ProfileSelectors'
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
        error: getErrorSelector(state),
        profile: getProfileSelector(state),
        status: getStatusSelector(state),
        isFetching: getisFetchingSelector(state),
        authUserID: getAuthUserIDSelector(state) ,
        isUserFollowed: getIsUserFollowedSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
        users:getUsersSelector(state)
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps,{getProfile, setProfileInfo, getStatus, updateStatus, 
    uploadAvatar, getFollowInformation, setUnFollow, setFollow })
    )(ProfileContainer)