import React, { Component } from 'react';
import axios from 'axios';

import weatherDetailerImage from '../../images/WeatherProjectImage.jpg';
import typeForNoReason from '../../images/TypeForNoReason.jpeg';
import Aux from '../../hoc/Auxiliary';
import ProjectController from './ProjectController/ProjectController';
import ProjectOverview from './ProjectOverview/ProjectOverview';
import WeatherDetailContent from './ProjectContent/WeatherDetailContent/WeatherDetailContent';
import TypeForNoReasonContent from './ProjectContent/TypeForNoReasonContent/TypeForNoReasonContent';
import styles from './ProjectModal.module.css';
import Swal from 'sweetalert2';

let initialMessageWD = document.createElement('div');
initialMessageWD.style.textAlign = 'left';
initialMessageWD.style.fontSize = '14px';

let initialMessageTFNR = document.createElement('div');
initialMessageTFNR.style.textAlign = 'left';
initialMessageTFNR.style.fontSize = '14px';

const weatherDetailerProjectController = [
    { label: 'City Name or Zip Code:' },
    // { label: 'Zip Code:' }
];

const typeForNoReasonProjectController = [
    { label: 'Insert:' }
];

class ProjectModal extends Component {
    state = {
        cityName: null,
        cityZip: null,
        city: [
            { label: 'City', output: null },
            { label: 'Temp', output: null },
            { label: 'Desc', output: null },
            { label: 'Humidity', output: null }
        ],
        weatherData: null,
        userSentence: null,
        typeForNoReason: [
            { label: 'Letter Count', output: null },
            { label: 'Word Count', output: null },
            { label: 'Space Count', output: null },
            { label: 'Punct Count', output: null }
        ],
        initialMessageDisplayWD: true,
        initialMessageDisplayTFNR: true
    }

    userSubmitHandler = (event, type) => {
        if (event.key === 'Enter' && type === typeForNoReasonProjectController[0].label) {
            this.setState({
                userSentence: event.target.value
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

    resetState = () => {
        this.setState({
            cityName: null,
            cityZip: null,
            city: [
                { label: 'City', output: null },
                { label: 'Temp', output: null },
                { label: 'Desc', output: null },
                { label: 'Humidity', output: null }
            ],
            typeForNoReason: [
                { label: 'Letter Count', output: null },
                { label: 'Word Count', output: null },
                { label: 'Space Count', output: null },
                { label: 'Punct Count', output: null }
            ]
        })
    }

    componentDidUpdate = () => {
        if (this.state.cityName || this.state.cityZip) {
            if (!this.state.cityZip) {
                let cityName = this.state.cityName;
                let url;
                if (cityName.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
                    url = `https://api.openweathermap.org/data/2.5/weather?zip=${cityName}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;    
                } else {
                    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
                }
                axios.get(url)
                    .then(response => {
                        let cityInfo = {
                            ...this.state.city
                        };
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
            // else {
            //     let cityZip = this.state.cityZip;
            //     let url = `https://api.openweathermap.org/data/2.5/weather?zip=${cityZip}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
            //     axios.get(url)
            //         .then(response => {
            //             let cityInfo = {
            //                 ...this.state.city
            //             }
            //             cityInfo[0].output = response.data.name;
            //             cityInfo[1].output = response.data.main.temp;
            //             cityInfo[2].output = response.data.weather[0].main;
            //             cityInfo[3].output = response.data.main.humidity;
            //             this.setState({
            //                 weatherData: response.data,
            //                 cityName: null,
            //                 cityZip: null
            //             })
            //         });
            // }
        }

        if (this.state.userSentence) {
            let letterCount = this.state.userSentence.replace(/[^a-zA-Z]/g, '').length;
            let wordCount = this.state.userSentence.trim().replace(/[^a-zA-Z\s]*$/, "").replace(/\s\s+/g, ' ').trim().split(' ').length;
            let spaceCount = this.state.userSentence.replace(/[a-zA-Z.,#!?$%&;:{}=\-_`~()]/g, '').length;
            let punctCount = this.state.userSentence.replace(/[^.,#!?$%&;:{}=\-_`~()]/g, "").length;
            let sentenceInfo = [
                ...this.state.typeForNoReason
            ];
            sentenceInfo[0].output = letterCount;
            sentenceInfo[1].output = wordCount;
            sentenceInfo[2].output = spaceCount;
            sentenceInfo[3].output = punctCount;
            this.setState({
                userSentence: null,
                typeForNoReason: sentenceInfo
            })
        }

        if (this.props.projectLabel === 'Weather Detailer' && this.state.initialMessageDisplayWD === true) {
            initialMessageWD.innerHTML =
                '<div><strong>Summary</strong></div>' +
                '<div>Integration of weather API call and D3 data chart.</div>' +
                '<div>Displaying the current info as well as daily forcast temps.</div>' +
                '<div><strong>Instruction</strong></div>' +
                '<div>Type a city name or zip code then press Enter!</div>' +
                '<div><strong>Limitation</strong></div>' +
                '<div>Current limit of API calls are 60 times per minute.</div>' +
                '<div>For visibility, bar chart Y domain is set from 0 to 100.</div>';
            Swal.fire({
                title: 'Weather Detailer',
                html: initialMessageWD,
                type: 'info',
                confirmButtonText: "I'm ready!",
                allowOutsideClick: false,
            });
            this.setState({
                initialMessageDisplayWD: false
            })
        }

        if (this.props.projectLabel === 'Type For No Reason' && this.state.initialMessageDisplayTFNR === true) {
            initialMessageTFNR.innerHTML =
                '<div><strong>Summary</strong></div>' +
                '<div>Collaboration of RegExr and D3 data chart.</div>' +
                "<div>Computate users' sentence and send various count info.</div>" +
                '<div><strong>Instruction</strong></div>' +
                '<div>Type any sentence to your desire then press Enter!</div>' +
                '<div><strong>Limitation</strong></div>' +
                '<div>All three charts are visible at min-width of 1200px.</div>' +
                '<div>Two charts are visible from width of 750px to 1200px</div>' +
                '<div>a chart is visible at max-width of 750px.</div>';
            Swal.fire({
                title: 'Type For No Reason',
                html: initialMessageTFNR,
                type: 'info',
                confirmButtonText: "I'm ready!",
                allowOutsideClick: false,
            });
            this.setState({
                initialMessageDisplayTFNR: false
            })
        }
    }

    render() {
        let mainDivClass = [styles.ProjectModal, styles.Open];
        let buttonClass = [styles.ProjectModalButton, styles.ButtonMargin];
        if (!this.props.show) {
            mainDivClass = [styles.ProjectModal, styles.Close];
            buttonClass = [styles.ProjectModalButton];
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
            case ('Type For No Reason'):
                projectToRender = (
                    <Aux>
                        <img src={typeForNoReason} alt='Type For No Reason'></img>
                        <div className={styles.ProjectController}>
                            {typeForNoReasonProjectController.map((ctl, index) => {
                                return (
                                    <ProjectController
                                        controllerLabel={ctl.label}
                                        pressedEnter={this.userSubmitHandler}
                                        key={index} />
                                );
                            })}
                        </div>
                        <div className={styles.ProjectOverview}>
                            {this.state.typeForNoReason.map((panel, index) => {
                                return (
                                    <ProjectOverview
                                        panelLabel={panel.label}
                                        value={panel.output}
                                        key={index} />
                                );
                            })}
                        </div>
                        <div className={styles.ProjectContent}>
                            <TypeForNoReasonContent
                                userSentence={this.state.userSentence} />
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
                    <button className={buttonClass.join(' ')} onClick={() => { this.props.projectClose(); this.resetState() }}>Close</button>
                </div>
            </div>
        );
    }
};

export default ProjectModal;;