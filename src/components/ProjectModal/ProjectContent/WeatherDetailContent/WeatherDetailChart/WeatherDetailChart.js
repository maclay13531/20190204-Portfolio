import React, { Component } from 'react';
import axios from 'axios';

import styles from './WeatherDetailChart.module.css';

class WeatherDetailChart extends Component {
    state = {
        weatherData: null,
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
            <div className={styles.WeatherDetailChart}></div>
        );
    }
}

export default WeatherDetailChart;