import React from 'react'
import User from './User/User'
import styles from './Users.module.css'
const Users=(props)=>{
    debugger
    let forMapping = props.usersData.map((user)=>{
       return <User avatarImg={user.avatarImg} fullName={user.fullName} status={user.status} location={user.location} />
    })
    return(
        <div className={styles.usersWrapper}>
     {forMapping}
        </div>
    )   
}

export default Users