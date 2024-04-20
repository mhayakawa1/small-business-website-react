import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function HamburgerMenu(){
    const [showMenu, setShowMenu] = useState(false);
    const [hide, setHide] = useState('hide');
    const [hideBars, setHideBars] = useState('');
    const linkStyles = ({ isActive }) => ({
        color: '#173935',
        background: isActive ? '#E8908F' : '#E9A8A5',
        textDecoration: 'none',
        textAlign: 'center',
        fontFamily: 'Tajawal, sans-serif'
      })

      const toggleMenu = () => {
        setShowMenu(showMenu => !showMenu)
        setTimeout(() => {
          if(showMenu === true){
            setHide('hide')
            setHideBars('')
          }else{
            setHide('')
            setHideBars('hide')
          }
        }, 250);
      }
    
    return(
        <div className='hamburger-menu'>
            <div className='show-hamburger-menu-container'>
                <button className={`hamburger-button show-hamburger-menu ${showMenu === true ? {hideBars} : null}`} onClick={toggleMenu}>
                    <i className='fas fa-bars menu-icon'></i>
                </button>
            </div>
            <div className={`hamburger-menu-container ${hide} ${showMenu === false ? 'menu-fade-out' : 'menu-fade-in'}`}>
              <button className='hamburger-button' onClick={toggleMenu}><i className='fas fa-x menu-icon'></i></button>
              <div className='hamburger-menu-items'>
                <NavLink to='/' className='hamburger-link' onClick={toggleMenu}
                    style={linkStyles}>Home</NavLink>
                <NavLink to='/shop' className='hamburger-link' onClick={toggleMenu}
                    style={linkStyles}>Shop</NavLink>
                <NavLink to='/cart' className='hamburger-link cart-nav-button' onClick={toggleMenu}
                    style={linkStyles}>
                    Cart</NavLink>
              </div>
            </div>
        </div>
    )
}
export default HamburgerMenu;