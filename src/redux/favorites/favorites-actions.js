import favoritesActionTypes from './favorites-types';

export const toggleFavorite = (locationObj) => ({
    type: favoritesActionTypes.TOGGLE_FAVORITE,
    payload: locationObj
})