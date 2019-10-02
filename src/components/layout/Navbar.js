import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper black">
        <div className="container">
        <Link to='/' className="navbar-brand">
        <img src="https://lubna.io/wp-content/uploads/2018/12/Logo-Lubna.png" alt="Lubna.io"/>
        <ul className="right">
            <li><NavLink to='/signin'>Home</NavLink></li>
            <li><NavLink to='/signin'>Search</NavLink></li>
            <li><NavLink to='/signin'>Wallet</NavLink></li>
            <li><NavLink to='/signin'>Notification</NavLink></li>
            <li><NavLink to='/signin'>Profile</NavLink></li>
          </ul>
        </Link>
        
        </div>
        </nav>
    )
}

export default Navbar