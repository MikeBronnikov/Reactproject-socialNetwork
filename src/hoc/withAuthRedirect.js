import React from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component)=>{
    const RedirectedComponent=(props)=>{
        if (!props.isAuth) return <Redirect to='/login' />
        return <Component {...props}/>
    }
    let connectedRedirectedComponent= connect(mapStateToPropsForRedirect)(RedirectedComponent)
    return connectedRedirectedComponent
}