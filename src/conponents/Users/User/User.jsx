import React from 'react'
import styles from './user.module.css'
import FollowUnfollowBtns from '../../../common/followUnfollowBtns/followUnfollowBtns';
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";

const User = (props) => {
    return(
<div className={styles.eachUser}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + props.id}>
                        <img src={props.photos.small != null ? props.photos.small : userPhoto} alt='AVATAR'
                             className={styles.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                    <FollowUnfollowBtns followed ={props.followed} followingInProgress={props.followingInProgress} 
                    setFollow={props.setFollow} setUnFollow={props.setUnFollow} id={props.id}/>
                    </div>
                </span>
                <span>
                        <div className={styles.username}>{props.name}</div>
                        <div>{props.status}</div>
                </span>
            </div>
    )}
export default User