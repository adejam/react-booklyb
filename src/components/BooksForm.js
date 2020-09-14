import React from 'react';

const BooksForm = () => (
  <form>
    <div className="formGroup">
      <input type="text" className="formControl" id="title" placeholder="Title" />
    </div>
    <div className="formGroup">
      <select className="formControl" id="category">
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

export default BooksForm;
