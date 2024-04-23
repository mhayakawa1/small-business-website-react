import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import HamburgerMenu from './Components/HamburgerMenu';
import NavbarMenu from './Components/NavbarMenu';
import Error from './Components/Error';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [saveData, setSaveData] = useState('');

  const onStorageUpdate = (e) => {
    const { key, newValue } = e;
    if (key === 'saveData') {
      setSaveData(newValue);
    }
  };

  useEffect(() => {
    setSaveData(localStorage.getItem('saveData') || '');
    if(saveData !== ''){
      setCartItems(localStorage.getItem('saveData').split(',').filter(i => i !== ''))
    }
    window.addEventListener('storage', onStorageUpdate);
    return () => {
      window.removeEventListener('storage', onStorageUpdate);
    };
  }, []);

  const handleClick = (productQty, productName, cartChange) => {
      let addToCart = []
    if(productQty === 'clear' && productName === 'clear'){
      setCartItems([])      
      setSaveData(localStorage.getItem('saveData') || '');
      localStorage.setItem('saveData', '')
    }else if(cartChange === 'add'){
      for(let i = 0; i < productQty; i++){
        addToCart.push(productName)
      }
      setCartItems(cartItems.filter(i => i !== productName).concat(addToCart))      
      setSaveData(localStorage.getItem('saveData') || cartItems.filter(i => i !== productName).concat(addToCart).join(','));
      localStorage.setItem('saveData', cartItems.filter(i => i !== productName).concat(addToCart).join(','))
    }else if(cartChange === 'delete'){
      setCartItems(cartItems.filter(i => i !== productName))
      setSaveData(localStorage.getItem('saveData') || cartItems.filter(i => i !== productName).join(','));
      localStorage.setItem('saveData', cartItems.filter(i => i !== productName).join(','))
    }
  }

  return (
    <div className='page'>
      <BrowserRouter>
        <div>
          <NavbarMenu data={cartItems} />
          <HamburgerMenu />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop clickHandler={handleClick} data={cartItems} />}/>
            <Route path='/cart' element={<Cart clickHandler={handleClick} data={cartItems} />}/>
            <Route path='/checkout' element={<Checkout clickHandler={handleClick} data={cartItems} />}/>
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
          <p className='font-extra-small shop-hours'>Hours: 9:30am-7:00pm<br/>Monday-Saturday</p>
        </div>
        <div className='footer-col footer-3'>
          <ul className='footer-list other-information font-extra-small'>
            <li><a className='footer-link'>FAQs</a></li>
            <li><a className='footer-link'>Shipping & Returns</a></li>
            <li><a className='footer-link'>Privacy Policy</a></li>
          </ul>
        </div>
        <p className='copyright-statement'>© 2023 Green Oasis Florist. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;