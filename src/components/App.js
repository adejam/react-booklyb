import React from 'react';
import BooksForm from './BooksForm';
import BooksList from './BooksList';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
