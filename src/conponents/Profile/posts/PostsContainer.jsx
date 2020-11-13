import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './Posts'
import {addPostActionCreator} from '../../../redux/ProfileReducer'
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
        dataposts: state.profilePage.posts
    }
};
let mapDispatchToProps = (dispatch) =>{
    return{
        ontextchange: (text)=>{ let action = updatePostTextActionCreator(text);
        dispatch(action)},
        addpost: ()=>{ dispatch(addPostActionCreator())},
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer