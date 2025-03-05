import React from 'react'
import logo from '../pictures/logo.png'
import Button from './Button'
import { Link } from 'react-router-dom';



function Navbar() {
    console.log(logo)
  return (
  <>
    <header>

        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav">
            <ul>
                <li className='blog'><Link to="/">Home</Link></li>
              <li className='about'><Link to="/about">Blog</Link></li>
              
                <li><Link to="/contact"><Button text="Contact" /></Link></li>
            </ul>
        </div>
    </header>
  </>
  )
}

export default Navbar
