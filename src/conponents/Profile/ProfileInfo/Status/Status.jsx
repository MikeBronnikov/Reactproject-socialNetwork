import { useFormik } from 'formik'
import React, { useState } from 'react'
import Preloader from '../../../../common/Preloader'
import styles from './status.module.css'

const Status = (props) =>{
    const [status, setstatus] = useState(props.status)
    const formik = useFormik({
        initialValues: {
            status: status
        },
        onSubmit: (values)=>{props.updateStatus(values.status);
        seteditMode(false)}
    })
    const [editMode, seteditMode] = useState(false)
    if (props.isFetching){return <Preloader />}
    return (
        <div className={styles.statusWrapper}>
            
            {editMode
            ?<div><input name='status' onChange={formik.handleChange} 
            onBlur={formik.handleSubmit} autoFocus={true} value={formik.values.status} /> 
            <button onClick={()=>{seteditMode(false)}}>Не изменять</button></div>
            :<span className={styles.status} onClick={()=>{seteditMode(true)}}> {props.status} </span>}
        </div>
    )
}

export default Status