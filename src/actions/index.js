const actions = {
<<<<<<< HEAD
  removeBookAction: payload => ({ type: 'REMOVE_BOOK', payload }),
  createBookAction: payload => ({ type: 'CREATE_BOOK', payload }),
=======
  removeBookAction: id => ({ type: 'REMOVE_BOOK', id }),
  createBookAction: book => ({ type: 'CREATE_BOOK', book }),
>>>>>>> 4a9d821... feat: Add functionality to Add Book to store
};

export default actions;
