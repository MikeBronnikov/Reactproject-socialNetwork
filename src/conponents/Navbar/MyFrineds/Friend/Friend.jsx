import React from 'react';
import styles from './Friend.module.css';
const Friend = (props) => {
    return (
        <div className={styles.wrapper}>
        <img src={props.avatarSrc} alt='friendavatar' 
        /> 
        <p>{props.name}</p>
        </div>
        )
}
export default Friend;