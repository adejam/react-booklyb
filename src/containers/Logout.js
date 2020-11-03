import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/loginActions';

const Logout = ({ logUserOut }) => {
  const handleClick = () => {
    logUserOut();
  };

  return (
    <button type="button" className="navItem ml_10" onClick={() => handleClick()}>
      Logout
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  logUserOut: () => dispatch(logoutUser()),
});

Logout.propTypes = {
  logUserOut: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Logout);
