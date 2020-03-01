import { createSelector } from 'reselect';

export const selectApp = state => state.app

export const selectIsCelsius = createSelector(
    selectApp,
    app => app.isCelsius
)

export const selectLightBackground = createSelector(
    selectApp,
    app => app.lightBackground
)

export const selectRoute = createSelector(
    selectApp,
    app => app.route
)