import React from 'react';

import styles from './AboutMe.module.css';
import Description from './Description/Description';

const aboutMe = (props) => {
    return (
        <div className={styles.AboutMe}>
            <Description />
        </div>
    );
};

export default aboutMe;