import React from 'react';
import { connect } from 'react-redux';

import { toggleFavorite } from '../redux/favorites/favorites-actions'
import { isFavoriteSelector } from '../redux/favorites/favorites-selectors'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ToggleFavorite = ({ toggleFavorite, isFavorite, location }) => (
    <div onClick={() => toggleFavorite(location)}>
        <FontAwesomeIcon 
        icon={faStar} 
        size="2x" 
        className={`${isFavorite ? 'star favorite' : 'star'}`}  
        />
    </div>
)

const mapStateToProps = state => ({
    location: state.home.location,
    isFavorite: isFavoriteSelector(state),
})

const mapDispatchToProps = dispatch => ({
    toggleFavorite: (locationObj) => dispatch(toggleFavorite(locationObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleFavorite);