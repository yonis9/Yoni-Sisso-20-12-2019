import React from 'react';
import DayCard from '../DayCard/DayCard';
import './DayList.css';

const DayList = ({ fiveDayForcast }) => {
    return (
        <div id='daylist'>
    {        fiveDayForcast.DailyForecasts.map((day,i) => {
            return (
                <DayCard key={i}
                         minTemp={Math.round(day.Temperature.Minimum.Value)}
                         maxTemp={Math.round(day.Temperature.Maximum.Value)}
                         tempUnit={day.Temperature.Maximum.Unit}
                         icon={day.Day.Icon}
                         day={new Date(day.EpochDate*1000).toString().slice(0, 3)}
                         date={new Date(day.EpochDate*1000).toString().slice(4,15)} />
            )
        })
    }
        </div>
    )
}

export default DayList;