import React from 'react'
import styles from './sub.module.css'
import userphoto from '../../../assets/images/user.png'
import FollowUnfollowBtns from '../../../common/followUnfollowBtns/followUnfollowBtns'
import { NavLink } from 'react-router-dom';

const Sub = (props)=>{

    return(
        <div className={styles.wrapper}>
            <div className={styles.inner}>
            <NavLink to={`profile/${props.id}`}>
            <img className={styles.image} src={props.photos.small? props.photos.small: userphoto} alt="Avatar"/>
            </NavLink>
            <div className={styles.discr}>
            <NavLink to={`profile/${props.id}`}>
            <p>{props.name}</p>
            </NavLink>
            <p className={styles.status}>{props.status?props.status:'Статус не установлен'}</p>
            </div>
            <FollowUnfollowBtns followed ={props.followed} cn={styles.btn} followingInProgress={props.followingInProgress} 
            setFollow={props.setFollow} setUnFollow={props.setUnFollow} id={props.id}/>
            </div>

        </div>
    )
}
export default Sub