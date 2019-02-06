import React from 'react';

import styles from './Description.module.css';
import MyImage from './MyImage/MyImage';
import MyDescription from './MyDescription/MyDescription';

const description = (props) => {
    return (
        <div className={styles.Description}>
            <MyImage />
            <MyDescription />
        </div>
    );
};

export default description;