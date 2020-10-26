import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import actions from '../actions/index';
import percent from '../images/percent.png';

const Book = ({ book, removeBook }) => {
  const { bookId, bookTitle, bookCategory } = book;
  const handleClick = () => {
    removeBook(bookId);
  };
  return (
    <article className="list_group_item list_group_item_action bookArticle">
      <div className="name">
        <div className="nameDiv">
          <p>{bookCategory}</p>
          <h3>{bookTitle}</h3>
          <p className=" mb_10 mt_10">
            <b>BY:</b>
            Author
          </p>
          <nav>
            <NavLink to={`/edit-book-comment/${bookId}`} className="azure pr_10 br_block">
              Comment
            </NavLink>
            <a href="#remove" className="azure pr_10 ml_10 br_block" onClick={() => handleClick()}>
              Remove
            </a>
            <NavLink to={`/edit-book/${bookId}`} className="azure pr_10 ml_10">
              Edit
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="percentUpdate">
        <div className="percentDiv p_10">
          <div className="percent br_block">
            <div>
              <img src={percent} alt="percent" className="percentImg" />
            </div>
            <div className="ml_10">
              <p className="percentRate">65%</p>
              <span className="complete">Completed</span>
            </div>
          </div>
        </div>
        <div className="updateDiv p_10">
          <h5>Current Chapter</h5>
          <p className="mb_10">Chapter 17:A lesson learned</p>
          <NavLink to={`/edit-book-progress/${bookId}`} className="btn btnPrimary">
            Update Progress
          </NavLink>
        </div>
      </div>
    </article>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.string,
    bookTitle: PropTypes.string,
    bookCategory: PropTypes.string,
  }),
  bookId: PropTypes.string,
  bookTitle: PropTypes.string,
  bookCategory: PropTypes.string,
  removeBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {},
  bookId: '',
  bookTitle: '',
  bookCategory: '',
};

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(actions.removeBookAction(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Book);
