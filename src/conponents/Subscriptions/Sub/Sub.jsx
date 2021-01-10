import React from 'react'
import styles from './sub.module.css'
import userphoto from '../../../assets/images/user.png'
import FollowUnfollowBtns from '../../../common/followUnfollowBtns/followUnfollowBtns'

const Sub = (props)=>{

    return(
        <div className={styles.wrapper}>
            <div className={styles.inner}>
            <img className={styles.image} src={props.photos.small? props.photos.small: userphoto} alt="Avatar"/>
            <div className={styles.discr}>
            <p>{props.name}</p>
            <p className={styles.status}>{props.status?props.status:'Статус не установлен'}</p>
            </div>
            <FollowUnfollowBtns followed ={props.followed} cn={styles.btn} followingInProgress={props.followingInProgress} 
            setFollow={props.setFollow} setUnFollow={props.setUnFollow} id={props.id}/>
            </div>
        </div>
    )
}
export default Sub