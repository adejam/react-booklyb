import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ category }) => <option value={category}>{category}</option>;

Options.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Options;
