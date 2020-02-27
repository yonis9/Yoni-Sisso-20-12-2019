import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getForcast } from '../redux/home/home-actions';
import { toggleFavorite } from '../redux/favorites/favorites-actions'

import ToggleUnit from './ToggleUnit'
import DayList from  './DayList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './CurrentWeather.css';


const CurrentWeather = ({getForcast, weather, location, isCelsius, toggleFavorite, isFavorite }) => {
   
   const { currentConditions, fiveDayForcast } = weather;
    let icon;
    currentConditions.length ? icon =  currentConditions[0].WeatherIcon : icon = null;
    if (icon) {
        icon.toString().length < 2 ? icon = '0'+icon : icon = icon;
    }

    useEffect(() => {
        getForcast(location.Key, isCelsius)
    },[location.Key, isCelsius, getForcast])
    
    
    return (
   currentConditions.length ?   
     <div id='CurrentWeather-con'>
            <div id='header'>
                    <h3>{location.LocalizedName}, {location.Country.LocalizedName}</h3>
                    <div id='right-box-header'>
                        <div onClick={() => toggleFavorite(location)}>
                            <FontAwesomeIcon icon={faStar} size="2x" className={`${isFavorite ? 'star favorite' : 'star'}`}  />
                        </div>
                        <ToggleUnit />
                    </div>
             </div>
            <img alt='icon' src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`} />
            <h1>{currentConditions[0].WeatherText}</h1>
            {isCelsius ?
        <h4>{Math.round(currentConditions[0].Temperature.Metric.Value)}° Celsius</h4>
        : <h4>{Math.round(currentConditions[0].Temperature.Imperial.Value)}° Fahrenheit</h4>
        }
            
            <div id='five-day-con'>
                <h4>{fiveDayForcast.Headline.Text}</h4>
                <DayList fiveDayForcast={fiveDayForcast} />
            </div>

        </div> 
        : <h1>loading</h1>
    
    )
}

const mapStateToProps = ({ home, app }) => ({
    location: home.location,
    weather: home.weather,
    isFavorite: home.isFavorite,
    isCelsius: app.isCelsius})

const mapDispatchToProps = dispatch => ({
    getForcast: (locationObj, isCelsius) => dispatch(getForcast(locationObj, isCelsius)),
    toggleFavorite: (locationObj) => dispatch(toggleFavorite(locationObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);