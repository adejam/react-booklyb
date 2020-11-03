import { combineReducers } from 'redux';
import bookReducer from './book';
import filterReducer from './filter';
import authReducer from './auth';
import stateReducer from './state';

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
  filter: filterReducer,
  userState: stateReducer,
});

export default rootReducer;
