import React, {  useState } from 'react';
import styles from './ProfileInfo.module.css';

import Status from './Status/Status';
import ModulPageLoading from './ModulePageUpload/ModulPageLoading';
import Contacts from './Contacts/Contacts';
import ContactsForm from './ContactsForm/ContactsForm';
import Description from './Description/Description';
import Avatar from './Avatar/Avatar';
import DescriptionForm from './Description/DescriptionForm/DescriptionForm';
const ProfileInfo = (props) => {
    const [discriptionEditMode, setdiscriptionEditMode] = useState(false)

    return (
        <div>
            <div className={styles.headPic}>
                <img src="https://pbs.twimg.com/profile_banners/1028740017055838208/1534106006/1500x500" alt=""></img>
            </div>
            <div className={styles.infowrapper}>
                <Avatar profile={props.profile}/>
                <div className={styles.descriptionWrapper}>
                <div className={styles.name}>{props.profile.fullName}</div> 
                <Status  {...props}/>
                {discriptionEditMode
                ?<button className={styles.editbutton} onClick={()=>{setdiscriptionEditMode(false)}}>Отменить изменения</button>
                :<button className={styles.editbutton} onClick={()=>{setdiscriptionEditMode(true)}}>Изменить профиль</button>}
                {discriptionEditMode?<DescriptionForm />: <Description status={props.status} profile={props.profile} />} 
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;