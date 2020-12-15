import React, { Component } from 'react';
import HiLo from './hiLo.js';
import WeatherIcon from './weatherIcon.js'
import './weather.css';


class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      currentTemp: '-',
      high: '-',
      low: '-',
      units: 'imperial',
      zip: 94608,
      description: '-'
    };
  }

  async componentDidMount() {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip}&units=${this.state.units}&appid=${API_KEY}`);
      const result = await response.json();
      this.setState({
        currentTemp: Math.floor(result.main.temp),
        high: Math.floor(result.main.temp_max),
        low: Math.floor(result.main.temp_min),
        description: result.weather[0].main.toLowerCase(),
        isLoaded: true
      });
    } catch (error) {
       this.setState({
         isLoaded: true,
         error
       });
     }
  }

  render() {
    const {
      error,
      isLoaded,
      currentTemp,
      high,
      low,
      description
    } = this.state;

    if (error) {
      return <div className="weather"> Couldn't load weather: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="weather">Loading...</div>;
    } else {
      return (
        <div className="weather">
          <div className="text">
            <div className="temp">{currentTemp}º</div>
            <HiLo high={high} low={low} className="hi-lo"/>
          </div>
          < WeatherIcon description={description} />
        </div>
      );
    }
  }
}

export default Weather;
