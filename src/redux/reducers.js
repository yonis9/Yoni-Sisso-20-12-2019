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





const initialStateRoute = {
    route: 'home'
}

export const changeRoute = (state=initialStateRoute, action={}) => {
    switch(action.type) {
        case CHANGE_ROUTE:
            return Object.assign({}, state, {route: action.payload});
        default:  return state;
    }
    
}

const initialStateLocation = {
    location: { Version: 1,
        Key: "215854",
        Type: "City",
        Rank: 31,
        LocalizedName: "Tel Aviv",
        Country: {ID: "IL", LocalizedName: "Israel"},
        AdministrativeArea: {ID: "TA",LocalizedName: "Tel Aviv"}
      }
}

export const changeLocation = (state=initialStateLocation, action={}) => {
    switch(action.type) {
        case CHANGE_LOCATION:
            return Object.assign({}, state, {location: action.payload});
        default: return state;
    }
}

const initialStateUnit = {
    isCelsius: true
}

export const changeUnit = (state=initialStateUnit, action={}) => {
    switch(action.type) {
        case CHANGE_UNIT:
            return Object.assign({}, state, {isCelsius: action.payload});
        default: return state;
    }
}


const initialStateSearch = {
    searchOutputs: []
}

export const requestSearchOutputs = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case REQUEST_SEARCH_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_SEARCH_SUCCESS:
            return Object.assign({}, state, {searchOutputs: action.payload, isPending: false});
        case REQUEST_SEARCH_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default: return state;
    }
}

const initialStateForcast = {
    fiveDayForcast: {},
    currentConditions: []
}

export const requestForcast = (state=initialStateForcast, action={}) => {
    switch(action.type) {
        case REQUEST_FORCAST_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_FORCAST_SUCCESS:
            return Object.assign({}, state, {fiveDayForcast: action.payload.fiveDayForcast, currentConditions: action.payload.currentConditions, isPending: false})
        case REQUEST_FORCAST_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default: return state;
    }
}


const initialStateIsFavorite = {
    isFavorite: false
}

export const toggleFavorite = (state=initialStateIsFavorite, action={}) => {
    switch(action.type) {
        case TOGGLE_FAVORITE:
            return Object.assign({}, state, {isFavorite: action.payload});
        default: return state;
    }
}

const initialStateFavoritesList = {
    favorites: []
}

export const requestFavoritesData = (state=initialStateFavoritesList, action={}) => {
    switch (action.type) {
        case REQUEST_FAVORITE_DATA_EMPTY:
            return (Object.assign({}, state,{favorites: action.payload}))
        case REQUEST_FAVORITE_DATA_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_FAVORITE_DATA_SUCCESS:
            return Object.assign({}, state, {favorites: action.payload, isPending: false});
        case REQUEST_FAVORITE_DATA_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default: return state;
    }
} 


const initialStateDayNight = {
    lightBackground: true
}

export const toggleDayNight = (state=initialStateDayNight, action={}) => {
    switch (action.type) {
        case TOGGLE_DAY_NIGHT:
            return Object.assign({}, state, {lightBackground: action.payload});
        default: return state;
    }
}