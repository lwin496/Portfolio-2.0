import React from 'react'
// import {HiMenu} from 'react-icons/hi'
import {bubble as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <Menu width={'15%'} className='text-white text-4xl'> 
            
                  <a id='home' className='menu-item'> 
                        <NavLink to='/'> 
                              Home
                        </NavLink>
                  </a>
                  <a id='about' className='menu-item'> 
                        <NavLink to='/about'> 
                              About
                        </NavLink>
                  </a>
                  <a id='gallery' className='menu-item'> 
                        <NavLink to='/gallery'> 
                              Gallery
                        </NavLink>
                  </a>
                  <a id='contact' className='menu-item'> 
                        <NavLink to='/contact'> 
                              Contact
                        </NavLink>
                  </a>
           
      </Menu>
    </div>
  )
}

export default Navbar
