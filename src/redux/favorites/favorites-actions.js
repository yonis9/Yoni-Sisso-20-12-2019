import favoritesActionTypes from './favorites-types';

export const toggleFavorite = (locationObj) => ({
    type: favoritesActionTypes.TOGGLE_FAVORITE,
    payload: locationObj
})

export const getFavoritesWeather = (favoritesList) => dispatch =>  {
    dispatch({ type: favoritesActionTypes.GET_FAVORITES_WEATHER_START })
    if (!favoritesList.length) {
        dispatch({ type: favoritesActionTypes.GET_FAVORITES_WEATHER_SUCCESS, payload: []})
    } else {
        const promises = favoritesList.map(
            f => fetch(`https://dataservice.accuweather.com/currentconditions/v1/${f.Key}?apikey=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json()));
  
             Promise.all(promises)
            .then(results => {
              return results.map((data ,i) => ({
                id: favoritesList[i].Key,
                name: favoritesList[i].LocalizedName,
                country: favoritesList[i].Country.LocalizedName,
                weatherText: data[0].WeatherText,
                icon: data[0].WeatherIcon,
                temp: data[0].Temperature
              })
              )
           })
           .then(results => 
            dispatch({
               type: favoritesActionTypes.GET_FAVORITES_WEATHER_SUCCESS,
                payload: results
            })
            )
           .catch(error => 
            dispatch({ 
                type: favoritesActionTypes.GET_FAVORITES_WEATHER_FAILED,
                 payload: error
                })
            )
    }
}