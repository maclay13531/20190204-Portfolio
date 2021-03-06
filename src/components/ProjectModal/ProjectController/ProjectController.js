import React from 'react';

import styles from './ProjectController.module.css';

const projectController = (props) => {
    return (
        <div className={styles.ProjectController}>
            {props.controllerLabel}
            <input 
            type='text' 
            onKeyPress={(event) => props.pressedEnter(event, props.controllerLabel)}/>
        </div>
    );
};

export default projectController;