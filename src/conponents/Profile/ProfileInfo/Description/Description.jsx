import React, { useState } from 'react'
import Contacts from '../Contacts/Contacts'
import Status from '../Status/Status'
import styles from './Description.module.css'


const Description = (props)=>{
   
    return(
        <div>
            <div className={styles.description}><span className={styles.job}>{props.profile.lookingForAJob? '[Сейчас ищет работу]': '[Сейчас не ищет работу]'}</span></div>
            <br/>         
            <Contacts  profile={props.profile}/> 
        </div>
    )
}

export default Description