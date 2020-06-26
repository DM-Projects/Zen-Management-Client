import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </nav>
  )
}

export default Navbar;