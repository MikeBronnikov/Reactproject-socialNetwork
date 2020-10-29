import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import MyFrineds from './MyFrineds/MyFriends';
const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <nav>
                <NavLink to='/profile' className={styles.item} activeClassName={styles.active}>Мой профиль</NavLink>
                <NavLink to='/dialogs' className={styles.item} activeClassName={styles.active}>Сообщения</NavLink>
                <NavLink to='/music' className={styles.item} activeClassName={styles.active}>Музыка</NavLink>
                <NavLink to='/news' className={styles.item} activeClassName={styles.active}>Новости</NavLink>
                <br />
                <div className={styles.item}>Настройки</div>
                <br />
                <br />
                <br />

            <MyFrineds friends={props.friends} />
            </nav>
        </div>
    )
}
export default Navbar;