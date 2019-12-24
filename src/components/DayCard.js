import React from 'react';
import './DayCard.css'

const DayCard = ({ day, date, minTemp, maxTemp, tempUnit, icon}) => {
    icon.toString().length < 2 ? icon = '0'+icon : icon = icon;
    return (
        <div className='card'>
            <div className='date'>
                <h4>{day}</h4>
                <h4>{date}</h4>
            </div>
            <img alt='icon' src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}/>
            <h4>{maxTemp}°/{minTemp}° {tempUnit}</h4>
        </div>

    )
}

export default DayCard;