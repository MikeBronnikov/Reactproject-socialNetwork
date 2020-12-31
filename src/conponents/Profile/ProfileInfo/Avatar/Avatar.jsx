import React, { useState } from 'react'
import userPhoto from '../../../../assets/images/user.png'
import ModulPageLoading from '../ModulePageUpload/ModulPageLoading';
import styles from './Avatar.module.css';

const Avatar = (props)=>{
    const [moduleWindow, setmoduleWindow] = useState(false)
    const onAvatarClick = ()=>{
            setmoduleWindow(true)
        }
    const onInputChange = (e)=>{
            if (e.target.files.length)
            props.uploadAvatar(e.target.files[0])
            setmoduleWindow(false)
        }
return(
    <div className={styles.avawrap}>
        { moduleWindow? <ModulPageLoading onInputChange={onInputChange} setmoduleWindow={setmoduleWindow}/>:''}
                <div className={styles.avatar}><img title='Нажмите, чтобы изменить' onClick={()=>{onAvatarClick()}} 
                src={props.profile.photos.large? props.profile.photos.large : userPhoto} alt=""></img> </div>
    </div>
)
}

export default Avatar