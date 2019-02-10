import React from 'react';

import weatherDetailerImage from '../../images/WeatherProjectImage.jpg'
import binaryTreeMakerImage from '../../images/BinaryTreeMaker.png'
import styles from './ProjectModal.module.css'

const projectModal = (props) => {
    let mainDivClass = [styles.ProjectModal, styles.Open];
    if (!props.show) {
        mainDivClass = [styles.ProjectModal, styles.Close];
    }

    let projectToRender = null;
    switch (props.projectLabel) {
        case ('Weather Detailer'):
            projectToRender = <img src={weatherDetailerImage} alt='Weather Detailer'></img>;
            break;
        case ('Binary Tree Maker'):
            projectToRender = <img src={binaryTreeMakerImage} alt='Binary Tree Maker'></img>;
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

export default projectModal;