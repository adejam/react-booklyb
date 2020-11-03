import {
  ADD_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
  FETCH_BOOK_FAILURE,
  FETCH_BOOK_SUCCESS,
} from '../actionTypes/bookActionTypes';

const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOK_SUCCESS:
      return {
        ...state,
        book: {},
        books: action.payload,
        bookError: '',
      };
    case FETCH_BOOK_FAILURE:
      return {
        book: {},
        books: action.payload.books,
        bookError: action.payload.error,
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        books: state.books.concat(action.payload),
        bookError: '',
      };
    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        books: state.books.filter(book => book.bookId !== action.payload),
        bookError: '',
      };
    default:
      return state;
  }
};

export default bookReducer;
