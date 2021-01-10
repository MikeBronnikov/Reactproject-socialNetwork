import React from 'react';
import styles from './DialogItem.module.css';
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id}>
            <div className={styles.item}>
                <ul>
                    <li>
                        <img src={props.avatarSrc} alt='AVATAR'/>
                        {props.name}
                    </li>
                </ul>
            </div>
        </NavLink>
    )
}
export default DialogItem;