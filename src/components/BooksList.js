import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector(state => state.bookReducer.books);
  const bookList = books.length ? (
    <table className="table tableStriped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  ) : (
    <div>
      <p>You have no books at the moment</p>
    </div>
  );
  return <div>{bookList}</div>;
};

export default BooksList;
