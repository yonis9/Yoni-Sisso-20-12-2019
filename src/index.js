import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';

import { changeUnit, requestSearchOutputs, changeLocation, requestForcast, toggleFavorite, requestFavoritesData, changeRoute, toggleDayNight } from './redux/reducers.js/index.js'

import * as serviceWorker from './serviceWorker';
require('dotenv').config()


const rootReducer = combineReducers({ changeUnit, requestSearchOutputs, changeLocation, requestForcast, toggleFavorite, requestFavoritesData, changeRoute, toggleDayNight })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
