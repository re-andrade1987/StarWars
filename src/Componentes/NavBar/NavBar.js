import React from 'react'
import './NavBar.css';
import logo from './logo.png'

function Navbar(props) {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo-star-wars" />
        </nav>
    )
}

export default Navbar