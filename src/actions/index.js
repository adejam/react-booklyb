const actions = {
  removeBookAction: payload => ({ type: 'REMOVE_BOOK', payload }),
  createBookAction: payload => ({ type: 'CREATE_BOOK', payload }),
  changeFilterAction: payload => ({ type: 'CHANGE_FILTER', payload }),
  changeStateAction: payload => ({ type: 'CHANGE_STATE', payload }),
};

export default actions;
