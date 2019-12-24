import React from 'react';

const ToggleDayNight = ({ onButtonClick }) => {
    return (
      <label className="switch">
        <input type="checkbox" onClick={onButtonClick}/>
        <span className="slider round" ></span>
      </label>
    )
}

export default ToggleDayNight;