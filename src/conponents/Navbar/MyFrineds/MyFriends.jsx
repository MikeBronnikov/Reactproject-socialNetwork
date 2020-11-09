import React from 'react';
import styles from './MyFriends.module.css';
import Friend from './Friend/Friend';

const MyFrineds = (props) => {
    debugger
    let componentsfriend = props.friends.friends.map((friend)=> 
    <Friend name={friend.name} avatarSrc={friend.avatarSrc} friends={props.friends} index={friend.index}/>)
    return(
        <div className={styles.wrapper}>
            <p>Друзья в сети</p>
        {componentsfriend}
        </div>
    )
}
export default MyFrineds;