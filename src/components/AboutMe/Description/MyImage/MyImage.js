import React from 'react';

import styles from './MyImage.module.css';
import myProfile from '../../../../images/MyProfile.jpg';

const myImage = (props) => {
    return (
        <div className={styles.MyImage}>
            <img src={myProfile} alt='intro' />            
        </div>
    );
};

export default myImage;