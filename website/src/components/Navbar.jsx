import React from 'react'
import './../assets/styles/NavbarStyles.css'
import Logo from './../assets/images/logo_vila.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={Logo} alt="Logo"  className='logo'/>
      <ul>
        <li>
          <a href="">HOME</a>
        </li>
        <li>
          <a href="">ÜBER UNS</a>  
        </li>
        <li>
          <a href="">LEISTUNGEN</a>
        </li> 
        <li>
          <a href="">REFERENZEN</a>
        </li> 
        <li>
          <a href="">KONTAKT</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
