import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header id="header" className="animated fadeInDown header-auth">
    <div className="logo">
      <Link to="/">
        <img src="assets/image/logo.png" />
      </Link>
    </div>

    <span id="header-space">
      <Link to="login" className="btn btn-info">
        Login
      </Link>
      &nbsp; o &nbsp;
      <Link to="register" className="btn btn-info">
        Crea tu cuenta
      </Link>
    </span>
  </header>
);

export default Header;
