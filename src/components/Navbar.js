import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Axios from 'axios';
import actions from '../actions/index';
import CategoryFilter from './CategoryFilter';
import Logout from '../containers/Logout';
import token from '../functions/token';

const Navbar = ({ changeFilter, changeState }) => {
  const username = useSelector(state => state.userState);
  const authLinks = () => (
    <nav className="mlAuto profileLinks">
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
  );
  let links;
  if (!token.getToken()) {
    links = authLinks();
  } else {
    const getCurrentToken = token.getToken();
    const config = { headers: { Authorization: `Bearer ${getCurrentToken}` } };
    Axios.get('get-user', config)
      .then(res => {
        changeState(res.data);
      })
      .catch(() => {
        changeState('invalid');
      });
    if (username === 'invalid') {
      links = authLinks();
    } else {
      links = (
        <nav className="mlAuto profileLinks">
          <li>
            <NavLink to="/profile" className="avatar navItem">
              {username.toUpperCase().substr(0, 1)}
            </NavLink>
          </li>
          <li>
            <Logout />
          </li>
        </nav>
      );
    }
  }
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
        {links}
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(actions.changeFilterAction(category)),
  changeState: state => dispatch(actions.changeStateAction(state)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Navbar);
