import React from 'react';
import styles from './posts.module.css'
import ReactDOM from 'react-dom';
import Post from './post/post'
import {addPostActionCreator} from '../../../redux/ProfileReducer'
import {updatePostTextActionCreator} from '../../../redux/ProfileReducer'
const Posts = (props) => {
    let componentsPostData = props.dataposts.map((post) => {
        return <Post avatarSrc={post.avatarSrc} text={post.text} numOflikes={post.likesCount} />
    })
    let newPostElement = React.createRef();
    let addpost = () => {
        props.dispatch(addPostActionCreator())
    }

    let ontextchange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updatePostTextActionCreator(text))
    }

    return (
        <div className={styles.posts}>
            <p>Мои посты</p>
            <textarea onChange={ontextchange} ref={newPostElement} name="" id="" cols="30" rows="10" value={props.posttext}></textarea>

            <button onClick={addpost}>Добавить на стену</button>

            {componentsPostData}
        </div>
    )
}
export default Posts