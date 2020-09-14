import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ books }) => {
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

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BooksList.defaultProps = {
  books: [],
};
const mapStateToProps = state => ({
  books: state.bookReducer.books,
});
export default connect(mapStateToProps)(BooksList);
