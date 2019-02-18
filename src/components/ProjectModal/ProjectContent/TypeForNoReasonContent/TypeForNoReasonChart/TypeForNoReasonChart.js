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
            { key: 'He', value: 5, color: '#4682b4' },
            { key: 'She', value: 5, color: '#73C3FB' },
            { key: 'They', value: 5, color: '#89CFF0' },
            { key: 'I', value: 5, color: '#008ECC' },
            { key: 'You', value: 5, color: '#0080FF' },
            { key: 'It', value: 5, color: '#6593F5' }
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
                    userDataArrayTwo = [
                        { key: 'No Vowel', value: 5, color: '#4682b4' },
                    ];
                }
                let userDataArrayThree = [];
                let userDataArrayThreeHe = { key: 'He', value: 0, color: '#4682b4' };
                let userDataArrayThreeShe = { key: 'She', value: 0, color: '#73C3FB' };
                let userDataArrayThreeThey = { key: 'They', value: 0, color: '#89CFF0' };
                let userDataArrayThreeI = { key: 'I', value: 0, color: '#008ECC' };
                let userDataArrayThreeYou = { key: 'You', value: 0, color: '#0080FF' };
                let userDataArrayThreeIt = { key: 'It', value: 0, color: '#0080FF' };
                let parsedSentence = ' ' + (this.props.userSentence.trim().replace(/[^a-zA-Z\s]*$/, "").toLowerCase()) + ' ';
                console.log(this.props.userSentence);
                console.log(parsedSentence);
                console.log(parsedSentence.length);
                for (let i = 0; i < parsedSentence.length; i++) {
                    if (parsedSentence[i] === ' ' && parsedSentence[i + 1] === 'h' && parsedSentence[i + 2] === 'e' && parsedSentence[i + 3] === ' ') {
                        userDataArrayThreeHe.value++;
                    } else if (parsedSentence[i] === ' ' && parsedSentence[i + 1] === 's' && parsedSentence[i + 2] === 'h' && parsedSentence[i + 3] === 'e' && parsedSentence[i + 4] === ' ') {
                        userDataArrayThreeShe.value++;
                    } else if (parsedSentence[i] === ' ' && parsedSentence[i + 1] === 't' && parsedSentence[i + 2] === 'h' && parsedSentence[i + 3] === 'e' && parsedSentence[i + 4] === 'y' && parsedSentence[i + 5] === ' ') {
                        userDataArrayThreeThey.value++;
                    } else if (parsedSentence[i] === ' ' && parsedSentence[i + 1] === 'i' && parsedSentence[i + 2] === ' ') {
                        userDataArrayThreeI.value++;
                    } else if (parsedSentence[i] === ' ' && parsedSentence[i + 1] === 'y' && parsedSentence[i + 2] === 'o' && parsedSentence[i + 3] === 'u' && parsedSentence[i + 4] === ' ') {
                        userDataArrayThreeYou.value++;
                    } else if (parsedSentence[i] === ' ' && parsedSentence[i + 1] === 'i' && parsedSentence[i + 2] === 't' && parsedSentence[i + 3] === ' ') {
                        userDataArrayThreeIt.value++;
                    }
                }
                console.log(userDataArrayThreeShe);
                if (userDataArrayThreeHe.value !== 0) {
                    userDataArrayThree.push(userDataArrayThreeHe);
                }
                if (userDataArrayThreeShe.value !== 0) {
                    userDataArrayThree.push(userDataArrayThreeShe);
                }
                if (userDataArrayThreeThey.value !== 0) {
                    userDataArrayThree.push(userDataArrayThreeThey);
                }
                if (userDataArrayThreeI.value !== 0) {
                    userDataArrayThree.push(userDataArrayThreeI);
                }
                if (userDataArrayThreeYou.value !== 0) {
                    userDataArrayThree.push(userDataArrayThreeYou);
                }
                if (userDataArrayThreeIt.value !== 0) {
                    userDataArrayThree.push(userDataArrayThreeIt);
                }
                if (userDataArrayThree.length === 0) {
                    userDataArrayThree = [
                        { key: 'No Pronoun', value: 5, color: '#4682b4' },
                    ];
                }
                this.setState({
                    userSentence: this.props.userSentence,
                    userDataForPieChartOne: userDataArrayOne,
                    userDataForPieChartTwo: userDataArrayTwo,
                    userDataForPieChartThree: userDataArrayThree
                })
            }
        }
    }

    render() {
        return (
            <div className={styles.TypeForNoReason}>
                <div className={styles.ChartOne}>
                    <p>Percentage - Vowel vs Rest</p>
                    <PieChart
                        size={this.state.chartSize}
                        innerHoleSize={150}
                        padding={this.state.chartPadding}
                        labels
                        data={this.state.userDataForPieChartOne}
                    />
                </div>
                <div className={styles.ChartTwo}>
                    <p>Percentage - Total Vowel vs Each Vowel</p>
                    <PieChart
                        size={this.state.chartSize}
                        innerHoleSize={150}
                        padding={this.state.chartPadding}
                        labels
                        data={this.state.userDataForPieChartTwo}
                    />
                </div>
                <div className={styles.ChartThree}>
                <p>Percentage - Total Pronoun vs Each Pronoun</p>
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