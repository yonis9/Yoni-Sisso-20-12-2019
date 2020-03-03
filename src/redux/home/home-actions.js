import homeActionTypes from './home-types';

export const setLocation = (location) => ({
    type: homeActionTypes.CHANGE_LOCATION,
    payload: location
})

export const getSearchOutput = (text) => (dispatch) => {
   
    dispatch({type: homeActionTypes.REQUEST_SEARCH_START});
    fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${text}&language=en-us`)
    .then(response => response.json())
    .then(data => dispatch({type: homeActionTypes.REQUEST_SEARCH_SUCCESS, payload: data}))
    .catch(error => dispatch({type: homeActionTypes.REQUEST_SEARCH_FAILED, payload: error}))
}


export const getForcast = (cityKey, isCelsius) => dispatch => {
    dispatch({ type: homeActionTypes.REQUEST_FORCAST_START });
    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}&details=false&metric=${isCelsius}`)
    .then(response => response.json())
    .then(fiveDayForcast => {
      fetch(`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(currentConditions => dispatch({ 
          type: homeActionTypes.REQUEST_FORCAST_SUCCESS,
           payload:{ fiveDayForcast, currentConditions }
        })
        )
    })
    .catch(error => dispatch({type: homeActionTypes.REQUEST_FORCAST_FAILED, payload: true}))
}