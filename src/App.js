import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

import NavbarMenu from './Components/NavbarMenu';
import Error from './Components/Error';
import About from './Components/About';

{/* FLOWER SHOP WEBSITE
Resources
- https://stock.adobe.com/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&limit=100&search_page=1&search_type=see-more&acp=&aco=flower+clipart&serie_id=76221594&get_facets=0
Examples
- Phoenix Flower Shop: https://www.phoenixflowershops.com/flowers/
- Lighthouse Flower Shop: https://lighthouseflowershopmesa.com/
- Bloominous https://bloominous.com/
- Custom feature https://www.24hrscityflorist.com/design-your-own.html
- Custom feature https://www.venusetfleur.com/pages/design-your-own
- Custom Feature https://rof.flowercompany.ca/products/my-own-bouquet

Building Objectives
- Use Bootstrap
- Main panel with content that changes based on selected tab
- Example: https://html5up.net/massively
- Panels: Bestsellers, Sympathy & Get Well, Wedding & Anniversary, Corsages, Custom, Cart, About
- Custom Component - Choose flowers, Jars, Paper, etc. Select amount and see price.
- Cart Component - Delete items, edit custom item (jump to tab), see total price, input info, select delivery or pickup

TASKS FOR TODAY
- Center text in menu
- Shop
  - vertically align +- in buttons
  - Fix product info font size
  - When dropdown category is clicked, switch to dif set of products
*/}

function App() {
  //const [showPage, setshowPage] = useState(1);
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

  return (
    <div className='page'>

      <BrowserRouter>
        <div>
          <NavbarMenu />
          <div className='hamburger-menu'>
            <div className='show-hamburger-menu-container'>
              <button className={`hamburger-button show-hamburger-menu ${showMenu === true ? {hideBars} : null}`} onClick={toggleMenu}><i className='fas fa-bars menu-icon'></i></button>
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
                    <i className='fas fa-cart-shopping navbar-icon'></i>Cart</NavLink>
              </div>
            </div>
          </div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </div>
      </BrowserRouter>

      <div className='footer'>
        <div className='footer-col footer-1'>
          <ul className='footer-list contact-information font-extra-small'>
            <li><i className='fas fa-phone'></i> (012)345-6789</li>
            <br/>
            <li>greenoasisflorist@email.com<br/>Business inquiries only</li>
            <br/>
            <li>4335 Lorem Ipsum Dolor<br/>
              582 Sonsectetur St.<br/>
              Phoenix, AZ 85001
            </li>
          </ul>
        </div>
        <div className='footer-col footer-2'>
          <ul className='footer-list social-media-footer'>
            <li>
              <a className='footer-link'><i className='fab fa-instagram' title='Instagram' alt='instagram logo'></i></a>
            </li>
            <li>
              <a className='footer-link'><i className='fab fa-facebook' title='Facebook' alt='facebook logo'></i></a>
            </li>
            <li>
              <a className='footer-link'><i className='fab fa-tiktok' title='TikTok' alt='tiktok logo'></i></a>
            </li>
          </ul>
          <p className='font-extra-small shop-hours'>Hours: 9:30am-7:00pm<br/>Sunday-Saturday</p>
        </div>
        <div className='footer-col footer-3'>
          <ul className='footer-list other-information font-extra-small'>
            <li><a className='footer-link'>FAQs</a></li>
            <li><a className='footer-link'>Return Policy</a></li>
            <li><a className='footer-link'>Customer Service</a></li>
          </ul>
        </div>
        <p className='copyright-statement'>© 2023 Green Oasis Florist. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;