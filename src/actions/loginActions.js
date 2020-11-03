import Axios from 'axios';
import actions from '.';
import { FETCH_BOOK_SUCCESS } from '../actionTypes/bookActionTypes';
import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_SUCCESS } from '../actionTypes/loginActionTypes';
import alertFunction from '../functions/alertFunction';
import booksArray from '../functions/booksArray';
import token from '../functions/token';

const fetchLoginSuccess = user => ({ type: FETCH_LOGIN_SUCCESS, payload: user });
const fetchLoginFailure = error => ({ type: FETCH_LOGIN_FAILURE, payload: error });
const fetchBookSuccess = book => ({ type: FETCH_BOOK_SUCCESS, payload: book });

export const fetchUser = values => dispatch => {
  Axios.post('login', values)
    .then(res => {
      const user = res.data;
      dispatch(fetchLoginSuccess(user));
      if (user.status === 200) {
        token.clearToken();
        token.setToken(user.token);
        dispatch(actions.changeStateAction(user.username));
      }
      if (user.message) {
        alertFunction(user.message, 'alert_success');
      } else if (user.error) {
        alertFunction(user.error, 'alert_danger');
      }
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchLoginFailure(errorMsg));
    });
};

export const signupUser = values => dispatch => {
  Axios.post('sign-up', values)
    .then(res => {
      const user = res.data;
      dispatch(fetchLoginSuccess(user));
      if (user.status === 200) {
        token.clearToken();
        token.setToken(user.token);
        dispatch(actions.changeStateAction(user.username));
      }
      if (user.message) {
        alertFunction(user.message, 'alert_success');
      }
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchLoginFailure(errorMsg));
      if (errorMsg === 'Request failed with status code 500') {
        alertFunction('Email Already taken', 'alert_danger');
      } else {
        alertFunction('Error in connection', 'alert_danger');
      }
    });
};

export const logoutUser = () => dispatch => {
  const getCurrentToken = token.getToken();
  const config = { headers: { Authorization: `Bearer ${getCurrentToken}` } };
  Axios.get('logout', config)
    .then(res => {
      const user = res;
      dispatch(fetchLoginSuccess(user));
      token.clearToken();
      dispatch(actions.changeStateAction(''));
      dispatch(fetchBookSuccess(booksArray));
      if (user.message) {
        alertFunction(user.message, 'alert-success');
      }
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchLoginFailure(errorMsg));
    });
};
