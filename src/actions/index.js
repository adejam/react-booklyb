// const removeBookAction = id => ({ type: 'REMOVE_BOOK', id });
// const createBookAction = id => ({ type: 'CREATE_BOOK', id });
const actions = {
  removeBookAction: id => ({ type: 'REMOVE_BOOK', id }),
  createBookAction: id => ({ type: 'CREATE_BOOK', id }),
};

export default actions;
