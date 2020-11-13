import React from 'react'
import styles from './user.module.css'
const User = (props) => {
    return(
    <div className={styles.userWrapper}>
        <div className={styles.imgAndBtnWrapper}>
            <img src={props.avatarImg} alt="" />
            <button>Follow</button>
        </div>
        <div className={styles.content}>
            <p className={styles.fullName}>{props.fullName}</p>
            <p className={styles.status}>{props.status}</p>
            <p className={styles.location}>{props.location}</p>
        </div>
    </div>   
    )}
export default User