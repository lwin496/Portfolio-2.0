import React from 'react'
// import {HiMenu} from 'react-icons/hi'
import {scaleRotate as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'


const Navbar = (pageWrapId, OuterContainerId) => {
  return (
    <div>
      <Menu width={'15%'} className='text-white text-4xl flex flex-col'> 
                  <a id='home' className='menu-item pt-10 pb-2 link-underline'> 
                        <NavLink to='/'> 
                              Home
                        </NavLink>
                  </a>
                  <a id='about' className='menu-item pt-10  pb-2 link-underline'> 
                        <NavLink to='/about'> 
                              About
                        </NavLink>
                  </a>
                  <a id='gallery' className='menu-item pt-10  pb-2 link-underline'> 
                        <NavLink to='/gallery'> 
                              Gallery
                        </NavLink>
                  </a>
                  <a id='contact' className='menu-item pt-10  pb-2 link-underline'> 
                        <NavLink to='/contact'> 
                              Contact
                        </NavLink>
                  </a>
      </Menu>
    </div>
  )
}

export default Navbar
