import React from 'react'
import './Navbar.css'
import logo from '../../assets/nav-logo.svg'
import profile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='nav-logo' />
      <img src={profile} alt="" className='nav-profile' /> 
    </div>
  )
}

export default Navbar