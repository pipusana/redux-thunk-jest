import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()
const middleware = [loggerMiddleware, thunk];

const intialState = {
  name: '',
  image: '',
  error: false,
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_PROFILE_SUCCESS':
      return {
        ...state,
        ...action.data,
      }
    case 'FETCH_PROFILE_ERROR':
      return {
        ...state,
        ...action.data,
      }
    default :
      return state
  }
}

const store = createStore(reducer,intialState, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
,document.getElementById('root'));