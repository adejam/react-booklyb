import React from 'react';
import PropTypes from 'prop-types';
import Options from './Options';

const CategoryFilter = ({ filterHandler }) => {
  const options = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];
  return (
    <select className="appearance_none navItem tt_u" onChange={filterHandler} required>
      <option value="All">Categories</option>
      {options.map(option => (
        <Options key={option} category={option} />
      ))}
    </select>
  );
};
CategoryFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
