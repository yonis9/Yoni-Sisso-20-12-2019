import favoritesActionTypes from './favorites-types';
import { handleFavorite } from './favorites-utils'

const INITIAL_STATE = {
    favorites: [],
    favoritesWeather: [],
    isPending: false,
    error: null
}

const favoritesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case favoritesActionTypes.TOGGLE_FAVORITE:
            return { ...state, favorites: handleFavorite(action.payload, state.favorites) }

        case favoritesActionTypes.GET_FAVORITES_WEATHER_START:
            return { ...state, isPending: true }

        case favoritesActionTypes.GET_FAVORITES_WEATHER_SUCCESS:
            return { 
                ...state,
                favoritesWeather: action.payload,
                isPending: false,
                error: null
            }

        case favoritesActionTypes.GET_FAVORITES_WEATHER_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default favoritesReducer;