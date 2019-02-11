import React from 'react';

import styles from './ProjectOverview.module.css';

const projectOverview = (props) => {
    return (
        <div className={styles.ProjectOverview}>
            <div className={styles.Label}>
                {props.panelLabel}
            </div>
            <div className={styles.LabelInfo}></div>
        </div>
    );
};

export default projectOverview;