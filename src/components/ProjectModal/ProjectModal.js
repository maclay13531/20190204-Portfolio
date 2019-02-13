import React, { Component } from 'react';

import weatherDetailerImage from '../../images/WeatherProjectImage.jpg';
import binaryTreeMakerImage from '../../images/BinaryTreeMaker.png';
import Aux from '../../hoc/Auxiliary';
import ProjectController from './ProjectController/ProjectController';
import ProjectOverview from './ProjectOverview/ProjectOverview';
import WeatherDetailContent from './ProjectContent/WeatherDetailContent/WeatherDetailContent';
import BinaryTreeMakerContent from './ProjectContent/BinaryTreeMakerContent/BinaryTreeMakerContent';
import styles from './ProjectModal.module.css';

const weatherDetailerProjectController = [
    { label: 'City Name:' },
    { label: 'Zip Code:' }
];

const binaryTreeMakerProjectController = [
    { label: 'Insert:' },
    { label: 'Remove:' }
];

class ProjectModal extends Component {
    state = {
        cityName: 'N/A',
        cityZip: 'N/A',
        city: [
            { label: 'City', output: 'N/A' },
            { label: 'Temp', output: 'N/A' },
            { label: 'Description', output: 'N/A' },
            { label: 'Humidity', output: 'N/A' }
        ],
        treeNodeInsert: 'N/A',
        treeNodeDelete: 'N/A',
        tree: [
            { label: 'Root', output: 'N/A' },
            { label: 'Total Count', output: 'N/A' },
            { label: 'Highest Number', output: 'N/A' },
            { label: 'Lowest Number', output: 'N/A' }
        ]
    }

    userSubmitHandler = (event, type) => {
        if (event.key === 'Enter' && type === binaryTreeMakerProjectController[0].label) {
            this.setState({
                treeNodeInsert: event.target.value
            });
        } else if (event.key === 'Enter' && type === binaryTreeMakerProjectController[1].label) {
            this.setState({
                treeNodeDelete: event.target.value
            });
        } else if (event.key === 'Enter' && type === weatherDetailerProjectController[0].label) {
            this.setState({
                cityName: event.target.value
            });
        } else if (event.key === 'Enter' && type === weatherDetailerProjectController[1].label) {
            this.setState({
                cityZip: event.target.value
            });
        }
    }

    render() {
        console.log(this.state)
        let mainDivClass = [styles.ProjectModal, styles.Open];
        if (!this.props.show) {
            mainDivClass = [styles.ProjectModal, styles.Close];
        }

        let projectToRender = null;
        switch (this.props.projectLabel) {
            case ('Weather Detailer'):
                projectToRender = (
                    <Aux>
                        <div>
                            <img src={weatherDetailerImage} alt='Weather Detailer'></img>
                        </div>
                        <div className={styles.ProjectController}>
                            {weatherDetailerProjectController.map((ctl, index) => {
                                return (
                                    <ProjectController
                                    controllerLabel={ctl.label}
                                    pressedEnter={this.userSubmitHandler}
                                    key={index} />
                                );
                            })}
                        </div>
                        <div className={styles.ProjectOverview}>
                            {this.state.city.map((panel, index) => {
                                return (
                                    <ProjectOverview 
                                    panelLabel={panel.label}
                                    value={panel.output} 
                                    key={index} />
                                );
                            })}
                        </div>
                        <div className={styles.ProjectContent}>
                            <WeatherDetailContent />
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
                                    <ProjectController
                                        controllerLabel={ctl.label}
                                        pressedEnter={this.userSubmitHandler}
                                        key={index} />
                                );
                            })}
                        </div>
                        <div className={styles.ProjectOverview}>
                            {this.state.tree.map((panel, index) => {
                                return (
                                    <ProjectOverview 
                                    panelLabel={panel.label}
                                    value={panel.output}
                                    key={index} />
                                );
                            })}
                        </div>
                        <div className={styles.ProjectContent}>
                            <BinaryTreeMakerContent />
                        </div>
                    </Aux>
                );
                break;
            default:
                break;
        }

        return(
            <div className = { mainDivClass.join(' ') } >
                <div className={styles.SideMargin}>
                    {projectToRender}
                    <button onClick={this.props.projectClose}>Close</button>
                </div>
            </div>
        );
    }
};

export default ProjectModal;;