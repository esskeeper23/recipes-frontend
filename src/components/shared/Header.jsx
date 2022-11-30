import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/header.css'

const Header = () => {

  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen( current => !current)
  }

  return (
    <header>
      <NavLink to='/'>
        <h1>Name</h1>
      </NavLink>
      <ul className={isOpen ? 'close-menu' : 'open-menu'}>
        <li>Food</li>
        <li>Drinks</li>
        <li>Ingredients</li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? 'active-link' : ''}
            to='/login'>
            Login
          </NavLink>
        </li>
      </ul>
      <i className="fa-solid fa-bars menu_bars" onClick={handleClick}></i>
    </header>
  )
}

export default Header