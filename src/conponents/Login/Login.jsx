import { Formik } from "formik";
import React from "react";
import styles from "./styles.module.css";
import Preloader from "../../common/Preloader";
import { Redirect } from "react-router-dom";
import * as yup from 'yup'

const Login = (props) => {

  if (props.isFetching) {
    return <Preloader />;
  }
  if (props.isAuth) {
    return <Redirect to={`profile/${props.id}`} />;
  }

  const validationSchema = yup.object().shape({
      email: yup.string().required('Поле обязательно').email('Неккоректный email'),
      password: yup.string().required('Поле обязательно')
  })
  return (
    <div className={styles.wrapper}>
      <span className={styles.head}>АВТОРИЗАЦИЯ</span>
      <br />
      <br />
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={(values) => {
          props.getLogin(values.email, values.password, values.rememberMe, values.captcha
          );
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
            <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Ваша почта</label>
            <br />
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="text"
              name="email"
              id="email"
            />{" "}
            <br />
            {errors.email && touched.email && <p className={styles.error}>{errors.email}</p>}
            <br />
            
            <label htmlFor="password">Ваш пароль</label>
            <br />
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type="password"
              name="password"
              id="password"
            />
            <br />
            {errors.password && touched.password && <p className={styles.error}>{errors.password}</p>}
            <br />
           
            <input type="checkbox" id='check' name='rememberMe' value={values.rememberMe}/>
            <label for="check">Запомнить меня</label>
            <br />
            {props.captchaURL && (
              <div>
                <img
                  src={props.captchaURL}
                  className={styles.captcha}
                  alt="kaptcha"
                ></img>
                <input
                  onChange={handleChange}
                  type="text"
                  onBlur={handleBlur}
                  name="captcha"
                  value={values.captcha}
                />
              </div>
            )}
            {props.errorsDuringLogin && <p className={styles.error}>{props.errorsDuringLogin}</p>}
            <button onSubmit={handleSubmit} type='submit' 
            disabled={!isValid || !dirty} className={styles.btn}>
              Войти
            </button>
          </div>
          </form>)}
      </Formik>
    </div>
  );
};
// const mapStateToProps = (state) => ({
//     isAuth: state.auth.isAuth
// })

export default Login;
