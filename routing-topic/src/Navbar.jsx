import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <aside className="logo">
            <h2>Routing</h2>
        </aside>
        <aside className="menu">
            <NavLink to='/'>Home Page</NavLink>
            <NavLink to='/product'>Products</NavLink>
            <NavLink to='/gitusers'>Git Users</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>

        </aside>
    </nav>
  )
}

export default Navbar
