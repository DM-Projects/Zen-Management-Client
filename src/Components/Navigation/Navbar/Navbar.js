import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navigation">
        <li className="navigation-item">Home</li>
        <li className="navigation-item">Projects</li>
        <li className="navigation-item">Settings</li>
        <li className="navigation-item">Logout</li>
      </ul>
    </nav>
  )
}

export default Navbar;