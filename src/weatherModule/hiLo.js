import React from 'react';
import './weather.css';

const HiLo = ({ high, low }) => {
  return (
    <div className="hi-lo">
      <div className="hi">
        <p>⬆  {high}º</p>
      </div>
      <div className="lo">
        <p>⬇  {low}º</p>
      </div>
    </div>
  );
};

export default HiLo;
