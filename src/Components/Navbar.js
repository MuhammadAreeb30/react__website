import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#6f5de7" : "#828286",
      textShadow: isActive ? "0 0.2rem 0.3rem rgb(113, 94, 232, 0.5)" : "none",
    };
  };
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              Areeb Developer
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    style={navLinkStyles}
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={navLinkStyles}
                    className="nav-link"
                    to="/service"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={navLinkStyles}
                    className="nav-link"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={navLinkStyles}
                    className="nav-link"
                    to="/contactus"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn nav-btn nav-btn-style" type="submit">
                  Sign Up
                </button>
                <button className="btn nav-btn" type="submit">
                  Log in
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
