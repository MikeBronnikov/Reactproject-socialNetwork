import React from 'react';
import Posts from './posts'
import {addPost} from '../../../redux/ProfileReducer'
import { connect } from 'react-redux';
const PostsContainer = (props)=>{
    return (<Posts {...props}/>)
}


let mapStateToProps =(state) =>{
    return {
        posttext: state.profilePage.posttext,
        dataposts: state.profilePage.posts,
        autorizedUserId: state.auth.id,
        userId: state.profilePage.profile.userId
    }
};


export default connect(mapStateToProps, {addPost})(PostsContainer)
