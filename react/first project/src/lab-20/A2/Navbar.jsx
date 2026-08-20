import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/test">Test</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </>
  )
}

export default Navbar