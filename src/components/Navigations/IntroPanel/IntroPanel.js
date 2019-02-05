import React from 'react';

import intro from '../../../images/Intro.jpg';
import styles from './IntroPanel.module.css';

const introPanel = (props) => {
    return (
        <img className={styles.IntroPanel} src={intro} alt='intro' />
    );
};

export default introPanel;