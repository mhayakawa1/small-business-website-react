import React, {useState} from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';     
import HamburgerMenu from './HamburgerMenu';
          
function NavbarMenu(props){
  const [dropdownVisible, setDropdownVisible] = useState(false)
    const linkStyles = ({ isActive }) => ({
      color: '#173935',
      background: isActive ? '#E9EDEC' : 'white',
      textDecoration: 'none',
      textAlign: 'center'
    })

    const cartStyles = ({}) => ({
      color: '#173935',
      background: '#E9A8A5',
      textDecoration: 'none',
      textAlign: 'center',
      fontFamily: 'Tajawal, sans-serif'
    })
    
    return(
      <header className='nav-header'>
          <div className='site-name-logo'>
            <img className='logo' src={logo} alt='Green Oasis Florist Logo'></img>
            <a href='/'>Green Oasis Florist</a>
          </div>
          <NavLink to='/cart' className='col-md-1 navbar-item cart-nav-button'
            style={cartStyles}>
            <div className='cart-counter-container'>
              <i className='fas fa-cart-shopping navbar-icon' alt='Shopping cart'></i>
              <span className='cart-counter'>{props.data.length}</span>
            </div>
          </NavLink>
        <nav>
          <NavLink to='/about' className='col-md-1 navbar-item'
            style={linkStyles}>About</NavLink>
          {/*<NavLink to='/shop' className='col-md-1 navbar-link shop-link'
            style={linkStyles}>Shop
          </NavLink>*/}
            <button onClick={() => setDropdownVisible(!dropdownVisible)} className='navbar-item dropdown-btn'>
              Shop <i className='fa fa-chevron-down'></i>
            </button>
            <div className={`shop-dropdown ${dropdownVisible ? 'show-dropdown' : ''}`}>
              <a href='#'>Bestsellers</a>
              <a href='#'>Sympathy</a>
              <a href='#'>Get Well</a>
              <a href='#'>Birthday</a>
            </div>
        </nav>
        <HamburgerMenu />
      </header>
    )
}
export default NavbarMenu;