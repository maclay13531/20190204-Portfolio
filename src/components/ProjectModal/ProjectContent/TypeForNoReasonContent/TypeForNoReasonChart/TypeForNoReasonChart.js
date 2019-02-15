import React, { Component } from 'react';

import { PieChart } from 'react-easy-chart';
import styles from './TypeForNoReason.module.css';

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
        // userDataForPieChartTwo: [

        // ]
    }

    componentDidUpdate = () => {
        if (this.props.userSentence) {
            if (this.props.userSentence !== this.state.userSentence) {
                let userDataArrayOne = [
                    { key: 'Vowel', value: 0, color: '#4682b4' },
                    { key: 'Rest', value: 0, color: '#73C3FB' }
                ];
                let userDataArrayTwo = [
                    { key: 'A', value: 0, color: '#4682b4' },
                    { key: 'E', value: 0, color: '#73C3FB' },
                    { key: 'I', value: 0, color: '#89CFF0' },
                    { key: 'O', value: 0, color: '#008ECC' },
                    { key: 'U', value: 0, color: '#0080FF' }
                ];
                for (let i = 0; i < this.props.userSentence.length; i++) {
                    if (this.props.userSentence[i].match(/^[aeiou]$/i)) {
                        userDataArrayOne[0].value++;
                    } else {
                        userDataArrayOne[1].value++;
                    }
                }
                for (let i = 0; i < this.props.userSentence.length; i++) {
                    if (this.props.userSentence[i].match(/^[a]$/i)) {
                        userDataArrayTwo[0].value++;
                    } else if (this.props.userSentence[i].match(/^[e]$/i)) {
                        userDataArrayTwo[1].value++;
                    } else if (this.props.userSentence[i].match(/^[i]$/i)) {
                        userDataArrayTwo[2].value++;
                    } else if (this.props.userSentence[i].match(/^[o]$/i)) {
                        userDataArrayTwo[3].value++;
                    } else if (this.props.userSentence[i].match(/^[u]$/i)) {
                        userDataArrayTwo[4].value++;
                    }
                }
                this.setState({
                    userSentence: this.props.userSentence,
                    userDataForPieChartOne: userDataArrayOne,
                    userDataForPieChartTwo: userDataArrayTwo
                })
            }
        }
    }

    render() {
        return (
            <div className={styles.TypeForNoReason}>
                <div className={styles.ChartOne}>
                    <PieChart
                        size={250}
                        innerHoleSize={150}
                        padding={25}
                        labels
                        data={this.state.userDataForPieChartOne}
                    />
                </div>
                <div className={styles.ChartTwo}>
                    <PieChart
                        size={250}
                        innerHoleSize={150}
                        padding={25}
                        labels
                        data={this.state.userDataForPieChartTwo}
                    />
                </div>
                <div className={styles.ChartThree}>
                    <PieChart
                        size={250}
                        innerHoleSize={150}
                        padding={25}
                        labels
                        data={this.state.userDataForPieChartTwo}
                    />
                </div>
            </div>
        );
    }
}

export default TypeForNoReason;