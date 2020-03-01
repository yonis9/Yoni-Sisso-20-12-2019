import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import homeReducer from './home/home-reducer';
import appReducer from './app/app-reducer'
import favoritesReducer from './favorites/favorites-reducer'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorites']
  }
   

const rootReducer = combineReducers({
    app: appReducer,
    home: homeReducer,
    favorites: favoritesReducer
})

export default persistReducer(persistConfig, rootReducer)

