import { FETCH_BOOK_FAILURE, FETCH_BOOK_SUCCESS } from '../actionTypes/bookActionTypes';

const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOK_SUCCESS:
      return {
        ...state,
        books: action.payload,
        bookError: '',
      };
    case FETCH_BOOK_FAILURE:
      return {
        ...state,
        books: action.payload.books,
        bookError: action.payload.error,
      };
    default:
      return state;
  }
};

export default bookReducer;
