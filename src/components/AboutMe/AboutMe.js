import React from 'react';

import styles from './AboutMe.module.css';
import Description from './Description/Description';

const aboutMe = React.forwardRef((props, ref) => {
    return (
        <div className={styles.AboutMe} ref={ref}>
            <Description />
        </div>
    );
});

export default aboutMe;