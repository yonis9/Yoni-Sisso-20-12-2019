import React from 'react';
import { connect } from 'react-redux';

import { setLocation } from '../../redux/home/home-actions';
import { changeRoute } from '../../redux/app/app-actions';
import { selectIsCelsius } from '../../redux/app/app-selectors';

import './FavCard.css'

const FavCard = ({ id, name, country, weatherText, icon, temp, isCelsius, setLocation, changeRoute}) => {
    icon.toString().length < 2 ? icon = '0'+icon : icon = icon;
    return (
        <div id='fav-card' onClick={() => { 
            changeRoute('home');
            setLocation({
                Key: id,
                LocalizedName: name,
                Country: { LocalizedName: country}
            })
            }}>
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

const mapStateToProps = state => ({
    isCelsius: selectIsCelsius(state)
})

const mapDispatchToProps = disptach => ({
    setLocation: (locationObj) => disptach(setLocation(locationObj)),
    changeRoute: (route) => disptach(changeRoute(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavCard);