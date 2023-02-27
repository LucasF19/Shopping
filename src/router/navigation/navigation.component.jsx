import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import './navigation.style.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo">LOGO</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            Teste
          </Link>
          <Link className="nav-link" to="signIn">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
