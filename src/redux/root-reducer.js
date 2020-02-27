import { combineReducers } from 'redux';

import homeReducer from './home/home-reducer';
import appReducer from './app/app-reducer'
import favoritesReducer from './favorites/favorites-reducer'


const rootReducer = combineReducers({
    app: appReducer,
    home: homeReducer,
    favorites: favoritesReducer
})

export default rootReducer;