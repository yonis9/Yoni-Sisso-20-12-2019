import React from 'react';
import './FavCard.css'

const FavCard = ({ id, name, country, weatherText, icon, temp, isCelsius, onFavCardClick}) => {
    icon.toString().length < 2 ? icon = '0'+icon : icon = icon;
    return (
        <div id='fav-card' onClick={() => onFavCardClick({ 
            Key: id,
            LocalizedName: name,
            Country: { LocalizedName: country}
            })}>
        <div className='card'>
                <h4>{name}, {country}</h4>
                {
                    isCelsius ? 
                    <h4>{Math.round(temp.Metric.Value)}° Celsius</h4> :
                    <h4>{Math.round(temp.Imperial.Value)}° Fahrenheit</h4> 
                }
                
            <img alt='icon' src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}/>
            <h4>{weatherText}</h4>
        </div>            
        </div>
    )
}

export default FavCard;