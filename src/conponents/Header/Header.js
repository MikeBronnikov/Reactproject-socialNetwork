import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    console.log(props)
    return (
        <div className={styles.header}>
            <img src="http://cdn.onlinewebfonts.com/svg/download_246224.png" alt=""></img>
            <div className={styles.auth}>
            <span>{props.isAuth? `Вы авторизованы как ${props.login}`:'Вы не авторизованы'}</span> 
            <button onClick={()=>{props.getLogout()}}>{props.isAuth?'Выйти':'Войти'}</button>
            </div>
        </div>
    )
}
export default Header;