const bookReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== payload);
    case 'CREATE_BOOK':
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default bookReducer;
