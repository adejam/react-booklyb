import Axios from 'axios';
import { FETCH_BOOK_FAILURE, FETCH_BOOK_SUCCESS } from '../actionTypes/bookActionTypes';
import alertFunction from '../functions/alertFunction';
import booksArray from '../functions/booksArray';
import token from '../functions/token';

const fetchBookSuccess = book => ({ type: FETCH_BOOK_SUCCESS, payload: book });
const fetchBookFailure = bookError => ({ type: FETCH_BOOK_FAILURE, payload: bookError });

const fetchBook = () => dispatch => {
  if (token.getToken()) {
    const getCurrentToken = token.getToken();
    const config = { headers: { Authorization: `Bearer ${getCurrentToken}` } };
    Axios.get('books', config)
      .then(res => {
        const book = res.data;
        dispatch(fetchBookSuccess(book));
        if (book.message) {
          alertFunction(book.message, 'alert-success');
        } else if (book.error) {
          alertFunction(book.error, 'alert-danger');
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

export default fetchBook;
