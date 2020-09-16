const actions = {
  removeBookAction: payload => ({ type: 'REMOVE_BOOK', payload }),
  createBookAction: payload => ({ type: 'CREATE_BOOK', payload }),
};

export default actions;
