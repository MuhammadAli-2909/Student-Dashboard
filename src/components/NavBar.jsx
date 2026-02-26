import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <header>
      <h2 className='logo'>Student management System</h2>
        <ul className=''>
          <NavLink to='/'><li>Home</li></NavLink>
          <NavLink to='/Students'><li>Students</li></NavLink>
          <NavLink to='/about'><li>About</li></NavLink>
          <NavLink to='/dashboard'><li>Dashboard</li></NavLink>
          <NavLink to='/login'><li>Login</li></NavLink>
        </ul>
    </header >
  )
}

export default NavBar