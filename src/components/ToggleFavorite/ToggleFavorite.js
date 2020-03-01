import React from 'react';
import { connect } from 'react-redux';

import { toggleFavorite } from '../../redux/favorites/favorites-actions'
import { selectIsFavorite } from '../../redux/favorites/favorites-selectors';
import { selectLocation } from '../../redux/home/home-selectors'

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
    location: selectLocation(state),
    isFavorite: selectIsFavorite(state),
})

const mapDispatchToProps = dispatch => ({
    toggleFavorite: (locationObj) => dispatch(toggleFavorite(locationObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleFavorite);