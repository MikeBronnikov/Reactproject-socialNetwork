import React from 'react'
import { connect } from "react-redux";
import Login from "./Login";
import {getLogin} from '../../redux/authReducer'


const mapStateToProps = (state)=> ({isAuth: state.auth.isAuth,
isFetching: state.auth.isFetching})

const LoginContainer = props => <Login {...props} />

export default connect(mapStateToProps, {getLogin})(LoginContainer)