import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ books }) => {
  const bookList = books.length ? (
    books.map(book => <Book key={book.id} book={book} />)
  ) : (
    <tr>no</tr>
  );
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>{bookList}</tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array,
};

BooksList.defaultProps = {
  books: [],
};
const mapStateToProps = state => ({
  books: state.bookReducer.books,
});
export default connect(mapStateToProps)(BooksList);
