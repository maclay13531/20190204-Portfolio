import React from 'react';

import styles from './TopNav.module.css';

const topNav = (props) => {
    return (
        <nav className={styles.TopNav}>
            <div onClick={props.aboutMeView}>About Me</div>
            <div onClick={props.projectView}>Projects</div>
            <div>Contact</div>
        </nav>
    );
};

export default topNav;