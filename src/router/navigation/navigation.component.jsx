import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { userSignOut } from "../../utils/firebase/firabase.utils";

import "./navigation.style.scss";


const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <span className="nav-link" onClick={userSignOut}>Sair</span>
          ) : (
            <Link className="nav-link" to="authentication">
              Entrar
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
