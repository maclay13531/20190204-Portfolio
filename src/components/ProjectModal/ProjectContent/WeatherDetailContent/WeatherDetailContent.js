import React from 'react';

import styles from './WeatherDetailContent.module.css';

const weatherDetailContent = (props) => {
    return (
        <div className={styles.WeatherDetailContent}>
            <div className={styles.Label}> 
                Weather Chart
            </div>
            <div className={styles.Chart}>

            </div>
        </div>
    );
};

export default weatherDetailContent;