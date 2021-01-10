import React from 'react'
import Contacts from '../Contacts/Contacts'
import styles from './Description.module.css'


const Description = (props)=>{
   
    return(
        <div>
            <div className={styles.description}><span className={styles.job}>{props.profile.lookingForAJob? '[Сейчас ищет работу]': '[Сейчас не ищет работу]'}</span></div>
            <br/> 
            <div className={styles.description}><span className={styles.job}>{props.profile.lookingForAJobDescription}</span></div>        
            <div className={styles.aboutMe}><span className={styles.job}>{props.profile.aboutMe}</span></div>        
            <Contacts  profile={props.profile}/> 
        </div>
    )
}

export default Description