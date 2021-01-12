import React from 'react';
import styles from './MyFriends.module.css';
import Friend from './Friend/Friend';

const MyFrineds = (props) => {
    let componentsfriend = props.friends.map((friend)=> 
    <Friend key={friend.name} name={friend.name} avatarSrc={friend.avatarSrc} 
    friends={props.friends} index={friend.index}/>)
    return(
        <div className={styles.wrapper}>
            <p>Друзья в сети</p>
        {componentsfriend}
        </div>
    )
}
export default MyFrineds;