import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => (
    <nav class='navbar is-primary' role='navigation' >
        
        <div class="navbar-burger burger" data-target="menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
   
        <div id="menu" className="navbar-menu is-active">
        <div className="navbar-start">
        <div className="navbar-item">
        <div className="field is-grouped">
        <p className="control">
            <a class='button is-large is-primary'><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Feed</Link></a>
            <a class='button is-large is-primary'><Link style={{ textDecoration: 'none', color: 'white' }} to="/search">Search</Link></a>
            <a class='button is-large is-primary'><Link style={{ textDecoration: 'none', color: 'white' }} to="/submission">Submit</Link></a>
            </p>
            </div>
            </div>
            </div>
        </div>
    </nav>
);

export default Navigation;