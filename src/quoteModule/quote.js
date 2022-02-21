import React, { Component } from 'react';
import './quote.css';

export default class Quote extends Component {
  state = {
    quotes: [
      "Life is a maze, you are amazing.",
      "Have a great day!",
      "Choose violence.",
      "Be great my friend.",
      "You are beautiful!",
      "Your best is good enough!",
      "Dont stress the little things",
      "Take a breath",
      "Count your blessings",
      "Do something nice for someone today"
    ],
    quote: "",
    positionLeft: '0px',
    positionTop: '0px',
  };

  async componentDidMount() {
    try {
      setInterval(async () => {this.getQuote()}, 5000);
    } catch(e) {
      console.log(e);
    }
  }

  getQuote = () => {
    var quote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];

    var left = Math.floor(Math.random() * window.innerWidth/2) - 200 + 'px';
    var top = Math.floor(Math.random() * window.innerHeight/2) + 'px';
    this.setState({ quote: quote, positionLeft: left, positionTop: top });
  };

  render() {
    const { quote, positionTop, positionLeft } = this.state;

    return (
      <div className="center">
        <div
          className="quote"
          style={{
            marginLeft: positionLeft,
            marginTop: positionTop
          }}
        >
            <div>{quote}</div>
        </div>
      </div>
    );
  }
}
