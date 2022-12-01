import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/header.css'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import Box from '@mui/material/Box';

const Header = () => {

  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen( (current) => !current)
  }

  const hanldeClickAway = () => {
    setIsOpen(true)
  }

  return (
    <header>
      <NavLink to='/'>
        <h1>Name</h1>
      </NavLink>
      <ClickAwayListener onClickAway={hanldeClickAway}>
        <Box>
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
        </Box>
      </ClickAwayListener>
      
      
    </header>
  )
}

export default Header