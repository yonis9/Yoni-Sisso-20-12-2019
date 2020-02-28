import { createSelector } from 'reselect'
 
export const favoritesSelector = state => state.favorites.favorites;
export const locationSelector = state => state.home.location.Key;
export const favoritesWeatherSelector = state => state.shop.favoritesWeather;
 

export const isFavoriteSelector = createSelector(
    [favoritesSelector, locationSelector],
    (favorites, location) => { 
        console.log(favorites)
        console.log(location)
        
       return Boolean(favorites.find(f => f.Key === location))
    }
)
