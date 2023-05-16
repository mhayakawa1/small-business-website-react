import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
          
function HamburgerMenu(){
    const linkStyles = ({ isActive }) => ({
      color: '#173935',
      background: isActive ? '#E8908F' : '#E9A8A5',
      textDecoration: 'none',
      textAlign: 'center',
      fontFamily: 'Tajawal, sans-serif'
    })
    
    return(
        <div className='hamburger-menu-items'>
            <NavLink to='/' className='hamburger-link'
                style={linkStyles}>Home</NavLink>
            <NavLink to='/shop' className='hamburger-link'
                style={linkStyles}>Shop</NavLink>
            <NavLink to='/cart' className='hamburger-link cart-nav-button'
                style={linkStyles}>
                <i className='fas fa-cart-shopping navbar-icon'></i>
                Cart
            </NavLink>
        </div>
    )
}
export default HamburgerMenu;