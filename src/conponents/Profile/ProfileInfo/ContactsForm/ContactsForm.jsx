import { useFormik } from 'formik'
import React from 'react'


const ContactsForm = (props) =>{
let formik = useFormik({
    initialValues:{
        'Github': '',
        'vk': '',
        'facebook': '' ,
        'instagram': '',
        'twitter': '',
        'website': '',
        'youtube': '',
        'mainLink': ''
    },
    onSubmit: (values)=>{props.lorem(values)},
})
   return (
    <form >
        <div>
        <label htmlFor="Github"> Github </label> <input id={'Github'} 
        onChange={formik.handleChange} value={formik.values.Github} type="text"/>
        </div>
    </form>
    )
}

export default ContactsForm