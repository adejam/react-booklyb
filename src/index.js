import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import Axios from 'axios';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers/index';

Axios.defaults.baseURL = 'http://localhost/booklyb-API/public/api/';

const initialState = {
  books: {
    books: [],
    bookError: '',
  },
  filter: 'All',
  userState: '',
  auth: {
    user: [],
    error: '',
  },
};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
