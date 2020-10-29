import React from 'react';
import styles from './Interlocutor.module.css';

const InterlocutorMessage = () => {
    let MessagesData = [
        { id: 1, message: 'Hello' }, {id: 1, message: 'Hello how are u'}, {id: 3, message: 'call u later'}
    ]
    return (
        <div className={styles.wrapper}>
               {MessagesData[0].message}
            </div>
    )
}
export default InterlocutorMessage;