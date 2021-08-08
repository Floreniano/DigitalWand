import React from 'react';

export default ({ className, to, onClick, icon }) => (
  <button type='button' onClick={onClick} className={`slick-btn ${className}`} aria-label={to}>
    <img src={icon} alt='arrow'></img>
  </button>
);
