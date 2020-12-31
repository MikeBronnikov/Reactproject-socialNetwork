import React from 'react'
import styles from './contacts.module.css'

const Contacts = (props) =>{

   return (
       Object.keys(props.profile.contacts).map((contKey)=>{ 
        return <div className={styles.contact} key={contKey}><b>{contKey}: {props.profile.contacts[contKey]}</b></div>
    })
    )
}

export default Contacts