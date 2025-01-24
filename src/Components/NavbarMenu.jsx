import React, {useState} from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';     
import HamburgerMenu from './HamburgerMenu';
import { useCart } from '../Contexts/CartItemsContext';
          
function NavbarMenu(){
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const { cartItems } = useCart();
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

  const toggleDropdown = (event) => {
      if(event.relatedTarget === null){
        setDropdownVisible((current) => !current)
      }
  }

  const getNavLinks = () => {
    const navLinksNames = ['Bestsellers', 'Sympathy', 'Love & Romance', 'Get Well', 'Birthday'];
    let navLinks = [];
    for(let i = 0; i < navLinksNames.length; i++){
      navLinks.push(
        <NavLink key={i} to={`/shop/${navLinksNames[i]}`} tabIndex="0">{navLinksNames[i]}</NavLink>
      )
    }
    return(
      navLinks
    )
  }
    
  return(
    <header className='nav-header'>
        <div className='site-name-logo'>
          <img className='logo' src={logo} alt='Green Oasis Florist Logo'></img>
          <a href='/'>Green Oasis Florist</a>
        </div>
        <NavLink to='/cart' className='navbar-item cart-link'
          style={cartStyles}>
          <div className='cart-counter-container'>
            <i className='fas fa-cart-shopping navbar-icon' alt='Shopping cart'></i>
            <span className='cart-counter'>{cartItems.length}</span>
          </div>
        </NavLink>
      <div className='navbar'>
        <NavLink to='/about' className='col-md-1 navbar-item about-link'
          style={linkStyles}>About</NavLink>          
        <div onBlur={(event) => toggleDropdown(event)}>
          <button onClick={(event) => toggleDropdown(event)} className={`navbar-item dropdown-btn ${dropdownVisible ? 'dropdown-active' : ''}`}>
            Shop <i className='fa fa-chevron-down'></i>
          </button>
          <div className={`shop-dropdown ${dropdownVisible ? 'show-dropdown' : ''}`}>
            {getNavLinks()}
          </div>
        </div>            
      </div>
      <HamburgerMenu />
    </header>
  )
}
export default NavbarMenu;