import { createSelector } from 'reselect'

import { selectLocation } from '../home/home-selectors'
 
export const selectFavorites = state => state.favorites.favorites;
 

export const selectIsFavorite = createSelector(
    [selectFavorites, selectLocation],
    (favorites, location) => Boolean(favorites.find(f => f.Key === location.Key))
)

export const selectFavoritesWeather = createSelector(
    selectFavorites,
    favorites => favorites.favoritesWeather
)
