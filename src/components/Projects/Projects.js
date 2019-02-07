import React from 'react';

import Project from './Project/Project';
import styles from './Projects.module.css';

const projects = (props) => {
    return (
        <div className={styles.Projects}>
            <Project />
        </div>
    );
}

export default projects;