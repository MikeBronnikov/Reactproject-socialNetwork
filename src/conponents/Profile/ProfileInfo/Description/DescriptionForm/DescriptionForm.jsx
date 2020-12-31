import { useFormik } from 'formik'
import React, { useState } from 'react'
import styles from './DescriptionForm.module.css'


const DescriptionForm = (props)=>{
    const objInfo = {  'ID пользователя': '',
    'В поиске работы?': '',
    'Описание работы': '',
    'Полное имя': '',
    }
    const objContacts ={
     Github: '',
    'vk': '',
    'facebook': '' ,
    'instagram': '',
    'twitter': '',
    'website': '',
    'youtube': '',
    'mainLink': ''
    }
 let formik = useFormik({
     initialValues: { userId : '',
     lookingForAJob: '',
     lookingForAJobDescription: '',
     fullName: '',
        contacts: {
            Github: 'ddd',
            vk: '',
            facebook: '' ,
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: ''   
        } },
     onSubmit: (values)=>{console.log(values)}
    
 })
    return(
        <form action="">
        {Object.keys(objInfo).map((key)=>{return (
            <div className={styles.item}>
            <label htmlFor={key}> {key} </label> 
            {key==='В поиске работы?'?
            <input onChange={formik.handleChange} type="checkbox"/> 
            :<input id={key} name={key}
             onChange={formik.handleChange} value={formik.values.key} type="text"/>}
            </div>
        )})}
        КОНТАКТЫ
        {Object.keys(objContacts).map((key)=>{return (
            <div className={styles.item}>
            <label htmlFor={key}> {key} </label> 
            <input id={key} onChange={formik.handleChange} name={'contacts.'+ key} value={formik.values.key} type="text"/>
            </div>
        )})}
        <button onClick={formik.handleSubmit}>Сохранить изменения профиля</button>
        </form>

        // <div>
        //    <div className={styles.item}>
        // <label htmlFor="Github"> Github </label> <input id={'Github'} 
        // onChange={formik.handleChange} value={formik.values.Github} type="text"/>
        // </div>
        //    <div className={styles.item}>
        // <label htmlFor="userId"> userId </label> <input id={'userId'} 
        // onChange={formik.handleChange} value={formik.values.Github} type="text"/>
        // </div>
        // </div>
    )
}

export default DescriptionForm