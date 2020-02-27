import favoritesActionTypes from './favorites-types';
import { handleFavorite } from './favorites-utils'

const INITIAL_STATE = {
    favorites: [],
    favoritesWeather: []
}

const favoritesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case favoritesActionTypes.TOGGLE_FAVORITE:
            return { ...state, favorites: handleFavorite(action.payload, state.favorites) }

        default:
            return state;
    }
}

export default favoritesReducer;