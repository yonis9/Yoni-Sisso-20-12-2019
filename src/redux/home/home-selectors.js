import { createSelector } from 'reselect'

export const selectHome = state => state.home

export const selectLocation = createSelector(
    selectHome,
    home => home.location
)

export const selectSearchOutputs = createSelector(
    selectHome,
    home => home.searchOutputs
)

export const selectWeather = createSelector(
    selectHome,
    home => home.weather
)