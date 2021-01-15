import React, { useEffect } from 'react'
import {compose} from 'redux'
import { connect } from 'react-redux'
import { setFollow, setUnFollow, setCurrentPage, toggleFollowingProgress,
    getUsers, setPageSize} from '../../redux/UsersReducer'
import Users from './Users'
import Preloader from '../../common/Preloader'
//import { withErrorBoundary } from '../../hoc/wuthErrorBoundary'

const UsersContainer =(props)=> {
useEffect(() => {
props.getUsers(props.pageNumber, props.pageSize);
   
}, [props.pageSize])

        return <div>
            {props.isFetching &&<Preloader />}
            <Users {...props}
             />
        </div>
    
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        error: state.usersPage.error
    }
}


export default compose(
    connect(mapStateToProps,{setFollow, setUnFollow, setCurrentPage, toggleFollowingProgress, getUsers, setPageSize })
)(UsersContainer)