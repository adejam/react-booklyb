import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
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
        <Link className="navbarBrand azure" to="/">
          Book Store
        </Link>
        <nav>
          <NavLink to="/books" className="navItem books tt_u">
            Books
          </NavLink>
          <CategoryFilter filterHandler={handleFilterChange} />
        </nav>
        <nav className="mlAuto profileLinks">
          <li>
            <NavLink to="/profile" className="avatar navItem">
              A
            </NavLink>
          </li>
          <li>
            <NavLink to="/sign-up" className="navItem">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="navItem">
              Log In
            </NavLink>
          </li>
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
