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
    <section className="d_flex d_c section">
      <h2 className="d_none">Books Lists</h2>
      {booksToDisplay.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </section>
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
