import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/auth";

const Navbar = ({ logout, isAuthenticated }) => {
  const logout_user = () => {
    logout();
  };

  const guestLinks = () => (
    <Fragment>
      <li className="nav-item list-unstyled">
        <Link className="nav-link navItem" to="/login">
        <i className="fas fa-user navicon"></i>
          Login
        </Link>
      </li>
      <li className="nav-item list-unstyled">
        <Link className="nav-link navItem" to="/register">
          Sign Up
        </Link>
      </li>
    </Fragment>
  );

  const authLinks = () => (
    <>
    
      <li className="nav-item list-unstyled">
        <a className="nav-link navItem" href="#!" onClick={logout_user}>
          Your account
        </a>
      </li>
      <li className="nav-item list-unstyled">
        <a className="nav-link navItem" href="#!" onClick={logout_user}>
          Logout
        </a>
      </li>
      
    </>
  );

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light navfixed fixed-top bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            ExpenseBeqala
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link className="nav-link navItem" aria-current="page" to="/">our services</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link navItem" to="/">contact us</Link>
            </li>
          </ul>
              {isAuthenticated ? authLinks() : guestLinks()}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
