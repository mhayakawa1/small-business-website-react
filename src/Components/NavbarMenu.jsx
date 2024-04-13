import React from 'react';
import { NavLink } from 'react-router-dom';     
          
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
        <NavLink to='/' className='col-md-1 navbar-link'
          style={linkStyles}>Home</NavLink>
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
      </div>
    )
}
export default NavbarMenu;