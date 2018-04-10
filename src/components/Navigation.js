import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => (
    <nav class='navbar is-transparent is-primary' role='navigation' >
        <div class='navbar-menu'>
            <li class='navbar-item'><button class='button is-large is-primary'><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link></button></li>
            <li class='navbar-item'><button class='button is-large is-primary'><Link style={{ textDecoration: 'none', color: 'white' }} to="/search">Search</Link></button></li>
            <li class='navbar-item'><button class='button is-large is-primary'><Link style={{ textDecoration: 'none', color: 'white' }} to="/submission">Submit</Link></button></li>
        </div>
    </nav>
);

export default Navigation;