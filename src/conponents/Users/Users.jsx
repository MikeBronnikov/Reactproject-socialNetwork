import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import PagesLine from '../../common/pagesLine/PagesLine';
import SizeSelector from './sizeSelector/SizeSelector';
import FollowUnfollowBtns from '../../common/followUnfollowBtns/followUnfollowBtns';

let Users = (props) => {


    return <div className={styles.usersWrapper}>
        <PagesLine getUsers={props.getUsers} totalItemsCount={props.totalUsersCount} 
        currentPage={props.currentPage} pageSize={props.pageSize}/>
        <div>
        </div>
        {
            props.users.map(u => <div key={u.id} className={styles.eachUser}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='AVATAR'
                             className={styles.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                        {/* {u.followed
                            ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                      onClick={() => { props.setUnFollow(u.id) }}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => { props.setFollow(u.id) }}>
                                      Follow</button>} */}
                    <FollowUnfollowBtns followed ={u.followed} followingInProgress={props.followingInProgress} 
                    setFollow={props.setFollow} setUnFollow={props.setUnFollow} id={u.id}/>

                    </div>
                </span>
                <span>
                        <div className={styles.username}>{u.name}</div>
                        <div>{u.status}</div>
                </span>
            </div>)
        }
        <SizeSelector setPageSize={props.setPageSize} pageSize={props.pageSize}/>
    </div>
}

export default Users;