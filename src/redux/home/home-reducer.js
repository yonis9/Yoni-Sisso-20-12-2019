import homeActionTypes from './home-types'
import DEFAULT_LOCATION from './location-data';

const INITIAL_STATE = {
    location: DEFAULT_LOCATION,
    isFavorite: false,
    searchOutputs: [],
    isPending: false,
    error: null,
    weather: {
        fiveDayForcast: {},
        currentConditions: []
    }
}


const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case homeActionTypes.CHANGE_LOCATION:
            return { ...state, location: action.payload }

        case homeActionTypes.TOGGLE_FAVORITE:
            return { ...state, isFavorite: !state.isFavorite }

        case homeActionTypes.REQUEST_SEARCH_START:
            return { ...state, isPending: true }

        case homeActionTypes.REQUEST_SEARCH_SUCCESS:
            return { 
                ...state,
                searchOutputs: action.payload,
                isPending: false,
                error: null
            }

        case homeActionTypes.REQUEST_SEARCH_FAILED:
            return { 
                ...state,
                isPending: false,
                error: action.payload
            }

        case homeActionTypes.REQUEST_FORCAST_START:
            return { ...state, isPending: true }

        case homeActionTypes.REQUEST_FORCAST_SUCCESS:
            return {
                ...state,
                weather: action.payload ,
                isPending: false,
                error: null

            }
        default:
            return state;
    }
}

export default homeReducer;