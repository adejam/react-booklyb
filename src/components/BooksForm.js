import React, { useState } from 'react';

const BooksForm = () => {
  const [formValues, setFormValues] = useState({ title: '', category: '' });
  const handleSubmit = e => {
    e.preventDefault();
    setFormValues({ ...formValues, title: '', category: '' });
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
          onChange={e => setFormValues({ ...formValues, title: e.target.value })}
        />
      </div>
      <div className="formGroup">
        <select
          className="formControl"
          id="category"
          value={formValues.category}
          onChange={e => setFormValues({ ...formValues, category: e.target.value })}
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

export default BooksForm;
