import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import actions from '../actions/index';

const BooksForm = ({ createBook }) => {
  const [formValues, setValues] = useState({ id: null, title: '', category: '' });
  const handleSubmit = e => {
    e.preventDefault();
    createBook(formValues);
    setValues({
      ...formValues,
      id: null,
      title: '',
      category: '',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="formGroup">
        <input
          type="text"
          className="formControl"
          id="title"
          placeholder="Title"
          value={formValues.title}
          onChange={e => setValues({ ...formValues, id: uuidv4(), title: e.target.value })}
          required
        />
      </div>
      <div className="formGroup">
        <select
          className="formControl"
          id="category"
          value={formValues.category}
          onChange={e => setValues({ ...formValues, category: e.target.value })}
          required
        >
          <option value="">Choose Category</option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </div>
      <div className="formGroup">
        <button type="submit" className="btn btnPrimary">
          Submit
        </button>
      </div>
    </form>
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
