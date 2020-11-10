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
                <Link className="nav-link" to='/Calculator'>Calculator</Link>
                <Link className="nav-link" to='/History'>Customer History</Link>
                <Link className="nav-link" to='/Signup'>Signup</Link>
                <Link className="nav-link" to='/Login'>Login</Link>
            </div>

        </div>
    )
};

export default NavBar;
