import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {getProfile, getStatus, updateStatus} from '../../redux/ProfileReducer'
import Profile from './Profile'


class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId= this.props.match.params.id
        this.props.getProfile(userId);
        this.props.getStatus(userId);
        this.props.getStatus(userId)
    }
render(){
  return (  
  <div>
        <Profile {...this.props} profile={this.props.profile}/>
    </div>
  )
}
}
let mapStateToProps=(state)=>{
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isFetching: state.profilePage.isFetching
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps,{getProfile, getStatus, updateStatus})
    )(ProfileContainer)