const filterReducer = (state = 'all', action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_FILTER':
      return state.filter(book => book.id !== payload);
    default:
      return state;
  }
};

export default filterReducer;
