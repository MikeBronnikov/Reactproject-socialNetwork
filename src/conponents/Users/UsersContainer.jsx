import React from 'react'
import {compose} from 'redux'
import { connect } from 'react-redux'
import { setFollow, setUnFollow, setCurrentPage, toggleFollowingProgress,
    getUsers} from '../../redux/UsersReducer'
import Users from './Users'
import Preloader from '../../common/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <div>
            {this.props.isFetching &&<Preloader />}
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        getUsers={this.props.getUsers}
                        setFollow={this.props.setFollow}
                        setUnFollow={this.props.setUnFollow}
                        followingInProgress={this.props.followingInProgress}
             />
        </div>
    }
}

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose(
    connect(mapStateToProps,{setFollow, setUnFollow, setCurrentPage, toggleFollowingProgress, getUsers })
)(UsersContainer)