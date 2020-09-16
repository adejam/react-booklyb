import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index';

const initialState = {
  books: [
    { id: Math.random(), title: 'Oliver Twist', category: 'Fiction' },
    { id: Math.random(), title: 'Peter Pan', category: 'novel' },
    { id: Math.random(), title: 'Superman', category: 'Sci-fi' },
  ],
};

const store = createStore(rootReducer, initialState);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
