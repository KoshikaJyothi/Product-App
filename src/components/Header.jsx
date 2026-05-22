import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const activeLink = 'text-blue-600 font-semibold'
  const normalLink = 'hover:text-blue-600 transition duration-300'

  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 py-3'>
        <NavLink to="/" className='flex items-center gap-2'>
          <img className="rounded-full" width="50" src="https://static.vecteezy.com/system/resources/previews/000/585/470/original/bird-and-wing-logo-vector-template.jpg" alt="Logo" />
          <span className='text-xl font-bold text-gray-800'>OurStore</span>
        </NavLink>

        <button 
          className='sm:hidden text-gray-600 text-3xl p-2' 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle menu"
        >
          {menuOpen ? '×' : '☰'}
        </button>

        <nav className={`w-full sm:w-auto sm:flex items-center ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col sm:flex-row gap-4 sm:gap-8 text-lg mt-4 sm:mt-0 pb-2 sm:pb-0'>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? activeLink : normalLink}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({ isActive }) => isActive ? activeLink : normalLink}
                onClick={() => setMenuOpen(false)}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contactus" 
                className={({ isActive }) => isActive ? activeLink : normalLink}
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
