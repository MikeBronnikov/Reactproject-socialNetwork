import React, {  useState } from 'react';
import styles from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png'
import Status from './Status/Status';
import ModulPageLoading from './ModulPageLoading';
const ProfileInfo = (props) => {
    const [moduleWindow, setmoduleWindow] = useState(false)
const onAvatarClick = ()=>{
        setmoduleWindow(true)
    }
const onInputChange = (e)=>{
        if (e.target.files.length)
        props.uploadAvatar(e.target.files[0])
        setmoduleWindow(false)
    }

    return (
        <div>
            <div className={styles.headPic}>
                <img src="https://pbs.twimg.com/profile_banners/1028740017055838208/1534106006/1500x500" alt=""></img>
            </div>
            <div className={styles.infowrapper}>
            { moduleWindow? <ModulPageLoading onInputChange={onInputChange} setmoduleWindow={setmoduleWindow}/>:''}
                <div className={styles.avatar}><img title='Нажмите, чтобы изменить' onClick={()=>{onAvatarClick()}} src={props.profile.photos.large? props.profile.photos.large : userPhoto} alt=""></img>
                
                </div>
                <div className={styles.descriptionWrapper}>
                    <div className={styles.name}>{props.profile.fullName}</div>
                    <Status  {...props}/>
                    <br/>
                    <div className={styles.description}><span className={styles.job}>{props.profile.lookingForAJob? '[Сейчас ищет работу]': '[Сейчас не ищет работу]'}</span></div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;