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
    { id: uuidv4(), title: 'Oliver Twist', category: 'History' },
    { id: uuidv4(), title: 'Peter Pan', category: 'Kids' },
    { id: uuidv4(), title: 'Superman', category: 'Action' },
  ],
  filter: 'All',
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
