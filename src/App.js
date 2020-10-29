import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from '../src/conponents/Navbar/Navbar';
import Profile from '../src/conponents/Profile/Profile';
import Header from '../src/conponents/Header/Header';
import Dialogs from './conponents/Dialogs/Dialogs';
import Music from './conponents/Music/Music';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (

      <div className="wrapper">
        <Header />
        <Route path='/profile' render={()=><Profile state={props.state.profilePage} dispatch={props.dispatch}/>  }/>
        <Route path='/dialogs'render={()=> <Dialogs dialogsData={props.state.dialogsPage} dispatch={props.dispatch} /> }/>
        <Route path='/music' render={Music}/>
        <Navbar friends={props.state.friends}/>
      </div>

  );
}

export default App;
