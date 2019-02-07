import React from 'react';

import Card from '../../../ui/Card/Card';
import styles from './Project.module.css';


const projectsToDisplay = [
    { label: 'projectOne' },
    { label: 'projectTwo' }
];

const project = (props) => {
    return (
        <div className={styles.Project}>
            {projectsToDisplay.map(projects => {
                return (
                    <Card projectName={projects.label} key={projects.label} />
                );
            })}
        </div>
    );
}

export default project;