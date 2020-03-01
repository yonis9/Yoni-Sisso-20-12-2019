import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getForcast } from '../../redux/home/home-actions';
import { selectFavorites } from '../../redux/favorites/favorites-selectors';
import { selectLocation, selectWeather } from '../../redux/home/home-selectors';
import { selectIsCelsius } from '../../redux/app/app-selectors';

import ToggleUnit from '../ToggleUnit/ToggleUnit'
import ToggleFavorite from '../ToggleFavorite/ToggleFavorite';
import DayList from  '../DayList/DayList';

import './CurrentWeather.css';


const CurrentWeather = ({getForcast, weather, location, isCelsius, favorites }) => {
   const { currentConditions, fiveDayForcast } = weather;
    let icon;
    currentConditions.length ? icon =  currentConditions[0].WeatherIcon : icon = null;
    if (icon) {
        icon.toString().length < 2 ? icon = '0'+icon : icon = icon;
    }

    useEffect(() => {
        getForcast(location.Key, isCelsius)
    },[location.Key, isCelsius, getForcast, favorites])
    
    
    return (
   currentConditions.length ?   
     <div id='CurrentWeather-con'>
            <div id='header'>
                    <h3>{location.LocalizedName}, {location.Country.LocalizedName}</h3>
                    <div id='right-box-header'>
                        <ToggleFavorite />
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

const mapStateToProps = (state) => ({
    favorites: selectFavorites(state),
    location: selectLocation(state),
    weather: selectWeather(state),
    isCelsius: selectIsCelsius(state)
})

const mapDispatchToProps = dispatch => ({
    getForcast: (locationObj, isCelsius) => dispatch(getForcast(locationObj, isCelsius))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);