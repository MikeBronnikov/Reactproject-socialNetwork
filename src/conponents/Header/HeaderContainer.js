import React from 'react'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {getLogout} from '../../redux/authReducer'
import Header from "./Header";


const mapStateToProps = (state)=> ({isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer = props => <Header {...props} />

export default compose(withRouter,
    connect(mapStateToProps, {getLogout}))(HeaderContainer)