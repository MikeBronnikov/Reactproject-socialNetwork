import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './posts/PostsContainer';
import Preloader from '../../common/Preloader';

const Profile = (props) => {
    if (!props.profile) { return (
    <div><Preloader /></div>)    
    }
return (
<div className={styles.bodyContent}>
<ProfileInfo profile={props.profile}/>
<div>
<PostsContainer userId={props.profile.userId} />
</div>
</div> )}
export default Profile;
