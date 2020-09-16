import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import actions from '../actions/index';

const BooksForm = ({ createBook }) => {
<<<<<<< HEAD
  const [formValues, setFormValues] = useState({ id: null, title: '', category: '' });
=======
  const [formValues, setValues] = useState({ id: null, title: '', category: '' });
>>>>>>> f7c9154... feat: Add uuid package to generate dynamic id
  const handleSubmit = e => {
    e.preventDefault();
    createBook(formValues);
    setFormValues({
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
<<<<<<< HEAD
          onChange={e => setFormValues({ ...formValues, id: uuidv4(), title: e.target.value })}
=======
          onChange={e => setValues({ ...formValues, id: uuidv4(), title: e.target.value })}
>>>>>>> f7c9154... feat: Add uuid package to generate dynamic id
          required
        />
      </div>
      <div className="formGroup">
        <select
          className="formControl"
          id="category"
          value={formValues.category}
          onChange={e => setFormValues({ ...formValues, category: e.target.value })}
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
