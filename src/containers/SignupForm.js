import React from 'react';

const SignupForm = () => (
  <section className="section">
    <h2 className="addBookHeader bt_block pt_10 ta_center">Sign Up</h2>
    <form className="smallForm">
      <div className="formGroup mb_10">
        <input
          type="text"
          className="formControl w_full"
          id="username"
          name="name"
          placeholder="Enter Username"
          required
        />
      </div>
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
          id="title"
          name="password"
          placeholder="Enter Password"
          required
        />
      </div>
      <div className="formGroup mb_10">
        <input
          type="password"
          className="formControl w_full"
          id="title"
          placeholder="Retype Password"
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

export default SignupForm;
