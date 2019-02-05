import React from 'react';

import styles from './TopNav.module.css';

const topNav = (props) => {
    return (
        <nav className={styles.TopNav}>
            <div>About Me</div>
            <div>Projects</div>
            <div>Contact</div>
        </nav>
    );
};

export default topNav;