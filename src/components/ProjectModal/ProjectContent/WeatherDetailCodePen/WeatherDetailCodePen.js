import React from 'react';

import styles from './WeatherDetailCodePen.module.css';

const weatherDetailCodePen = (props) => {
    return (
        <div className={styles.WeatherDetailCodePen}>
            <div className={styles.Label}> 
                Code Pen
            </div>
            <div className={styles.Chart}>

            </div>
        </div>
    );
};

export default weatherDetailCodePen;