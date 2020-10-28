import Axios from 'axios';
import {
  FETCH_BOOK_FAILURE,
  FETCH_BOOK_SUCCESS,
  ADD_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
} from '../actionTypes/bookActionTypes';
import alertFunction from '../functions/alertFunction';
import booksArray from '../functions/booksArray';
import token from '../functions/token';

const fetchBookSuccess = book => ({ type: FETCH_BOOK_SUCCESS, payload: book });
const addBookSuccess = values => ({ type: ADD_BOOK_SUCCESS, payload: values });
const fetchBookFailure = bookError => ({ type: FETCH_BOOK_FAILURE, payload: bookError });
const deleteBookSuccess = id => ({ type: DELETE_BOOK_SUCCESS, payload: id });

export const fetchBook = () => dispatch => {
  if (token.getToken()) {
    const getCurrentToken = token.getToken();
    const config = { headers: { Authorization: `Bearer ${getCurrentToken}` } };
    Axios.get('books', config)
      .then(res => {
        const book = res.data;
        dispatch(fetchBookSuccess(book));
        if (book.message) {
          alertFunction(book.message, 'alert_success');
        } else if (book.error) {
          alertFunction(book.error, 'alert_danger');
        }
      })
      .catch(error => {
        const errorMsg = error.message;
        const data = {
          books: booksArray,
          error: errorMsg,
        };
        dispatch(fetchBookFailure(data));
        alertFunction('Error in Connection', 'alert_danger');
      });
  } else {
    dispatch(fetchBookSuccess(booksArray));
  }
};

export const addBook = values => dispatch => {
  if (token.getToken()) {
    const getCurrentToken = token.getToken();
    const config = { headers: { Authorization: `Bearer ${getCurrentToken}` } };
    Axios.post('add-book', values, config)
      .then(res => {
        const book = res.data;
        dispatch(addBookSuccess(book.book));
        if (book.message) {
          alertFunction(book.message, 'alert_success');
        } else if (book.error) {
          alertFunction(book.error, 'alert_danger');
        }
      })
      .catch(error => {
        const errorMsg = error.message;
        alertFunction(errorMsg, 'alert_danger');
      });
  } else {
    dispatch(addBookSuccess(values));
    alertFunction('Book Successfully Added', 'alert_success');
  }
};

export const updateBook = values => () => {
  const getCurrentToken = token.getToken();
  const config = { headers: { Authorization: `Bearer ${getCurrentToken}` } };
  Axios.put('update-book', values, config)
    .then(res => {
      const msg = res.data;
      if (msg.message) {
        alertFunction(msg.message, 'alert_success');
      } else if (msg.error) {
        alertFunction(msg.error, 'alert_danger');
      }
    })
    .catch(() => {
      alertFunction('An Error occured', 'alert_danger');
    });
};

export const deleteBook = id => dispatch => {
  if (token.getToken()) {
    const getCurrentToken = token.getToken();
    const config = { headers: { Authorization: `Bearer ${getCurrentToken}` } };
    Axios.delete(`delete-book/${id}`, config)
      .then(res => {
        const book = res.data;
        dispatch(deleteBookSuccess(id));
        if (book.message) {
          alertFunction(book.message, 'alert_success');
        } else if (book.error) {
          alertFunction(book.error, 'alert_danger');
        }
      })
      .catch(error => {
        const errorMsg = error.message;
        alertFunction(errorMsg, 'alert_danger');
      });
  } else {
    dispatch(deleteBookSuccess(id));
    alertFunction('Book Successfully Deleted', 'alert_success');
  }
};
