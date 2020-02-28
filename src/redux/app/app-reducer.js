import appActionTypes from './app-types';

const INITIAL_STATE = {
    isCelsius: true,
    lightBackground: true,
    route: 'home'
}

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case appActionTypes.TOGGLE_UNIT:
            return { ...state, isCelsius: !state.isCelsius}

        case appActionTypes.TOGGLE_DAY_NIGHT:
            return { ...state, lightBackground: !state.lightBackground }

        case appActionTypes.CHANGE_ROUTE:
            return { ...state, route: action.payload }
            
        default:
            return state;
    }
}

export default appReducer;