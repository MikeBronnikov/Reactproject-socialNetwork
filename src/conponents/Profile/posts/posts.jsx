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
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.ontextchange(text);
    }

    return (
        <div className={styles.posts}>
            <p>Мои посты!!!!!!!!!!!!</p>
            <textarea onChange={onPostChange} ref={newPostElement} name="" id="" cols="30" rows="10" value={props.posttext}></textarea>

            <button onClick={props.addpost}>Добавить на стену</button>

            {componentsPostData}
        </div>
    )
}
export default Posts