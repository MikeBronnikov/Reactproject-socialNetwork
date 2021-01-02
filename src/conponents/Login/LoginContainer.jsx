import React from 'react'
import { connect } from "react-redux";
import Login from "./Login";
import {getLogin} from '../../redux/authReducer'


const mapStateToProps = (state)=> ({
isAuth: state.auth.isAuth,
id: state.auth.id,
isFetching: state.auth.isFetching,
captchaURL: state.auth.captcha
})

const LoginContainer = props => <Login {...props} />

export default connect(mapStateToProps, {getLogin})(LoginContainer)