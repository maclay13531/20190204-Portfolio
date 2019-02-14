import React from 'react';

import WeatherDetailChart from './WeatherDetailChart/WeatherDetailChart';
import styles from './WeatherDetailContent.module.css';

const weatherDetailContent = (props) => {
    return (
        <div className={styles.WeatherDetailContent}>
            <div className={styles.Label}> 
                Daily forecast Chart
            </div>
            <div className={styles.Chart}>
                <WeatherDetailChart 
                cityName={props.cityName}
                cityZip={props.cityZip}/>
            </div>
        </div>
    );
};

export default weatherDetailContent;