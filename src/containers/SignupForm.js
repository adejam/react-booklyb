import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import alertFunction from '../functions/alertFunction';
import { signupUser } from '../actions/loginActions';
import Alert from '../components/Alert';

const SignupForm = ({ signUserUp }) => {
  const username = useSelector(state => state.userState);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      alertFunction('passwords do not match', 'alert_danger');
    } else {
      signUserUp(values);
      setValues({
        ...values,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };
  if (username && username !== 'invalid') {
    return <Redirect to="/" />;
  }
  return (
    <section className="section">
      <h2 className="addBookHeader bt_block pt_10 ta_center">Sign Up</h2>
      <form className="smallForm" onSubmit={handleSubmit}>
        <Alert />
        <div className="formGroup mb_10">
          <input
            type="text"
            className="formControl w_full"
            id="username"
            name="name"
            placeholder="Enter Username"
            value={values.name}
            onChange={e => setValues({ ...values, name: e.target.value })}
            required
          />
        </div>
        <div className="formGroup mb_10">
          <input
            type="email"
            className="formControl w_full"
            id="email"
            name="email"
            value={values.email}
            onChange={e => setValues({ ...values, email: e.target.value })}
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="formGroup mb_10">
          <input
            type="password"
            className="formControl w_full"
            id="password"
            name="password"
            value={values.password}
            onChange={e => setValues({ ...values, password: e.target.value })}
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="formGroup mb_10">
          <input
            type="password"
            className="formControl w_full"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={e => setValues({ ...values, confirmPassword: e.target.value })}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="formGroup submitSelectDiv mb_10">
          <button type="submit" className="btn btnPrimary w_full">
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  signUserUp: values => dispatch(signupUser(values)),
});

SignupForm.propTypes = {
  signUserUp: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignupForm);
