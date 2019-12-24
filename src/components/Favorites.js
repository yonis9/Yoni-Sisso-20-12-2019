import React from 'react';
import FavList from './FavList'
import './Favorites.css'

const Favorites = ( { favorites, toggleUnit, isCelsius, onFavCardClick }) => {
    return (
        <div>
            <div id='fav-con'>
                <h1>Your Favorites Places</h1>
                <h3 className='toggle-unit' onClick={()=>toggleUnit(!isCelsius)}>{isCelsius ? 'C' : 'F'}</h3>
            </div>
            <div id='five-day-con'>
                <FavList favorites={favorites} isCelsius={isCelsius} onFavCardClick={onFavCardClick}/>
            </div>
        </div>
    )
}

export default Favorites;