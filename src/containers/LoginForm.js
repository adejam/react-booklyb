import React from 'react';

function LoginForm() {
  return (
    <section className="section">
      <h2 className="addBookHeader bt_block pt_10 ta_center">Login</h2>
      <form className="smallForm">
        <div className="formGroup mb_10">
          <input
            type="email"
            className="formControl w_full"
            id="email"
            name="email"
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
}

export default LoginForm;
