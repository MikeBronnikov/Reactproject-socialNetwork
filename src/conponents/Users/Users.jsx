import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import PagesLine from './pagesLine/PagesLine';

let Users = (props) => {




    return <div className={styles.usersWrapper
    }>
        <PagesLine getUsers={props.getUsers} totalItemsCount={props.totalUsersCount} 
        currentPage={props.currentPage} pageSize={props.pageSize}/>
        <div>
        </div>
        {
            props.users.map(u => <div key={u.id} className={styles.eachUser}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                      onClick={() => { props.setUnFollow(u.id) }}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => { props.setFollow(u.id) }}>
                                      Follow</button>}

                    </div>
                </span>
                <span>
                        <div className={styles.username}>{u.name}</div>
                        <div>{u.status}</div>
                </span>
            </div>)
        }
    </div>
}

export default Users;