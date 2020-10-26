import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import actions from '../actions/index';
import Options from '../components/Options';

const BooksForm = ({ createBook }) => {
  const [values, setValues] = useState({ bookId: null, bookTitle: '', bookCategory: '' });
  const handleSubmit = e => {
    e.preventDefault();
    createBook(values);
    setValues({
      ...values,
      bookId: null,
      bookTitle: '',
      bookCategory: '',
    });
  };
  const options = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];
  return (
    <section className="section ">
      <h2 className="addBookHeader bt_block pt_10">Add New Book</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup titleInputDiv mb_10">
          <input
            type="text"
            className="formControl w_full"
            id="title"
            name="bookTitle"
            placeholder="Book Title"
            value={values.title}
            onChange={e => setValues({ ...values, bookId: uuidv4(), bookTitle: e.target.value })}
            required
          />
        </div>
        <div className="formGroup categorySelectDiv mb_10">
          <select
            className="formControl w_full"
            id="category"
            name="bookCategory"
            value={values.category}
            onChange={e => setValues({ ...values, category: e.target.value })}
            required
          >
            <option value="">Category</option>
            {options.map(option => (
              <Options key={option} category={option} />
            ))}
          </select>
        </div>
        <div className="formGroup submitSelectDiv mb_10">
          <button type="submit" className="btn btnPrimary w_full">
            Add Book
          </button>
        </div>
      </form>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  createBook: formValues => dispatch(actions.createBookAction(formValues)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(BooksForm);
