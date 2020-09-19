import React from 'react';

const Navbar = () => (
  <header className="bgWhite">
    <nav className="navbar" id="myTopnav">
      <a className="navbarBrand azure" href="/">
        Book Store
      </a>
      <nav>
        <a href="#home" className="navItem tt_u">
          Books
        </a>
        <a href="#news" className="navItem tt_u">
          Category
        </a>
      </nav>
      <nav className="mlAuto">
        <a href="/avatar" className="avatar  navItem">
          <img src="#" width="15" height="15" alt="A" />
        </a>
      </nav>
    </nav>
  </header>
);

export default Navbar;
