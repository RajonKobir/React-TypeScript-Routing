import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="nav_bg pt-3 pb-3">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container">
                <Link className="navbar-brand" to="/" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>
                    Quivato
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="active" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="active" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="active" to="/services">
                        Services
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
    </>
  );
}
