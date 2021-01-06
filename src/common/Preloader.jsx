import React from 'react'
import preloader from '../assets/images/Dual Ring-1.9s-200px.svg'
import styles from './styles.module.css'
const Preloader =()=>{
    return (
        <div className={styles.wrapper}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader