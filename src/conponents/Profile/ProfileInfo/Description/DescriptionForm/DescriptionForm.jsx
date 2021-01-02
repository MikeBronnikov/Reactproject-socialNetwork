import { useFormik } from 'formik'
import React, { useState } from 'react'
import styles from './DescriptionForm.module.css'


const DescriptionForm = (props)=>{
 let formik = useFormik({
     initialValues: {
        lookingForAJob: props.profile.lookingForAJob,
        LookingForAJobDescription: props.profile.lookingForAJobDescription,
        FullName: props.profile.fullName,
        AboutMe: props.profile.aboutMe,
        },
     onSubmit: (values)=>{
        props.setProfileInfo(values);
        props.setdiscriptionEditMode(false)
    },
    validate: values =>{
        let errors ={};
        if (!values.FullName){
            errors.FullName = 'Это поле должно быть заполнено'
        }
        if (!values.LookingForAJobDescription){
            errors.LookingForAJobDescription = 'Это поле должно быть заполнено'
        }
        if (!values.FullName){
            errors.FullName = 'Это поле должно быть заполнено'
        }
        return errors
    }
    
 })
    return(
        <form action="">
            <div className={styles.item}>
                <label htmlFor="lookingForAJob">В поиске работы</label> <input id='lookingForAJob' onChange={formik.handleChange} 
                name='lookingForAJob' value={formik.values.lookingForAJob} type="checkbox"/>
            </div>
            <div className={styles.item}>
                <label htmlFor="LookingForAJobDescription">Описание работы</label> 
                <input id='LookingForAJobDescription' onChange={formik.handleChange} 
                name='LookingForAJobDescription' value={formik.values.LookingForAJobDescription} type="text"/>
                 <br/>
                 {formik.errors.LookingForAJobDescription&&  <span className={styles.error}>{formik.errors.LookingForAJobDescription}</span>}
            </div>
            <div className={styles.item}>
                <label htmlFor="FullName">Полное имя</label> 
                <input id='FullName' onChange={formik.handleChange} 
                name='FullName' value={formik.values.FullName} type="text"/>
                <br/>
                 {formik.errors.FullName&&  <span className={styles.error}>{formik.errors.FullName}</span>}
            </div>
            <div className={styles.item}>
                <label htmlFor="AboutMe">Расскажите о себе</label> 
                <input id='AboutMe' onChange={formik.handleChange} 
                name='AboutMe' value={formik.values.AboutMe} type="text"/>
                <br/>
                 {formik.errors.AboutMe&&  <span className={styles.error}>{formik.errors.AboutMe}</span>}
            </div>
            <div className={styles.item}>
                <label htmlFor="Github">Github</label> 
                <input id='lookingForAJobDescription' onChange={formik.handleChange} 
                name='contacts.github' value={formik.values.github} type="text"/>
            </div>
            <div className={styles.item}>
                <label htmlFor="vk">vk</label> 
                <input id='vk' onChange={formik.handleChange} 
                name='contacts.vk' value={formik.values.vk} type="text"/>
            </div>
        <button onClick={formik.handleSubmit}>Сохранить изменения профиля</button>
        </form>

    )
}

export default DescriptionForm