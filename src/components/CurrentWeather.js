import React from 'react';
import './CurrentWeather.css';
import DayList from  './DayList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CurrentWeather = ({ currentConditions,fiveDayForcast, location, toggleUnit, isCelsius, onFavoriteClick, isFavorite }) => {
    let style;
    isFavorite ? style = {opacity: 1,} : style = {opacity: 0.4};

let icon;
currentConditions.length ? icon =  currentConditions[0].WeatherIcon : icon = null;
if (icon) {
    icon.toString().length < 2 ? icon = '0'+icon : icon = icon;
}


    return (
   currentConditions.length ?   
     <div id='CurrentWeather-con'>
            <div id='header'>
                    <h3>{location.LocalizedName}, {location.Country.LocalizedName}</h3>
                    <div id='right-box-header'>
                        <div onClick={onFavoriteClick}>
                            <FontAwesomeIcon icon={faStar} size="2x" style={style} className="highlight"  />
                        </div>
                        <h3  className='toggle-unit'onClick={()=>toggleUnit(!isCelsius)}>{isCelsius ? 'C' : 'F'}</h3>
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

        </div> : <h1>loading</h1>
    
    )
}

export default CurrentWeather;