import React from 'react'
import cn from 'classnames'
import styles from './ErrorWindow.module.css'
const ErrorWindow = (props) =>{

    return(<div className={cn(styles.wrapper)}>
        <span>Что-то пошло не так. Наши программисты уже работают над этим</span>
    </div>)
}

export default ErrorWindow