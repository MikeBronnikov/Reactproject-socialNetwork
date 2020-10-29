import styles from './Message.module.css';
import React from 'react';

const Message = (props) => {
    return (
        <div className={styles.wrapper}>
            <p>{props.text}</p>
        </div>
    )
}
export default Message;