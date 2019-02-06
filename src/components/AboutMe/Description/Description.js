import React from 'react';

import styles from './Description.module.css';
import MyImage from './MyImage/MyImage';

const description = (props) => {
    return (
        <div className={styles.Description}>
            <MyImage />
            <div>description</div>
        </div>
    );
};

export default description;