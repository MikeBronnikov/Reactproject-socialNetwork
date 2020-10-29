import React from 'react';
import styles from './Friend.module.css';
const Friend = (props) => {
    return (
        <div className={styles.wrapper}>
        <img src={props.avatarSrc}  
        className={props.friends[props.index].isOnline? styles.online : styles.offline}/> 
        <p>{props.name}</p>
        </div>
        )
}
export default Friend;