import React, { Component } from 'react';
import './time.css';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), meridiem: '', time: ''};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    var dateObject = new Date();
    var time = dateObject.toLocaleTimeString([], {timeStyle: 'short'});

    this.setState({
      date: dateObject,
      meridiem: time.split(" ")[1],
      time: time.split(" ")[0]
    });
  };

  render() {

    return (
      <div className="container">
        <div className="time-box">
          <div className="time">{this.state.time}</div>
          <div className="ampm">{this.state.meridiem}</div>
        </div>
        <div className="date">{this.state.date.toDateString()}</div>
      </div>
    );
  }
}

export default Time;
