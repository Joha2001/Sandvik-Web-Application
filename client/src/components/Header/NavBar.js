import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="header">
            {/* Logo */}
            <Link className="nav-title" to="/">
                <img className="nav-logo" src={logo} alt="React logo" />
            </Link>

            {/* Page Links */}
            <div className="nav-items">
                <Link className="nav-link" to='/Home'>Home</Link>
                <Link className="nav-link" to='/Input'>Parameter Inputs</Link>
                <Link className="nav-link" to='/History'>Customer History</Link>
                <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://reactjs.org/tutorial/tutorial.html">React Tutorial</a>
                <a className="nav-link" target="_blank" rel="noopener norefferer" href="https://nodejs.org/en/docs/">Node Docs</a>
            </div>

        </div>
    )
};

export default NavBar;
