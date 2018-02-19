import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
    <header className="App-header">
        <h1 className="App-title">Welcome to wp-react</h1>
        <nav className="builtInLinks">
            <Link to="/">Home</Link>
        </nav>
    </header>
);

export default Header;