const initialState = {
  books: [
    { id: 1, title: 'Oliver Twist', category: 'Fiction' },
    { id: 2, title: 'Peter Pan', category: 'novel' },
    { id: 3, title: 'Superman', category: 'Sci-fi' },
  ],
};

const bookReducer = (state = initialState) => state;

export default bookReducer;
