import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {getProfile, getStatus, updateStatus, uploadAvatar, setProfileInfo} from '../../redux/ProfileReducer'
import Profile from './Profile'

// let userId= this.props.match.params.id
//         this.props.getProfile(userId);
//         this.props.getStatus(userId);

const ProfileContainer=(props)=>{
let userId= props.match.params.id
useEffect(() => {
    props.getProfile(userId);
    props.getStatus(userId)
}, [userId,])

  return (  
  <div>
        <Profile {...props} />
    </div>
  )
}

let mapStateToProps=(state)=>{
    return {
        error: state.profilePage.error,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isFetching: state.profilePage.isFetching
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps,{getProfile, setProfileInfo, getStatus, updateStatus, uploadAvatar})
    )(ProfileContainer)