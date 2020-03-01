import appActionTypes from './app-types'

export const toggleUnit = () => ({
    type: appActionTypes.TOGGLE_UNIT
})

export const toggleDayNight = () => ({
    type: appActionTypes.TOGGLE_DAY_NIGHT
})

export const changeRoute = (route) => ({
    type: appActionTypes.CHANGE_ROUTE,
    payload: route
})