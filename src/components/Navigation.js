import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => (
  <nav className="navbar is-primary" role="navigation">
    <div className="navbar-brand">
        <div className="navbar-item">
            <h1 className='is-white' style={{ textDecoration: "none", color: "white" }}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  BetterBeer
                </Link>
            </h1>
        </div>
    
    <div className="navbar-burger burger" data-target="menu" onClick={() => {document.getElementById('menu').classList.toggle('is-active')}}>
      <span />
      <span />
      <span />
    </div>
    </div>

    <div id="menu" className="navbar-menu is-primary">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped is-primary">
            <p className="control">
              <a className="button is-large is-primary">
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Feed
                </Link>
              </a>
              </p>
              <p className="control">
              <a className="button is-large is-primary">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/search"
                >
                  Search
                </Link>
              </a>
              </p>
              <p className="control">
              <a className="button is-large is-primary">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/submission"
                >
                  Submit
                </Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
