import React, { Component } from 'react';
import './time.css';

export default class Time extends Component {
  state = {
    date: "",
    time: "",
    meridiem: ""
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var dateObject = new Date();
    var date = dateObject.toDateString();
    var time = dateObject.toLocaleTimeString([], {timeStyle: 'short'});

    this.setState({
      date: date,
      time: time.split(" ")[0],
      meridiem: time.split(" ")[1]
    });
  };

  render() {
    const {
      date,
      time,
      meridiem
    } = this.state;

    return (
      <div className="container">
        <div className="time-box">
          <div className="time">{time}</div>
          <div className="ampm">{meridiem}</div>
        </div>
        <div className="date">{date}</div>
      </div>
    );
  }
}
