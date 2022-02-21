import React, { Component } from 'react';
import './quote.css';

export default class Quote extends Component {
  state = {
    quotes: [
      "Life is a maze, you are amazing.",
      "Have a great day!",
      "Choose violence.",
      "Be great my friend"
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
    var left = Math.floor(Math.random() * window.innerWidth - 50) + 'px';
    var top = Math.floor(Math.random() * window.innerHeight - 50) + 'px';
    this.setState({ quote: quote, positionLeft: left, positionTop: top });
  };

  render() {
    const { quote, positionTop, positionLeft } = this.state;

    return (
      <div className="container" style={{positionLeft, positionTop}}>
          <div>{quote}</div>
      </div>
    );
  }
}
