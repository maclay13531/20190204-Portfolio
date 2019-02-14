import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import { BarChart } from 'react-easy-chart';
import styles from './WeatherDetailChart.module.css';

class WeatherDetailChart extends Component {
    state = {
        weatherData: [
            { x: 'A', y: -20, color: '#4682b4' },
            { x: 'B', y: -20, color: '#4682b4' },
            { x: 'C', y: -20, color: '#4682b4' },
            { x: 'D', y: -20, color: '#4682b4' },
            { x: 'E', y: -20, color: '#4682b4' },
            { x: 'F', y: -20, color: '#4682b4' },
            { x: 'G', y: -20, color: '#4682b4' },
            { x: 'H', y: -20, color: '#4682b4' }
        ],
        cityName: null,
        cityZip: null,
        chartWidth: window.innerWidth,
        chartMargin : { top: 30, right: 50, bottom: 30, left: 50 }
    }

    componentDidUpdate = () => {
        if (this.props.cityName || this.props.cityZip) {
            if (this.props.cityName && this.state.cityName !== this.props.cityName) {
                let cityName = this.props.cityName;
                let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=e8e54db34d0507b93196869e892e7ae6`;
                axios.get(url)
                    .then(response => {
                        let cityData = [];
                        response.data.list.map((row, index) => {
                            if ( index < 8) {
                                let newRow = {
                                    x: moment(row.dt_txt).format("hh a"),
                                    y: row.main.temp,
                                    color: '#4682b4'
                                };
                                cityData.push(newRow);
                            }
                            return cityData;
                        });
                        this.setState({
                            weatherData: cityData,
                            cityName: this.props.cityName,
                            cityZip: this.props.cityZip
                        })
                    });
            } else if (this.props.cityZip && this.state.cityZip !== this.props.cityZip) {
                let cityZip = this.props.cityZip;
                let url = `https://api.openweathermap.org/data/2.5/forecast?zip=${cityZip}&units=imperial&appid=e8e54db34d0507b93196869e892e7ae6`;
                axios.get(url)
                    .then(response => {
                        let cityData = [];
                        response.data.list.map((row, index) => {
                            if (index < 8) {
                                let newRow = {
                                    x: moment(row.dt_txt).format("hh a"),
                                    y: row.main.temp,
                                    color: '#4682b4'
                                };
                                cityData.push(newRow);
                            }
                            return cityData;
                        });
                        this.setState({
                            weatherData: cityData,
                            cityName: this.props.cityName,
                            cityZip: this.props.cityZip
                        });
                    });
            }
        }
    }

    updateChartWidth = () => {
        let updateWidth = window.innerWidth;
        if (window.innerWidth < 500) {
            this.setState({
                chartWidth: updateWidth,
            })
        } else if (window.innerWidth < 700) {
            this.setState({
                chartWidth: updateWidth
            })
        } else {
            this.setState({
                chartWidth: (updateWidth / 1.6)
            })
        }
    }

    componentDidMount = () => {
        this.updateChartWidth();
        window.addEventListener('resize', this.updateChartWidth);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateChartWidth);
    }

    render() {
        return (
            <div className={styles.WeatherDetailChart}>
                <BarChart
                    width={this.state.chartWidth}
                    height={240}
                    margin={this.state.chartMargin}
                    data={this.state.weatherData}
                    axes
                    yDomainRange={[-20, 120]}
                    yTickNumber={8}
                    grid
                />
            </div>
        );
    }
}

export default WeatherDetailChart;