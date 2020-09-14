const initialState = {
  books: [
    { id: Math.random(), title: 'Oliver Twist', category: 'Fiction' },
    { id: Math.random(), title: 'Peter Pan', category: 'novel' },
    { id: Math.random(), title: 'Superman', category: 'Sci-fi' },
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
