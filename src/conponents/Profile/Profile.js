import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './posts/PostsContainer';

const Profile = (props) => {
return (
<div className={styles.bodyContent}>
<ProfileInfo />
<div>
<PostsContainer />
</div>
</div> )}
export default Profile;
