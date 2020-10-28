import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import percent from '../images/percent.png';
import { deleteBook } from '../actions/bookActions';

const Book = ({ book, removeBook }) => {
  const {
    bookId,
    bookTitle,
    bookCategory,
    bookAuthor,
    comment,
    numberOfPages,
    currentPageRead,
    currentChapterTitle,
    currentChapterRead,
    currentReadPercent,
  } = book;
  const handleClick = () => {
    removeBook(bookId);
  };
  const isPercent = currentReadPercent ? (
    <div className="percent br_block">
      <div>
        <img src={percent} alt="percent" className="percentImg" />
      </div>
      <div className="ml_10">
        <p className="percentRate">{currentReadPercent || ''}</p>
        <span className="complete">
          {currentReadPercent === 100 ? 'completed' : 'not completed'}
        </span>
      </div>
    </div>
  ) : (
    <div className="percent br_block">
      <p>
        <NavLink to={`/edit-book/${bookId}`} className="azure pr_10 ml_10">
          Edit Book
        </NavLink>
        to get read Percentage
      </p>
    </div>
  );
  const editBook = (
    <NavLink to={`/edit-book/${bookId}`} className="azure pr_10 ml_10">
      Edit Book
    </NavLink>
  );
  return (
    <article className="list_group_item list_group_item_action bookArticle">
      <div className="name">
        <div className="nameDiv">
          <p>{bookCategory}</p>
          <h3>{bookTitle}</h3>
          <p className=" mb_10 mt_10">
            <b>BY: </b>
            {bookAuthor || ''}
          </p>
          <p className=" mb_10 mt_10">
            <b>Comment: </b>
            {comment || ''}
          </p>
          <nav>
            <NavLink to={`/edit-book/${bookId}`} className="azure pr_10 br_block">
              Edit Comment
            </NavLink>
            <a href="#remove" className="azure pr_10 ml_10 br_block" onClick={() => handleClick()}>
              Remove
            </a>
            {editBook}
          </nav>
        </div>
      </div>
      <div className="percentUpdate">
        <div className="percentDiv p_10">{isPercent}</div>
        <div className="updateDiv p_10">
          <h5 className="ta_center">Current Chapter</h5>
          <p className="mb_10 ta_center">
            {`
            Pages Read:
            ${currentPageRead || 0}
            /
            ${numberOfPages || 0}
            `}
          </p>
          <p className="mb_10 ta_center">
            {`
            Chapter 
            ${currentChapterRead || ''} : ${currentChapterTitle || ''}
            `}
          </p>
          <NavLink to={`/edit-book/${bookId}`} className="btn btnPrimary">
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
    bookAuthor: PropTypes.string,
    comment: PropTypes.string,
    numberOfPages: PropTypes.number,
    currentPageRead: PropTypes.number,
    currentChapterTitle: PropTypes.string,
    currentChapterRead: PropTypes.number,
    currentReadPercent: PropTypes.number,
  }),
  bookId: PropTypes.string,
  bookTitle: PropTypes.string,
  bookCategory: PropTypes.string,
  bookAuthor: PropTypes.string,
  comment: PropTypes.string,
  numberOfPages: PropTypes.number,
  currentPageRead: PropTypes.number,
  currentChapterTitle: PropTypes.string,
  currentChapterRead: PropTypes.number,
  currentReadPercent: PropTypes.number,
  removeBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {},
  bookId: '',
  bookTitle: '',
  bookCategory: '',
  bookAuthor: '',
  comment: '',
  numberOfPages: null,
  currentPageRead: null,
  currentChapterTitle: '',
  currentChapterRead: null,
  currentReadPercent: null,
};

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(deleteBook(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Book);
