import appActionTypes from './app-types';

const INITIAL_STATE = {
    isCelsius: true,
    lightBackground: true
}

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case appActionTypes.TOGGLE_UNIT:
            return { ...state, isCelsius: !state.isCelsius}

        case appActionTypes.TOGGLE_DAY_NIGHT:
            return { ...state, lightBackground: !state.lightBackground }

        default:
            return state;
    }
}

export default appReducer;