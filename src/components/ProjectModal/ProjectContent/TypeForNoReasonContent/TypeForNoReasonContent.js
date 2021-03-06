import React from 'react';

import TypeForNoReasonChart from './TypeForNoReasonChart/TypeForNoReasonChart';
import styles from './TypeForNoReasonContent.module.css';

const typeForNoReasonContent = (props) => {
    return (
        <div className={styles.TypeForNoReasonContent}>
            <div className={styles.Label}> 
                Type For No Reason Donuts
            </div>
            <div className={styles.Chart}>
                <TypeForNoReasonChart 
                userSentence={props.userSentence} />
            </div>
        </div>
    );
};

export default typeForNoReasonContent;