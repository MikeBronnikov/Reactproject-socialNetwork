import React from 'react';
import styles from './TextingArea.module.css';


const TextingArea = (props) => {
   let messageTextarea = React.createRef();
    function addMessage(){
       props.addMessage()
    }
    function updatetext(){
       let text = messageTextarea.current.value
       props.updatemessagetext(text)
    }
    return (
        <div className={styles.wrapper}>   
                <div className={styles.writtingItems}>
                <textarea onChange={updatetext} ref={messageTextarea} className={styles.textarea} 
                value={props.messageTexting} placeholder='Введите ваше сообщение' spellcheck="false" name="" id="" cols="30" rows="10"></textarea>
                <button onClick={addMessage}>Отправить</button>
                </div>
        </div>
    )
}
export default TextingArea;