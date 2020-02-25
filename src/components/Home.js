import React from 'react';
import { connect } from 'react-redux';

import { 
    toggleUnit,
    requestSearchOutput,
    setLocation
}
from '../actions';

import SearchField from './SearchField'
import CurrentWeather from './CurrentWeather';

const Home = ({ onSearchChange, searchOutputs, setLocation, currentConditions,fiveDayForcast,  location, toggleUnit, isCelsius, onFavoriteClick, isFavorite }) => {
    return (
        <div>
            <SearchField onSearchChange={onSearchChange} searchOutputs={searchOutputs} setLocation={setLocation}/>
            <CurrentWeather currentConditions={currentConditions}
                            location={location} 
                            fiveDayForcast={fiveDayForcast}
                            toggleUnit={toggleUnit}
                            isCelsius={isCelsius}
                            onFavoriteClick={onFavoriteClick}
                            isFavorite={isFavorite}/>
        </div>
    )
}


const mapStateToProps = state => ({
    isCelsius: state.changeUnit.isCelsius,
    searchOutputs: state.requestSearchOutputs.searchOutputs,
    location: state.changeLocation.location,
    currentConditions: state.requestForcast.currentConditions,
    fiveDayForcast: state.requestForcast.fiveDayForcast,
    isFavorite: state.toggleFavorite.isFavorite,
})

const mapDispatchToProps = dispatch => ({
    toggleUnit: (bool) => dispatch(toggleUnit(bool)),
    onSearchChange: (e) => dispatch(requestSearchOutput(e.target.value)),
    setLocation: (locationKey) => dispatch(setLocation(locationKey))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home);