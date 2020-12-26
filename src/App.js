import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import DialogsContainer from './conponents/Dialogs/DialogsContainer';
import Users from './conponents/Users/Users';
import UsersContainer from './conponents/Users/UsersContainer';
import ProfileContainer from './conponents/Profile/ProfileContainer';
import { useEffect } from 'react';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import Preloader from './common/Preloader';
import Login from './conponents/Login/Login';
import NavbarContainer from './conponents/Navbar/NavbarContainer';
import HeaderContainer from './conponents/Header/HeaderContainer';
import LoginContainer from './conponents/Login/LoginContainer';

function App(props) {
useEffect(() => {
  props.initializeApp()
  console.log(props)
}, [props.id])

if (props.isInitialized==false) {
  return <Preloader />
}
  return (

      <div className="wrapper">
        <HeaderContainer />
        <Route path='/profile/:id?' render={()=><ProfileContainer />  }/>
        <Route path='/dialogs'render={()=> <DialogsContainer /> }/>
        <Route path='/users' render={()=><UsersContainer />}/>
        <Route path='/login' render={() => <LoginContainer />}/>
        <NavbarContainer />
      </div>

  );
}
const mapStateToProps =(state)=>{
  return {
    id: state.auth.id,
    isInitialized: state.app.isInitialized,
    isAuth: state.auth.isAuth
  }
}
export default connect(mapStateToProps, {initializeApp})(App);
