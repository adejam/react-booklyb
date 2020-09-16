import React from 'react';

const CategoryFilter = () => {
  return (
    <div>
      <div className="formGroup">
        <select
          className="formControl"
          id="category"
        //   value={formValues.category}
        //   onChange={e => setFormValues({ ...formValues, category: e.target.value })}
          required
        >
          <option value="All">Filter All</option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;
