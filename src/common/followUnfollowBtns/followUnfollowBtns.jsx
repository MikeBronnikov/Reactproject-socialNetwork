import React from 'react'

const FollowUnfollowBtns = (props) =>{
    return (
        props.followed
        ?<button className={props.cn} disabled={props.followingInProgress.some(id => id === props.id)}
            onClick={() => { props.setUnFollow(props.id) }}> Unfollow</button>
        : <button className={props.cn} disabled={props.followingInProgress.some(id => id === props.id)}
            onClick={() => { props.setFollow(props.id); debugger }}>Follow</button>
    )
}
export default FollowUnfollowBtns
//need to provide user-obj, following in progress, setUnfollow and setFollow