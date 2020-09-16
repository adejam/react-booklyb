import React from 'react';
import BooksList from './BooksList';
import BooksForm from '../containers/BooksForm';
import CategoryFilter from '../containers/CategoryFilter';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
      <CategoryFilter />
    </div>
  );
}

export default App;
