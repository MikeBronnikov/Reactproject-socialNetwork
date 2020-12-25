import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import {getProfile} from '../../redux/ProfileReducer'
import Profile from './Profile'


class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId= this.props.match.params.id
        console.log(userId)
        this.props.getProfile(userId);
        console.log(this.props)
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
        profile: state.profilePage.profile
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps,{getProfile})
    )(ProfileContainer)