import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import Category from './Components/Category';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import HamburgerMenu from './Components/HamburgerMenu';
import NavbarMenu from './Components/NavbarMenu';
import Error from './Components/Error';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [saveData, setSaveData] = useState('');
  const [productsData, setProductsData] = useState([]);

  function parseCSV(csvText) {
      const rows = csvText.split(/\r?\n/);
      const headers = rows[0].split(',');
      const data = [];
      for (let i = 1; i < rows.length; i++) {
          const rowData = rows[i].split(',');
          const rowObject = {};
          for (let j = 0; j < headers.length; j++) {
              rowObject[headers[j]] = rowData[j];
          }
          data.push(rowObject);
      }
      return data;
  }

  const getProductsData = () => {
      const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4r5F3JQ2tlhqi0PnFhlBvHcY-W-DWceYwlKITFz9afma_JAwDmH56Kmywig9tWNsxkUZ64MGT3Nnp/pub?output=csv';
      axios.get(url)
      .then((response) => {
          const parsedData = parseCSV(response.data);
          setProductsData(parsedData);
      })
      .catch((error) => {
          console.error('Error', error);
      })
  }
  const onStorageUpdate = (e) => {
    const { key, newValue } = e;
    if (key === 'saveData') {
      setSaveData(newValue);
    }
  };

  useEffect(() => {
    getProductsData();
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
    <div>
      <BrowserRouter>
        <div>
          <NavbarMenu cart={cartItems} />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop clickHandler={handleClick} cart={cartItems} />}/>
              <Route path='/shop/bestsellers' element={<Category clickHandler={handleClick} cart={cartItems} products={productsData} category={'Bestsellers'} />}/>
              <Route path='/shop/sympathy' element={<Category clickHandler={handleClick} cart={cartItems} products={productsData} category={'Sympathy'} />}/>
              <Route path='/shop/love&romance' element={<Category clickHandler={handleClick} cart={cartItems} products={productsData} category={'Love & Romance'} />}/>
              <Route path='/shop/getwell' element={<Category clickHandler={handleClick} cart={cartItems} products={productsData} category={'Get Well'} />}/>
              <Route path='/shop/birthday' element={<Category clickHandlser={handleClick} cart={cartItems} products={productsData} category={'Birthday'} />}/>
            <Route path='/cart' element={<Cart clickHandler={handleClick} cart={cartItems} />}/>
            <Route path='/checkout' element={<Checkout clickHandler={handleClick} cart={cartItems} />}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </div>
      </BrowserRouter>

      <footer>
        <div className='footer-columns'>
          <div className='footer-column'>
            <ul className='footer-list contact-information font-extra-small'>
              <li><i className='fas fa-phone'></i> (012)345-6789</li>
              <br/>
              <li>greenoasis@email.com<br/>Business inquiries only</li>
              <br/>
              <li>4335 Lorem Ipsum Dolor<br/>
                582 Sonsectetur St.<br/>
                Phoenix, AZ 85001
              </li>
            </ul>
          </div>
          <div className='footer-column footer-2'>
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
            <p className='font-extra-small'>Hours: 9:30am-7:00pm<br/>Monday-Saturday</p>
          </div>
          <div className='footer-column'>
            <ul className='footer-list other-information font-extra-small'>
              <li><a className='footer-link'>FAQs</a></li>
              <li><a className='footer-link'>Shipping & Returns</a></li>
              <li><a className='footer-link'>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <p className='copyright-statement font-extra-small'>© 2023 Green Oasis Florist. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;