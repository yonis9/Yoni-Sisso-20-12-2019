import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'


import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import persistedReducer from './root-reducer';

const middlewares = [
    logger,
    thunkMiddleware
]

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store)