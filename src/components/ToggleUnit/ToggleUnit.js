import React from 'react';
import { connect } from 'react-redux'

import { toggleUnit } from '../../redux/app/app-actions';

const ToggleUnit = ({ isCelsius, toggleUnit }) => (
    <h3  className='toggle-unit'onClick={toggleUnit}>
        {isCelsius ? 'C' : 'F'}
    </h3>
);

const mapStateToProps = ({ app }) => ({
    isCelsius: app.isCelsius
})


const mapDispatchToProps = dispatch => ({
    toggleUnit: () => dispatch(toggleUnit())
})


export default connect(mapStateToProps, mapDispatchToProps)(ToggleUnit);