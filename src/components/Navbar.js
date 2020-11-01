import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions/index';
import CategoryFilter from './CategoryFilter';

const Navbar = ({ changeFilter }) => {
  const handleFilterChange = e => {
    changeFilter(e.target.value);
  };
  return (
    <header className="bgWhite">
      <nav className="navbar" id="myTopnav">
        <a className="navbarBrand azure" href="/">
          Book Store
        </a>
        <nav>
          <a href="#home" className="navItem books tt_u">
            Books
          </a>
          <CategoryFilter filterHandler={handleFilterChange} />
        </nav>
        <nav className="mlAuto">
          <a href="#avatar" className="avatar navItem">
            A
          </a>
        </nav>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(actions.changeFilterAction(category)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Navbar);
