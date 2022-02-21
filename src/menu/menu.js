import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import './menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    const settings =  {
      arrows: false,
      autoplayScroll: 3,
      centerMode: true,
      centerPadding: 10,
      overScan: 3,
      slidesToShow: 3
    };

    const { items } = this.state;

    return (
      <div className="menu">
        <Slider { ...settings }>
          <div className="menu-item">
            <h3>Settings</h3>
          </div>
          <div className="menu-item">
            <h3>Weather</h3>
          </div>
          <div className="menu-item">
            <h3>Calendar</h3>
          </div>
          <div className="menu-item">
            <h3>Camera</h3>
          </div>
          <div className="menu-item">
            <h3>Instagram</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Menu;
