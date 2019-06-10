
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk"
import {Provider} from 'react-redux';
import {showTweets,favList} from "./reducer";
import { combineReducers } from 'redux'

let reducer=combineReducers({
    showTweets,
    favList


})

let store = createStore(reducer, applyMiddleware(thunk));

console.log(store.getState());
console.log(`${process.env.REACT_APP_BASE_URL}tweets/`)
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
)

