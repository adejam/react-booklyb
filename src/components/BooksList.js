import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions/index';
import Book from '../containers/Book';
import CategoryFilter from '../containers/CategoryFilter';

const BooksList = ({ changeFilter }) => {
  const books = useSelector(state => state.books);
  const filterState = useSelector(state => state.filter);
  const handleFilterChange = e => {
    changeFilter(e.target.value);
  };

  const filteredBooks = () => {
    let newBooks;
    if (filterState === 'All') {
      newBooks = books;
    } else {
      newBooks = books.filter(book => book.category === filterState);
    }
    return newBooks;
  };
  const booksToDisplay = filteredBooks();
  const bookList = booksToDisplay.length ? (
    <table className="table tableStriped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {booksToDisplay.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  ) : (
    <div className="ta_center m_10">
      <p>You have no books at the moment</p>
    </div>
  );
  return (
    <main>
      <CategoryFilter filterHandler={handleFilterChange} />
      {bookList}
    </main>
  );
};

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(actions.changeFilterAction(category)),
});

BooksList.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(BooksList);
