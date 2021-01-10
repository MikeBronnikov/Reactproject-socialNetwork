import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import MyFriendscontainer from './MyFrineds/MyFriendscontainer';
const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <nav>
                <NavLink to={`/profile/${props.id}`} className={styles.item} activeClassName={styles.active}>Мой профиль</NavLink>
                <NavLink to='/dialogs' className={styles.item} activeClassName={styles.active}>Сообщения</NavLink>
                <NavLink to='/subscriptions' className={styles.item} activeClassName={styles.active}>Мои подписки</NavLink>
                <NavLink to='/news' className={styles.item} activeClassName={styles.active}>Новости</NavLink>
                <NavLink to='/users' className={styles.item} activeClassName={styles.active}>Пользователи</NavLink>
                <br />
                <div className={styles.item}>Настройки</div>
                <br />
                <br />
                <br />
            <MyFriendscontainer />
            </nav>
        </div>
    )
}
export default Navbar;