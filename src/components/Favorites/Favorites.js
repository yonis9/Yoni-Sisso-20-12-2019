import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectFavorites } from '../../redux/favorites/favorites-selectors'
import { getFavoritesWeather } from '../../redux/favorites/favorites-actions';
import { selectIsCelsius } from '../../redux/app/app-selectors'

import ToggleUnit from '../ToggleUnit/ToggleUnit'

import FavList from '../FavList/FavList'
import './Favorites.css'

const Favorites = ( { favorites, getFavoritesWeather, isCelsius }) => {
    useEffect(() => {
        getFavoritesWeather(favorites)
    }, [getFavoritesWeather, favorites])

    return (
        <div>
            <div id='fav-con'>
                <h1>Your Favorites Places</h1>
                <ToggleUnit />
            </div>
            {
                favorites.length ? 
                <div id='five-day-con'>
                    <FavList/>
                </div>
                :
                <h1 className='no-favs'>You have no favorites places yet</h1>
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    favorites: selectFavorites(state),
    isCelsius: selectIsCelsius(state)
})

const mapDispatchToProps = dispatch => ({
    getFavoritesWeather: (favoritesList) => dispatch(getFavoritesWeather(favoritesList))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);