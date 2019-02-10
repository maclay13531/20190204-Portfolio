import React from 'react';

import Project from './Project/Project';
import styles from './Projects.module.css';

const projects = React.forwardRef((props, ref) => {
    return (
        <div className={styles.Projects} ref={ref}>
            <Project projectStart={props.projectStart}/>
        </div>
    );
});

export default projects;