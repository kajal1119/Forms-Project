import React from 'react'
import Logo from "../asset/logo.png"
import './Header.css'
const Header = () => {
  return (
    <header>
      <img className="logo" src={Logo} alt=''></img>
      <a href='/'>Home</a>
    </header>
  )
}

export default Header
