import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from '../src/conponents/Navbar/Navbar';
import Profile from '../src/conponents/Profile/Profile';
import Header from '../src/conponents/Header/Header';
import Dialogs from './conponents/Dialogs/Dialogs';
import Music from './conponents/Music/Music';
import { Route } from 'react-router-dom';
import DialogsContainer from './conponents/Dialogs/DialogsContainer';
import Users from './conponents/Users/Users';

function App(props) {

  return (

      <div className="wrapper">
        <Header />
        <Route path='/profile' render={()=><Profile />  }/>
        <Route path='/dialogs'render={()=> <DialogsContainer /> }/>
        <Route path='/users' render={()=><Users />}/>
        <Navbar />
      </div>

  );
}

export default App;
