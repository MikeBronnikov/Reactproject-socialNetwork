import React, { useEffect } from 'react';
import Subscriptions from './Subscriptions';
import {getUsers, setUnFollow, setFollow} from '../../redux/UsersReducer'
import { connect } from 'react-redux';
//styles

const SubscriptionsContainer = (props) =>{
    useEffect(() => {
        props.getUsers(1, 10, true)

    }, [])
    return (
        <div>
            <Subscriptions {...props}/>
        </div>
    )
}
const mapStateToProps =(state)=>{
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect(mapStateToProps,{getUsers, setUnFollow, setFollow})(SubscriptionsContainer);