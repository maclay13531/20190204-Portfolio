import React, { Component } from 'react';

import { PieChart } from 'react-easy-chart';
import styles from './TypeForNoReasonChart.module.css';

class TypeForNoReason extends Component {
    state = {
        userSentence: null,
        userDataForPieChartOne: [
            { key: 'Vowel', value: 5, color: '#4682b4' },
            { key: 'Rest', value: 5, color: '#73C3FB' }
        ],
        userDataForPieChartTwo: [
            { key: 'A', value: 5, color: '#4682b4' },
            { key: 'E', value: 5, color: '#73C3FB' },
            { key: 'I', value: 5, color: '#89CFF0' },
            { key: 'O', value: 5, color: '#008ECC' },
            { key: 'U', value: 5, color: '#0080FF' }
        ],
        userDataForPieChartThree: [
            { key: 'Test', value: 5, color: '#4682b4' },
        ],
        chartSize: 250,
        chartPadding: 50,
    }

    componentDidUpdate = () => {
        if (this.props.userSentence) {
            if (this.props.userSentence !== this.state.userSentence) {
                let userDataArrayOne = [];
                let userDataArrayOneVowel = { key: 'Vowel', value: 0, color: '#4682b4' };
                let userDataArrayOneRest = { key: 'Rest', value: 0, color: '#73C3FB' };
                for (let i = 0; i < this.props.userSentence.length; i++) {
                    if (this.props.userSentence[i].match(/^[aeiou]$/i)) {
                        userDataArrayOneVowel.value++;
                    } else {
                        userDataArrayOneRest.value++;
                    }
                }
                if (userDataArrayOneVowel.value !== 0) {
                    userDataArrayOne.push(userDataArrayOneVowel);
                }
                if (userDataArrayOneRest.value !== 0) {
                    userDataArrayOne.push(userDataArrayOneRest);
                }
                if (userDataArrayOne.length === 0) {
                    userDataArrayOne = [
                        { key: 'Vowel', value: 5, color: '#4682b4' },
                        { key: 'Rest', value: 5, color: '#73C3FB' }
                    ];
                }
                let userDataArrayTwo = [];
                let userDataArrayTwoA = { key: 'A', value: 0, color: '#4682b4' };
                let userDataArrayTwoE = { key: 'E', value: 0, color: '#73C3FB' };
                let userDataArrayTwoI = { key: 'I', value: 0, color: '#89CFF0' };
                let userDataArrayTwoO = { key: 'O', value: 0, color: '#008ECC' };
                let userDataArrayTwoU = { key: 'U', value: 0, color: '#0080FF' };
                for (let i = 0; i < this.props.userSentence.length; i++) {
                    if (this.props.userSentence[i].match(/^[a]$/i)) {
                        userDataArrayTwoA.value++;
                    } else if (this.props.userSentence[i].match(/^[e]$/i)) {
                        userDataArrayTwoE.value++;
                    } else if (this.props.userSentence[i].match(/^[i]$/i)) {
                        userDataArrayTwoI.value++;
                    } else if (this.props.userSentence[i].match(/^[o]$/i)) {
                        userDataArrayTwoO.value++;
                    } else if (this.props.userSentence[i].match(/^[u]$/i)) {
                        userDataArrayTwoU.value++;
                    }
                }
                if (userDataArrayTwoA.value !== 0) {
                    userDataArrayTwo.push(userDataArrayTwoA);
                }
                if (userDataArrayTwoE.value !== 0) {
                    userDataArrayTwo.push(userDataArrayTwoE);
                }
                if (userDataArrayTwoI.value !== 0) {
                    userDataArrayTwo.push(userDataArrayTwoI);
                }
                if (userDataArrayTwoO.value !== 0) {
                    userDataArrayTwo.push(userDataArrayTwoO);
                }
                if (userDataArrayTwoU.value !== 0) {
                    userDataArrayTwo.push(userDataArrayTwoU);
                }
                if (userDataArrayTwo.length === 0) {
                    userDataArrayOne = [
                        { key: 'A', value: 5, color: '#4682b4' },
                        { key: 'E', value: 5, color: '#73C3FB' },
                        { key: 'I', value: 5, color: '#89CFF0' },
                        { key: 'O', value: 5, color: '#008ECC' },
                        { key: 'U', value: 5, color: '#0080FF' }
                    ];
                }
                this.setState({
                    userSentence: this.props.userSentence,
                    userDataForPieChartOne: userDataArrayOne,
                    userDataForPieChartTwo: userDataArrayTwo
                })
            }
        }
    }

    updateChartPadding = () => {
        if (window.innerWidth < 450) {
            this.setState({
                chartSize: 250
            })
        } else if (window.innerWidth < 750) {
            this.setState({
                chartSize: 220
            })
        } else if (window.innerWidth < 1000) {
            this.setState({
                chartSize: 250
            })
        } else if (window.innerWidth < 1300) {
            this.setState({
                chartSize: 220
            })
        } else {
            this.setState({
                chartSize: 250
            })
        }
    }

    componentDidMount = () => {
        this.updateChartPadding();
        window.addEventListener('resize', this.updateChartPadding);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateChartPadding);
    }

    render() {
        return (
            <div className={styles.TypeForNoReason}>
                <div className={styles.ChartOne}>
                    <PieChart
                        size={this.state.chartSize}
                        innerHoleSize={150}
                        padding={this.state.chartPadding}
                        labels
                        data={this.state.userDataForPieChartOne}
                    />
                </div>
                <div className={styles.ChartTwo}>
                    <PieChart
                        size={this.state.chartSize}
                        innerHoleSize={150}
                        padding={this.state.chartPadding}
                        labels
                        data={this.state.userDataForPieChartTwo}
                    />
                </div>
                <div className={styles.ChartThree}>
                    <PieChart
                        size={this.state.chartSize}
                        innerHoleSize={150}
                        padding={this.state.chartPadding}
                        labels
                        data={this.state.userDataForPieChartThree}
                    />
                </div>
            </div>
        );
    }
}

export default TypeForNoReason;