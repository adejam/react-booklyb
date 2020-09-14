const actions = {
  removeBookAction: id => ({ type: 'REMOVE_BOOK', id }),
  createBookAction: id => ({ type: 'CREATE_BOOK', id }),
};

export default actions;
