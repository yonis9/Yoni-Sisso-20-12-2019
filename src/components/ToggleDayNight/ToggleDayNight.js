import React from 'react';
import { connect } from 'react-redux';

import { toggleDayNight } from '../../redux/app/app-actions';

const ToggleDayNight = ({ toggleDayNight }) => {
    return (
      <label className="switch">
        <input type="checkbox" onClick={toggleDayNight}/>
        <span className="slider round" ></span>
      </label>
    )
}

const mapDispatchToProps = dispatch => ({
  toggleDayNight: () => dispatch(toggleDayNight())
})

export default connect(null, mapDispatchToProps)(ToggleDayNight);