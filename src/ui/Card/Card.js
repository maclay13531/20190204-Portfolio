import React from 'react';

import styles from './Card.module.css';

const card = (props) => {
    return (
        <div className={styles.Card}>
            <div className={styles.ImageBox}>

            </div>
            {props.projectName}
        </div>
    );
};

export default card;