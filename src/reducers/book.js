const initialState = {
  books: [
    { id: 1, title: 'Oliver Twist', category: 'Fiction' },
    { id: 2, title: 'Peter Pan', category: 'novel' },
    { id: 3, title: 'Superman', category: 'Sci-fi' },
  ],
};

const bookReducer = (state = initialState, action) => {
  const { type, id } = action;
  switch (type) {
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter(book => book.id !== id),
      };
    case 'CREATE_BOOK':
    default:
      return state;
  }
};

export default bookReducer;
