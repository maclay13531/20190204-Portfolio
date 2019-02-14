import React, { Component } from 'react';
import axios from 'axios';

import { BarChart } from 'react-easy-chart';
import styles from './WeatherDetailChart.module.css';

class WeatherDetailChart extends Component {
    state = {
        weatherData: [
            { x: 'A', y: 20 },
            { x: 'B', y: 30 },
            { x: 'C', y: 40 },
            { x: 'D', y: 20 },
            { x: 'E', y: 40 },
            { x: 'F', y: 25 },
            { x: 'G', y: 5 }
        ],
        cityName: null,
        cityZip: null
    }

    componentDidUpdate = () => {
        if (this.props.cityName || this.props.cityZip) {
            if (this.props.cityName || this.state.cityName !== this.props.cityName) {
                let cityName = this.props.cityName;
                let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=e8e54db34d0507b93196869e892e7ae6`;
                axios.get(url)
                    .then(response => {
                        console.log(response);
                        this.setState({
                            weatherData: response.data,
                            cityName: this.props.cityName,
                            cityZip: this.props.cityZip
                        })
                    });
            } else if (this.props.cityZip || this.state.cityZip !== this.props.cityZip) {
                let cityZip = this.props.cityZip;
                let url = `https://api.openweathermap.org/data/2.5/forecast?zip=${cityZip}&units=imperial&appid=e8e54db34d0507b93196869e892e7ae6`;
                axios.get(url)
                    .then(response => {
                        console.log(response);
                        this.setState({
                            weatherData: response.data,
                            cityName: this.props.cityName,
                            cityZip: this.props.cityZip
                        })
                    });
            }
        }
    }

    render() {
        return (
            <div className={styles.WeatherDetailChart}>
                <BarChart
                    data={this.state.weatherData}
                    axes
                    colorBars
                    width={500}
                    height={250}/>
            </div>
        );
    }
}

export default WeatherDetailChart;