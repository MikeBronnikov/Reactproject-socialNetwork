import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
   
    return (
        <div className={styles.header}>
            <img src="http://cdn.onlinewebfonts.com/svg/download_246224.png" alt=""></img>
            <div className={styles.auth}>

            {props.isAuth?<div> <span>{`Вы авторизованы как ${props.login}`}</span>  <button onClick={()=>{props.getLogout()}}>{'Выйти'}</button> </div>
            :<div> <span>{`Вы не авторизованы`}</span>  <button onClick={()=>{props.history.push('/login')}}>{'Войти'}</button> </div>}
           

            </div>
        </div>
    )
}
export default Header;