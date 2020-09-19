import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filterHandler }) => (
  <div className="mb_10 p_10 filterDiv">
    <div>
      <select className="formControl" onChange={filterHandler} required>
        <option value="All">All</option>
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

CategoryFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
