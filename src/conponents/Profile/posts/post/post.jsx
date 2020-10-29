import React from 'react';
import styles from './post.module.css'

const Post = (props) => {

    return (
        <div className={styles.post}>
            <div className={styles.imgAndContent}>
                <img src={props.avatarSrc} alt=""></img>

                <p>{props.text}</p>
            </div>
            <div className={styles.buttons}>
                <button>Like it</button>
                <div className={styles.numOflikes}>
                {props.numOflikes}
                </div>
                <button>Hate it</button>
                <button>Complain it</button>
            </div>

        </div>
    )
}
export default Post