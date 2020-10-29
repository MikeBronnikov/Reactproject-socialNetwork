import React from 'react';
import styles from './Profile.module.css'
import Posts from './posts/posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
return (
<div className={styles.bodyContent}>
<ProfileInfo />
<div>
<Posts dataposts={props.state.posts} posttext={props.state.posttext} dispatch={props.dispatch}/>
</div>
</div> )}
export default Profile;
