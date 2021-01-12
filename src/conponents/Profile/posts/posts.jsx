import React from "react";
import styles from "./posts.module.css";
import Post from "./post/post";
import { useFormik } from "formik";

const Posts = React.memo((props) => {
  const formik = useFormik({
    initialValues: {postText: ''},
    onSubmit: (values)=>{props.addPost(values.postText)},
    validate: values =>{
        let errors ={};
        if (!values.postText){
            errors.postText = 'requered'
        }
        return errors
    }
  });
  let componentsPostData = props.dataposts.map((post) => {
    return (
      <Post
      key={post.id}
        avatarSrc={post.avatarSrc}
        text={post.text}
        numOflikes={post.likesCount}
      />
    );
  });
  return (
    <div className={styles.posts}>
      <p>{props.userId === props.autorizedUserId?'Мои посты':'Посты пользователя'}</p>
      <form action="">
      <textarea disabled={!props.userId}
        onChange={formik.handleChange}
        name="postText"
        id=""
        cols="30"
        rows="10"
        value={formik.values.postText}
      ></textarea>
      {(formik.errors.postText)? <span className={styles.error}>{formik.errors.postText}</span>:''}

      <button onClick={formik.handleSubmit}>Добавить на стену</button>
      </form>

      {componentsPostData}
    </div>
  );
});
export default Posts;
