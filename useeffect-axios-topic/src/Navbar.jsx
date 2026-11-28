import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav>
    <aside className="logo">
        <h2>UseEffect</h2>
    </aside>
    <aside className="menu">
        <NavLink to='/'>Home Page</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/gitusers'>Git Hub Users</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>


    </aside>
   </nav>
  )
}

export default Navbar
