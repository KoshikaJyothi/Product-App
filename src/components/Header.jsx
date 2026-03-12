import React, { useState } from 'react'
import { NavLink } from 'react-router'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='flex flex-wrap items-center justify-between px-4 sm:px-10 py-2 bg-blue-200'>
      <img className="rounded-full" width="60" src="https://static.vecteezy.com/system/resources/previews/000/585/470/original/bird-and-wing-logo-vector-template.jpg" alt="Logo" />

      <button className='sm:hidden text-2xl p-2' onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        ☰
      </button>

      <nav className={`${menuOpen ? 'block' : 'hidden'} w-full sm:w-auto sm:block`}>
        <ul className='flex flex-col sm:flex-row gap-4 sm:gap-10 text-lg sm:text-xl mt-2 sm:mt-0 pb-2 sm:pb-0'>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink></li>
          <li><NavLink to="/contactus" onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
