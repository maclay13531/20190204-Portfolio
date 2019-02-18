import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import { BarChart } from 'react-easy-chart';
import styles from './WeatherDetailChart.module.css';
import Swal from 'sweetalert2';

class WeatherDetailChart extends Component {
    state = {
        weatherData: [
            { x: 'A', y: 0, color: '#4682b4' },
            { x: 'B', y: 0, color: '#4682b4' },
            { x: 'C', y: 0, color: '#4682b4' },
            { x: 'D', y: 0, color: '#4682b4' },
            { x: 'E', y: 0, color: '#4682b4' },
            { x: 'F', y: 0, color: '#4682b4' },
            { x: 'G', y: 0, color: '#4682b4' },
            { x: 'H', y: 0, color: '#4682b4' }
        ],
        cityName: null,
        cityZip: null,
        chartWidth: window.innerWidth,
        chartMargin: { top: 30, right: 50, bottom: 30, left: 50 }
    }

    componentDidUpdate = () => {
        if (this.props.cityName || this.props.cityZip) {
            if (this.props.cityName && this.state.cityName !== this.props.cityName) {
                let cityName = this.props.cityName;
                // let cityZip = this.props.cityZip;
                let url;
                if (cityName.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
                    console.log('changed');
                    url = `https://api.openweathermap.org/data/2.5/forecast?zip=${cityName}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;    
                } else {
                    url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
                }
                
                axios.post(url)
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
                        })
                    })
                    .catch((error) => {
                        if (error.response) {
                            console.log(error.response);
                            let initialMessageCity = document.createElement('div');
                            initialMessageCity.style.textAlign = 'left';
                            initialMessageCity.style.fontSize = '14px';
                            initialMessageCity.innerHTML =
                                '<div><strong>Error Message</strong></div>' +
                                `<div>${error.response.data.message}</div>`;
                            Swal.fire({
                                title: 'Unsuccessful Request',
                                html: initialMessageCity,
                                type: 'warning',
                                confirmButtonText: "Try again",
                            });
                        } else if (error.request) {
                            console.log(error.request);
                        } else {
                            console.log('Error', error.message);
                        }
                    });
            }
            // else if (this.props.cityZip && this.state.cityZip !== this.props.cityZip) {
            //     let cityZip = this.props.cityZip;
            //     let url = `https://api.openweathermap.org/data/2.5/forecast?zip=${cityZip}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
            //     axios.get(url)
            //         .then(response => {
            //             let cityData = [];
            //             response.data.list.map((row, index) => {
            //                 if (index < 8) {
            //                     let newRow = {
            //                         x: moment(row.dt_txt).format("hh a"),
            //                         y: row.main.temp,
            //                         color: '#4682b4'
            //                     };
            //                     cityData.push(newRow);
            //                 }
            //                 return cityData;
            //             });
            //             this.setState({
            //                 weatherData: cityData,
            //                 cityName: this.props.cityName,
            //                 cityZip: this.props.cityZip
            //             });
            //         })
            //         .catch((error) => {
            //             if (error.response) {
            //                 console.log(error.response);
            //             } else if (error.request) {
            //                 console.log(error.request);
            //             } else {
            //                 console.log('Error', error.message);
            //             }
            //         });
            // }
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
                    yDomainRange={[0, 100]}
                    yTickNumber={5}
                    grid
                />
            </div>
        );
    }
}

export default WeatherDetailChart;