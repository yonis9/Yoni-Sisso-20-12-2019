import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { favoritesSelector } from '../redux/favorites/favorites-selectors'
import { getFavoritesWeather } from '../redux/favorites/favorites-actions';

import ToggleUnit from './ToggleUnit'

import FavList from './FavList'
import './Favorites.css'

const Favorites = ( { favorites, getFavoritesWeather }) => {
    
    useEffect(() => {
        getFavoritesWeather(favorites)
    }, [])

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
                <h1>You have no favorites places yet</h1>
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    favorites: favoritesSelector(state),
    isCelsius: state.app.isCelsius
})

const mapDispatchToProps = dispatch => ({
    getFavoritesWeather: (favoritesList) => dispatch(getFavoritesWeather(favoritesList))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);