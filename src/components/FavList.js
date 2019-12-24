import React from 'react';
import FavCard from './FavCard';
import './FavList.css'

const FavList = ({ favorites, isCelsius, onFavCardClick }) => {
    return (
        <div id='favlist'>
            { favorites.map(city => {
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

export default FavList;