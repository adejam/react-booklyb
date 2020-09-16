import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import App from './components/App';
import rootReducer from './reducers/index';

const initialState = {
  books: [
    { id: uuidv4(), title: 'Oliver Twist', category: 'Fiction' },
    { id: uuidv4(), title: 'Peter Pan', category: 'novel' },
    { id: uuidv4(), title: 'Superman', category: 'Sci-fi' },
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
