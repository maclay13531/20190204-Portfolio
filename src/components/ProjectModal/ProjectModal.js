import React, { Component } from 'react';
import axios from 'axios';

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
        cityName: null,
        cityZip: null,
        city: [
            { label: 'City', output: null },
            { label: 'Temp', output: null },
            { label: 'Description', output: null },
            { label: 'Humidity', output: null }
        ],
        weatherData: null,
        treeNodeInsert: null,
        treeNodeDelete: null,
        tree: [
            { label: 'Root', output: null },
            { label: 'Total Count', output: null },
            { label: 'Highest Number', output: null },
            { label: 'Lowest Number', output: null }
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

    componentDidUpdate = () => {
        if (this.state.cityName || this.state.cityZip) {
            if (!this.state.cityZip) {
                let cityName = this.state.cityName;
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=e8e54db34d0507b93196869e892e7ae6`;
                axios.get(url)
                    .then(response => {
                        let cityInfo = {
                            ...this.state.city
                        }
                        cityInfo[0].output = response.data.name;
                        cityInfo[1].output = response.data.main.temp;
                        cityInfo[2].output = response.data.weather[0].main;
                        cityInfo[3].output = response.data.main.humidity;
                        this.setState({
                            weatherData: response.data,
                            cityName: null,
                            cityZip: null
                        })
                    });
            } else {
                let cityZip = this.state.cityZip;
                let url = `https://api.openweathermap.org/data/2.5/weather?zip=${cityZip}&units=imperial&appid=e8e54db34d0507b93196869e892e7ae6`;
                axios.get(url)
                    .then(response => {
                        let cityInfo = {
                            ...this.state.city
                        }
                        cityInfo[0].output = response.data.name;
                        cityInfo[1].output = response.data.main.temp;
                        cityInfo[2].output = response.data.weather[0].main;
                        cityInfo[3].output = response.data.main.humidity;
                        this.setState({
                            weatherData: response.data,
                            cityName: null,
                            cityZip: null
                        })
                    });
            }
        }
    }

    render() {
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
                            <WeatherDetailContent
                                cityName={this.state.cityName}
                                cityZip={this.state.cityZip} />
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

        return (
            <div className={mainDivClass.join(' ')} >
                <div className={styles.SideMargin}>
                    {projectToRender}
                    <button onClick={this.props.projectClose}>Close</button>
                </div>
            </div>
        );
    }
};

export default ProjectModal;;