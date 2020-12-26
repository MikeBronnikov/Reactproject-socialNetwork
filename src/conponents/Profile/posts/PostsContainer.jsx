import React from 'react';
import Posts from './posts'
import {addPost} from '../../../redux/ProfileReducer'
import {updatePostTextActionCreator} from '../../../redux/ProfileReducer'
import { connect } from 'react-redux';
// const PostsContainer = (props) => {
//     let state = props.store.getState();
//      let addpost = () => {
//          props.store.dispatch(addPostActionCreator())
//      }
//      let ontextchange = (text) => {
//         let action = updatePostTextActionCreator(text);
//         props.store.dispatch(action);
//      }
    
//     return (
//        <Posts ontextchange={ontextchange} addpost={addpost} 
//        posttext={state.profilePage.posttext} dataposts={state.profilePage.posts}/>
//     )
// }
let mapStateToProps =(state) =>{
    return {
        posttext: state.profilePage.posttext,
        dataposts: state.profilePage.posts,
        autorizedUserId: state.auth.id,
        userId: state.profilePage.profile.userId
    }
};


const PostsContainer = connect(mapStateToProps, {addPost})(Posts)
export default PostsContainer