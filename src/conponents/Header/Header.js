import React from 'react';
import styles from './Header.module.css';
import photo from '../../assets/images/logo.png'

const Header = (props) => {
   
    return (
        <div className={styles.header}>
            <img src={photo} alt=""></img>
            <div className={styles.auth}>

            {props.isAuth?<div> <span>{`Вы авторизованы как ${props.login}`}</span>  <button onClick={()=>{props.getLogout()}}>{'Выйти'}</button> </div>
            :<div> <span>{`Вы не авторизованы`}</span>  <button onClick={()=>{props.history.push('/login')}}>{'Войти'}</button> </div>}
           

            </div>
        </div>
    )
}
export default Header;