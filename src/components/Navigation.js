import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => (
    <nav>
        <ul>
            <li><button><Link to="/">Home</Link></button></li>
            <li><button><Link to="/search">Search</Link></button></li>
            <li><button><Link to="/submission">Submit</Link></button></li>
        </ul>
    </nav>
);

export default Navigation;