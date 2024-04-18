import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';     
import HamburgerMenu from './HamburgerMenu';
          
function NavbarMenu(props){
    const linkStyles = ({ isActive }) => ({
      color: '#173935',
      background: isActive ? '#E8908F' : '#E9A8A5',
      textDecoration: 'none',
      textAlign: 'center',
      fontFamily: 'Tajawal, sans-serif'
    })
    
    return(
      <div className='navbar-menu'>
        <span className='navbar-filler'></span>
        <div className='site-name-logo'>
          <img className='logo' src={logo} alt='Green Oasis Florist Logo'></img>
          <a href='/'>Green Oasis Florist</a>
        </div>
        
        <NavLink to='/shop' className='col-md-1 navbar-link'
          style={linkStyles}>Shop</NavLink>
        <NavLink to='/cart' className='col-md-1 navbar-link cart-nav-button'
          style={linkStyles}>
          <div className='cart-counter-container'>
            <i className='fas fa-cart-shopping navbar-icon' alt='Shopping cart'></i>
            <span className='cart-counter'>{props.data.length}</span>
          </div>
          Cart
        </NavLink>
        <HamburgerMenu />
      </div>
    )
}
export default NavbarMenu;