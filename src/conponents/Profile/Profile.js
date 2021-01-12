import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './posts/PostsContainer';
import Preloader from '../../common/Preloader';
import ErrorWindow from '../../common/errorWindow/ErrorWindow'
import { withErrorBoundary } from '../../hoc/wuthErrorBoundary';

const Profile = (props) => {
    if (!props.profile) { return (
    <div><Preloader /></div>)    
    }
    
return (
<div className={styles.bodyContent}>
<ProfileInfo {...props}/>
<div>
<PostsContainer userId={props.profile.userId} />
</div>
{props.error && <ErrorWindow />}
</div> )}
export default withErrorBoundary(Profile);
