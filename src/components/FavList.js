import React from 'react';
import { connect } from 'react-redux';

import FavCard from './FavCard';
import './FavList.css'

const FavList = ({ favoritesWeather, isCelsius, onFavCardClick }) => {
    return (
        <div id='favlist'>
            { favoritesWeather.map(city => {
                return (
                    <FavCard id={city.id}
                             key={city.id}
                             name={city.name}
                             country={city.country}
                             weatherText={city.weatherText}
                             icon={city.icon}
                             temp={city.temp}
                             isCelsius={isCelsius}
                             onFavCardClick={onFavCardClick}/>
                )
            })
            
            }
        </div>
    )
}

const mapStateToProps = ({ favorites }) => ({
    favoritesWeather: favorites.favoritesWeather
})

export default connect(mapStateToProps)(FavList);