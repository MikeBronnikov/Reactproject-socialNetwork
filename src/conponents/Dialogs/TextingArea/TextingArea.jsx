import React from 'react';
import InterlocutorMessage from './InterlocutorMassage/InterlocutorMassage';
import styles from './TextingArea.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import {updateMessageTextActionCreator} from '../../../redux/dialogsReducer'

const TextingArea = (props) => {
   let messageTextarea = React.createRef();
    function addMessage(){
       props.dispatch({type:'SEND-MESSAGE'})
    }
    function updatemessagetext(){
       let text = messageTextarea.current.value;
     props.dispatch(updateMessageTextActionCreator(text))
    }
    return (
    <BrowserRouter>
        <div className={styles.wrapper}>  
                <Route path='/dialogs/1' component={InterlocutorMessage} />    
                <div className={styles.writtingItems}>
                <textarea onChange={updatemessagetext} ref={messageTextarea} className={styles.textarea} 
                value={props.messageTexting} placeholder='Введите ваше сообщение' spellcheck="false" name="" id="" cols="30" rows="10"></textarea>
                <button onClick={addMessage}>Отправить</button>
                </div>
        </div>
        </BrowserRouter>
    )
}
export default TextingArea;