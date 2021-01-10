import { useFormik } from 'formik'
import React from 'react'
import styles from './styles.module.css'
import Preloader from '../../common/Preloader'
import { Redirect } from 'react-router-dom'
 
const Login =(props)=>{
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false},
        onSubmit: (values)=>{props.getLogin(values.email, values.password, values.rememberMe, values.captcha)},
        validate: values =>{
            let errors ={};
            if (formik.touched.password && !values.password){errors.password='Поле не должно быть пустым'}

            if (!values.email){
                errors.email = 'Поле не должно быть пустым'
            } else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){errors.email='Некорректная почта'}
    
            return errors
        }
      })
      if (props.isFetching){return <Preloader />}
      if (props.isAuth){return <Redirect to={`profile/${props.id}`} />}
    return(
        <div className={styles.wrapper}> 
        <span className={styles.head}>АВТОРИЗАЦИЯ</span>
        <br/>
        <br/>
            <form action="">

                <label for="email" >Ваша почта</label>
                <br/>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} 
                type="text" name='email' id='email' /> <br/>
                <span className={styles.error}>{formik.errors.email}</span>
                <br/>
                <label for="password" >Пароль</label>
                <br/>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} 
                type="password" name='password' id='password' /> 
                <br/>
                <span className={styles.error}>{formik.errors.password}</span>
                <br/>
               
                <input onChange={formik.handleChange} value={formik.values.rememberMe} id='check' name='rememberMe' 
                type="checkbox"/> <label for="check">Запомнить меня</label>
                <br/>
                {props.captchaURL && <div ><img src={props.captchaURL} className={styles.captcha}></img> <input onChange={formik.handleChange} 
                type="text" onBlur={formik.handleBlur} name='captcha' value={formik.values.captcha}/> </div> }
                <button onClick={formik.handleSubmit} className={styles.btn}>Войти</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default Login;