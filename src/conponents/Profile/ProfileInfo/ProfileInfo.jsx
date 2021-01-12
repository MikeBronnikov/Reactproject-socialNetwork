import React, {  useState } from 'react';
import styles from './ProfileInfo.module.css';
import Status from './Status/Status';
import Description from './Description/Description';
import Avatar from './Avatar/Avatar';
import DescriptionForm from './Description/DescriptionForm/DescriptionForm';
import FollowUnfollowBtns from '../../../common/followUnfollowBtns/followUnfollowBtns';
const ProfileInfo = (props) => {
    const [discriptionEditMode, setdiscriptionEditMode] = useState(false)
    const isAuthUserOwnIt = props.isAuthUserOwnIt
    return (
        <div>
            <div className={styles.headPic}>
                <img src="https://pbs.twimg.com/profile_banners/1028740017055838208/1534106006/1500x500" alt=""></img>
            </div>
            <div className={styles.infowrapper}>
                <div>
                <Avatar profile={props.profile} uploadAvatar={props.uploadAvatar}/>
                {!isAuthUserOwnIt && 
                <FollowUnfollowBtns followed={props.isUserFollowed} setUnFollow={props.setUnFollow} setFollow={props.setFollow} 
                id={props.userId} followingInProgress={props.followingInProgress} cn={styles.followbtn}/>
                }
                </div>
                <div className={styles.descriptionWrapper}>
                <div className={styles.name}>{props.profile.fullName}</div> 
                <Status  {...props}/>
                {isAuthUserOwnIt
                // block below renders if this is auth user page
                ?<div > 
                {discriptionEditMode
                    ?<button className={styles.editbutton} onClick={()=>{setdiscriptionEditMode(false)}}>Отменить изменения</button>
                    :<button className={styles.editbutton} onClick={()=>{setdiscriptionEditMode(true)}}>Изменить профиль</button>}
                {discriptionEditMode
                    ?<DescriptionForm setdiscriptionEditMode={setdiscriptionEditMode} 
                setProfileInfo={props.setProfileInfo} profile={props.profile}/>
                    : <Description status={props.status} profile={props.profile} />} 
                </div> 
                // block below renders for other else
                :<Description status={props.status} profile={props.profile} />}
               
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;