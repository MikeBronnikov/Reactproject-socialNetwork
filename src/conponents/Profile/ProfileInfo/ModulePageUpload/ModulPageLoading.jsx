import React, { useRef } from 'react'
import useOutsideClick from '../../../../castomHooks/useOutsideClick';
import styles from './modulPageLoading.module.css'

const ModulPageLoading =(props)=>{
        const ref = useRef();
        useOutsideClick(ref, () => {
        props.setmoduleWindow(false)
        });
      
return (
    <div ref={ref} className={styles.wrapper}>
       <div className={styles.input}><input onChange={props.onInputChange} type="file"/></div>
    </div>
)
}

export default ModulPageLoading