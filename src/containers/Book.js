import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions/index';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;
  const handleClick = () => {
    removeBook(id);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" className="btn btnPrimary" onClick={() => handleClick()}>
          Remove Book
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  removeBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {},
  id: null,
  title: '',
  category: '',
};

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(actions.removeBookAction(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Book);
