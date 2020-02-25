import React from 'react';
import { connect } from 'react-redux';

import { toggleUnit } from '../redux/actions';


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


const mapStateToProps = state => ({
    favorites: state.requestFavoritesData.favorites,
    isCelsius: state.changeUnit.isCelsius

})

const mapDispatchToProps = dispatch => ({
    toggleUnit: (bool) => dispatch(toggleUnit(bool)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);