import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
{/*      
*/}          
          
function NavbarMenu(){
    const linkStyles = ({ isActive }) => ({
      color: '#173935',
      background: isActive ? '#E8908F' : '#E9A8A5',
      textDecoration: 'none',
      textAlign: 'center',
      fontFamily: 'Tajawal, sans-serif'
    })
    
    return(
      <div className='navbar-menu'>
        <NavLink to='/' className='col-md-1 navbar-link'
          style={linkStyles}>Home</NavLink>
        <NavLink to='/shop' className='col-md-1 navbar-link'
          style={linkStyles}>Shop</NavLink>
        <NavLink to='/cart' className='col-md-1 navbar-link cart-nav-button'
          style={linkStyles}>
          <i className='fas fa-cart-shopping navbar-icon' alt=''></i>
          Cart
        </NavLink>
        {/*<NavLink to='/checkout' className='col-md-1 navbar-link cart-nav-button'
          style={linkStyles}>Checkout</NavLink>*/}
      </div>
    )
}
export default NavbarMenu;