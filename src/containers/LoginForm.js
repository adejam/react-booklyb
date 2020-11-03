import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import alertFunction from '../functions/alertFunction';
import { fetchUser } from '../actions/loginActions';
import Alert from '../components/Alert';

const LoginForm = ({ loginUser }) => {
  const errorMsg = useSelector(state => state.auth.error);
  const username = useSelector(state => state.userState);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
    loginUser(values);
    setValues({
      ...values,
      email: '',
      password: '',
    });
    if (errorMsg) {
      alertFunction('Error in Connection', 'alert_danger');
    }
  };
  if (username !== 'invalid' && username) {
    return <Redirect to="/" />;
  }

  return (
    <section className="section">
      <h2 className="addBookHeader bt_block pt_10 ta_center">Login</h2>
      <form className="smallForm" onSubmit={handleSubmit}>
        <Alert />
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
        <div className="formGroup submitSelectDiv mb_10">
          <button type="submit" className="btn btnPrimary w_full">
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: values => dispatch(fetchUser(values)),
});

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm);
