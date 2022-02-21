import React from 'react';
import './weather.css';

const WeatherIcon = ({ description }) => {
  return (
    <div className="icon">
      <img src={process.env.PUBLIC_URL + `/icons/${description}.png`} alt="" max-width="100"/>
    </div>
  );
}

export default WeatherIcon;
