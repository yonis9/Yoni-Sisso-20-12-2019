import homeActionTypes from './home-types'
import DEFAULT_LOCATION from './location-data';

const INITIAL_STATE = {
    location: DEFAULT_LOCATION,
    searchOutputs: [],
    isPending: false,
    error: false,
    weather: {
        fiveDayForcast: {},
        currentConditions: []
    }
}


const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case homeActionTypes.CHANGE_LOCATION:
            return { ...state, location: action.payload }

        case homeActionTypes.REQUEST_SEARCH_START:
            return { ...state, isPending: true }

        case homeActionTypes.REQUEST_SEARCH_SUCCESS:
            return { 
                ...state,
                searchOutputs: action.payload,
                isPending: false,
                error: false
            }

        case homeActionTypes.REQUEST_SEARCH_FAILED:
            return { 
                ...state,
                isPending: false,
                error: true
            }

        case homeActionTypes.REQUEST_FORCAST_START:
            return { ...state, isPending: true }

        case homeActionTypes.REQUEST_FORCAST_SUCCESS:
            return {
                ...state,
                weather: action.payload ,
                isPending: false,
                error: false

            }
        default:
            return state;
    }
}

export default homeReducer;