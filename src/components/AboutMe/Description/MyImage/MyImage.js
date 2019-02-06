import React from 'react';

import styles from './MyImage.module.css';

const myImage = (props) => {
    return (
        <img className={styles.MyImage} alt='intro' />    
    );
};

export default myImage;