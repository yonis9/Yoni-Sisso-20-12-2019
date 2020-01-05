import { CHANGE_ROUTE,
     CHANGE_LOCATION, 
     CHANGE_UNIT,
    REQUEST_SEARCH_FAILED,
    REQUEST_SEARCH_SUCCESS,
    REQUEST_SEARCH_PENDING,
    REQUEST_FORCAST_FAILED, 
    REQUEST_FORCAST_PENDING,
    REQUEST_FORCAST_SUCCESS,
    TOGGLE_FAVORITE,
    REQUEST_FAVORITE_DATA_PENDING,
    REQUEST_FAVORITE_DATA_SUCCESS,
    REQUEST_FAVORITE_DATA_FAILED,
    REQUEST_FAVORITE_DATA_EMPTY,
    TOGGLE_DAY_NIGHT} from './constans.js';



export const setRoute = (route) => ({
    type: CHANGE_ROUTE,
    payload: route
})

export const setLocation = (location) => ({
    type: CHANGE_LOCATION,
    payload: location
})

export const toggleUnit = (unit) => ({
    type: CHANGE_UNIT,
    payload: unit
})

export const toggleDayNight = (bool) => ({
    type: TOGGLE_DAY_NIGHT,
    payload: bool
})

export const requestSearchOutput = (text) => (dispatch) => {
   
        dispatch({type: REQUEST_SEARCH_PENDING});
        fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${text}&language=en-us`)
        .then(response => response.json())
        .then(data => dispatch({type: REQUEST_SEARCH_SUCCESS, payload: data}))
        .catch(error => dispatch({type: REQUEST_SEARCH_FAILED, payload: error}))
      
}

export const requestForcast = (cityKey, isCelsius) => dispatch => {
    dispatch({type: REQUEST_FORCAST_PENDING});
    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}&details=false&metric=${isCelsius}`)
    .then(response => response.json())
    .then(fiveDayForcast => {
      fetch(`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(currentConditions => dispatch({type: REQUEST_FORCAST_SUCCESS, payload: {fiveDayForcast, currentConditions}}))
    })
    .catch(error => dispatch({type: REQUEST_FORCAST_FAILED, payload: error}))
}

export const toggleFavorite = (bool) => ({
    type: TOGGLE_FAVORITE,
    payload: bool
})


export const getFavoritesData = (favorites) => dispatch => {
     if (favorites) {
      if (!favorites.length) {
        dispatch({type: REQUEST_FAVORITE_DATA_EMPTY, payload: []})
      } else {
        dispatch({type: REQUEST_FAVORITE_DATA_PENDING})
        let arr = []
        for (let i=0; i< favorites.length; i++) {
          fetch(`https://dataservice.accuweather.com/currentconditions/v1/${favorites[i].Key}?apikey=${process.env.REACT_APP_API_KEY}`)
          .then(response => response.json())
          .then(data => {
            arr.push({id: favorites[i].Key,
                      name: favorites[i].LocalizedName,
                    country: favorites[i].Country.LocalizedName,
                    weatherText: data[0].WeatherText,
                    icon: data[0].WeatherIcon,
                    temp: data[0].Temperature
                  })
                  if (i===favorites.length-1) {
                    dispatch({type: REQUEST_FAVORITE_DATA_SUCCESS, payload: arr})
                  }
          })
          .catch(error => dispatch({type: REQUEST_FAVORITE_DATA_FAILED, payload: error}))
        }
        
      }

    }
}
