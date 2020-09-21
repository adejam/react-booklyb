import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector(state => state.books);
  const filterState = useSelector(state => state.filter);
  const booksToDisplay =
    filterState === 'All' ? books : books.filter(book => book.category === filterState);
  const bookList = booksToDisplay.length ? (
    <section className="d_flex d_c section">
      <h2 className="d_none">Books Lists</h2>
      {booksToDisplay.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  ) : (
    <div className="ta_center m_10 bgWhite emptyStoreDiv">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="emptyStore">
        <path
          fill="#0290ff"
          d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM152 416c-26.5 0-48-21-48-47 0-20 28.5-60.4 41.6-77.8 3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32 44.4 0 86.3 19.6 114.7 53.8 13.8 16.4-11.2 36.5-24.5 20.4z"
        />
      </svg>
      <p>Book Store Empty</p>
    </div>
  );
  return <main>{bookList}</main>;
};

export default BooksList;
