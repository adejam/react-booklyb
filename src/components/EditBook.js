import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Options from './Options';
import { updateBook } from '../actions/bookActions';
import token from '../functions/token';
import alertFunction from '../functions/alertFunction';
import Alert from './Alert';

const EditBook = ({
  match: {
    params: { id },
  },
  updateBook,
}) => {
  const username = useSelector(state => state.userState);
  const options = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];
  const commentOptions = ['Intriging', 'Satisfactory', 'Interesting', 'Educative', 'Informative'];
  const getCurrentToken = token.getToken();
  const config = { headers: { Authorization: `Bearer ${getCurrentToken}` } };
  const [values, setValues] = useState({
    bookId: '',
    bookTitle: '',
    bookAuthor: '',
    bookCategory: '',
    comment: '',
    numberOfPages: null,
    currentPageRead: null,
    currentChapterTitle: '',
    currentChapterRead: null,
  });
  useEffect(() => {
    Axios.get(`books/${id}`, config)
      .then(res => {
        const book = res.data;
        setValues({
          ...values,
          bookId: book.bookId,
          bookTitle: book.bookTitle,
          bookAuthor: book.bookAuthor,
          bookCategory: book.bookCategory,
          comment: book.comment,
          numberOfPages: book.numberOfPages,
          currentPageRead: book.currentPageRead,
          currentChapterTitle: book.currentChapterTitle,
          currentChapterRead: book.currentChapterRead,
        });
      })
      .catch(error => {
        const errorMsg = error.message;
        alertFunction(errorMsg, 'alert_danger');
      });
  }, []);
  if (!username || username === 'invalid') {
    return <Redirect to="/login" />;
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (!values.bookTitle || !values.bookCategory) {
      alertFunction('The Starred fields are required', 'alert_danger');
    } else if (values.currentPageRead > values.numberOfPages) {
      alertFunction('Current page read cannot be greater than the number of pages', 'alert_danger');
    } else {
      updateBook(values);
    }
  };
  return (
    <section className="section" id="edit">
      <Alert />
      <form className="mediumForm" onSubmit={handleSubmit}>
        <div className="mb_50">
          <h2 className="addBookHeader bb_block pt_10">Edit Book</h2>
          <div className="formGroup titleInputDiv mb_10">
            <label htmlFor="title" className="requiredField">
              Book Title
              <sup>*</sup>
              <input
                type="text"
                className="formControl w_full mt_10"
                id="title"
                name="bookTitle"
                placeholder="Book Title"
                value={values.bookTitle}
                onChange={e => setValues({ ...values, bookTitle: e.target.value })}
              />
            </label>
          </div>
          <div className="formGroup categorySelectDiv mb_10">
            <label htmlFor="category" className="requiredField">
              Book Category
              <sup>*</sup>
              <select
                className="formControl w_full mt_10"
                id="category"
                name="bookCategory"
                value={values.bookCategory}
                onChange={e => setValues({ ...values, bookCategory: e.target.value })}
                required
              >
                <option value={values.bookCategory}>{values.bookCategory}</option>
                {options.map(option => (
                  <Options key={option} category={option} />
                ))}
              </select>
            </label>
          </div>
          <div className="formGroup titleInputDiv mb_10">
            <label htmlFor="author">
              Book Author
              <input
                type="text"
                className="formControl w_full mt_10"
                id="author"
                name="bookAuthor"
                value={values.bookAuthor || ''}
                onChange={e => setValues({ ...values, bookAuthor: e.target.value })}
                placeholder="Enter Book Author"
              />
            </label>
          </div>
          <div className="formGroup titleInputDiv mb_10">
            <label htmlFor="noOfPages">
              Number of Pages
              <input
                type="number"
                className="formControl w_full mt_10"
                id="noOfPages"
                name="noOfPages"
                value={values.numberOfPages || ''}
                onChange={e => setValues({ ...values, numberOfPages: e.target.value })}
                placeholder="Enter Number of pages"
              />
            </label>
          </div>
          <div className="formGroup submitSelectDiv mb_10">
            <button type="submit" className="btn btnPrimary w_full">
              Submit
            </button>
          </div>
        </div>
        <div className="mb_50">
          <h2 className="addBookHeader bb_block pt_10">Edit Read Progress</h2>
          <div className="formGroup mb_10">
            <label htmlFor="currentChapterTitle">
              Current Chapter Title
              <input
                type="text"
                className="formControl w_full mt_0"
                id="currentChapterTitle"
                name="currentChapterTitle"
                value={values.currentChapterTitle || ''}
                onChange={e => setValues({ ...values, currentChapterTitle: e.target.value })}
                placeholder="Enter Current Chapter Title"
              />
            </label>
          </div>
          <div className="formGroup mb_10">
            <label htmlFor="currentPageRead">
              Current Page Number
              <input
                type="number"
                className="formControl w_full mt_10"
                id="currentPageRead"
                name="currentPageRead"
                value={values.currentPageRead || ''}
                onChange={e => setValues({ ...values, currentPageRead: e.target.value })}
                placeholder="Enter Current Page Number"
                max={values.numberOfPages || 0}
                min="0"
              />
            </label>
          </div>
          <div className="formGroup mb_10">
            <label htmlFor="currentChapterRead">
              Current Chapter Number
              <input
                type="number"
                className="formControl w_full mt_10"
                id="currentChapterRead"
                name="currentChapterRead"
                value={values.currentChapterRead || ''}
                onChange={e => setValues({ ...values, currentChapterRead: e.target.value })}
                placeholder="Enter Current Chapter Number"
              />
            </label>
          </div>
          <div className="formGroup submitSelectDiv mb_10">
            <button type="submit" className="btn btnPrimary w_full">
              Submit
            </button>
          </div>
        </div>
        <div className="mb_50">
          <h2 className="addBookHeader bb_block pt_10">Edit Comment</h2>
          <div className="formGroup categorySelectDiv mb_10">
            <label htmlFor="comment">
              Comment
              <select
                className="formControl w_full mt_10"
                id="comment"
                name="comment"
                value={values.comment || ''}
                onChange={e => setValues({ ...values, comment: e.target.value })}
              >
                <option value={values.comment}>{values.comment || 'Add Comment'}</option>
                {commentOptions.map(option => (
                  <Options key={option} category={option} />
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="formGroup submitSelectDiv mb_10">
          <button type="submit" className="btn btnPrimary w_full">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  updateBook: values => dispatch(updateBook(values)),
});

EditBook.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(EditBook);
