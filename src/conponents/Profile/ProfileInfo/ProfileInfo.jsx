import React from 'react';
import styles from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.headPic}>
                <img src="https://pbs.twimg.com/profile_banners/1028740017055838208/1534106006/1500x500" alt=""></img>
            </div>
            <div className={styles.infowrapper}>
                <div className={styles.avatar}><img src="https://look.com.ua/pic/201804/1400x1050/look.com.ua-278323.jpg" alt=""></img>
                </div>
                <div className={styles.descriptionWrapper}>
                    <div className={styles.name}>Spongebob S.</div>
                    <div className={styles.description}>I have a square pants and I love it!</div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;