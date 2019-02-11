import React from 'react';

import weatherDetailerImage from '../../images/WeatherProjectImage.jpg';
import binaryTreeMakerImage from '../../images/BinaryTreeMaker.png';
import Aux from '../../hoc/Auxiliary';
import ProjectController from './ProjectController/ProjectController';
import styles from './ProjectModal.module.css';

const weatherDetailerProjectController = [
    { label: 'City Name' },
    { label: 'Zip Code' }
];

const binaryTreeMakerProjectController = [
    { label: 'Insert' },
    { label: 'Remove' }
];

const projectModal = (props) => {
    let mainDivClass = [styles.ProjectModal, styles.Open];
    if (!props.show) {
        mainDivClass = [styles.ProjectModal, styles.Close];
    }

    let projectToRender = null;
    switch (props.projectLabel) {
        case ('Weather Detailer'):
            projectToRender = (
                <Aux>
                    <div>
                        <img src={weatherDetailerImage} alt='Weather Detailer'></img>
                    </div>
                    <div className={styles.ProjectController}>
                        {weatherDetailerProjectController.map((ctl, index) => {
                            return (
                                <ProjectController controllerLabel={ctl.label} key={index} />
                            );
                        })}
                    </div>
                </Aux>
            );
            break;
        case ('Binary Tree Maker'):
            projectToRender = (
                <Aux>
                    <img src={binaryTreeMakerImage} alt='Binary Tree Maker'></img>
                    <div className={styles.ProjectController}>
                        {binaryTreeMakerProjectController.map((ctl, index) => {
                            return (
                                <ProjectController controllerLabel={ctl.label} key={index} />
                            );
                        })}
                    </div>
                </Aux>
            );
            break;
        default:
            break;
    }

    return (
        <div className={mainDivClass.join(' ')}>
            <div className={styles.SideMargin}>
                {projectToRender}
                <button onClick={props.projectClose}>Close</button>
            </div>
        </div>
    );
};

export default projectModal;;