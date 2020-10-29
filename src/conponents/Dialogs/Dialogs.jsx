import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import Message from './Message';
import TextingArea from './TextingArea/TextingArea';


const Dialogs = (props) => {
    
    let messagesData = props.dialogsData.messages.map((message)=>
    <Message text={message.text} />)
    let componentsData = props.dialogsData.dialogs.map((dialog)=>
     <DialogItem name={dialog.name} id={dialog.id} avatarSrc={dialog.avatarSrc} />) 

     
  
    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs}>
                <p>Диалоги</p>
                
                {componentsData}
                
            </div>
            <div className={styles.chatwrapper}>
            {messagesData}
                <TextingArea messageTexting={props.dialogsData.messageTexting} dispatch = {props.dispatch}/>
            </div>
        </div>
    )
}
export default Dialogs;