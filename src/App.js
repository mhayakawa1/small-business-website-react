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
import NavbarMenu from './Components/NavbarMenu';
import Footer from './Components/Footer';
import Error from './Components/Error';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productsData, setProductsData] = useState([]);

  const [saveData, setSaveData] = useState('');

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
    setSaveData(JSON.parse(localStorage.getItem('saveData')) || '');

    if (localStorage.getItem('saveData') !== null) {
      setCartItems(JSON.parse(localStorage.getItem('saveData')))
    }
    window.addEventListener('storage', onStorageUpdate);
    return () => {
      window.removeEventListener('storage', onStorageUpdate);
    };
  }, []);

  const handleClick = (productQty, productName, cartChange) => {
    let addToCart = [];
    let newCartArray = cartItems.filter(i => i !== productName);
    if (productQty === 'clear' && productName === 'clear') {
      setCartItems([]);
      setSaveData(JSON.parse(localStorage.getItem('saveData')) || '');
      localStorage.setItem('saveData', '');
    } else if (cartChange === 'add') {
      for (let i = 0; i < productQty; i++) {
        addToCart.push(productName)
      }
      setCartItems(newCartArray.concat(addToCart));
      localStorage.setItem('saveData', JSON.stringify(newCartArray.concat(addToCart)));
      setSaveData(JSON.stringify(newCartArray.concat(addToCart)));
    } else if (cartChange === 'delete') {
      setCartItems(newCartArray);
      localStorage.setItem('saveData', JSON.stringify(newCartArray));
      setSaveData(JSON.stringify(newCartArray));
    }
  }

  // const shopRoutes = () => {
  //   const categories = ['Bestsellers', 'Sympathy', 'Love & Romance', 'Get Well', 'Birthday'];
  //   let shopRoutes = [];
  //   for (let i = 0; i < categories.length; i++) {
  //     shopRoutes.push(
  //       <Route key={i} path={`shop/${categories[i].replace(/ /g, '').toLowerCase()}`} element={<Category clickHandler={handleClick} cart={cartItems} products={productsData} category={categories[i]} />} />
  //     )
  //   }
  //   return (
  //     shopRoutes
  //   )
  // }

  return (
    <div>
      <BrowserRouter>
        <div>
          <NavbarMenu cart={cartItems} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/shop' element={<Shop clickHandler={handleClick} cart={cartItems} />} /> */}
            <Route exact path="/shop/:category" element={<Shop clickHandler={handleClick} cart={cartItems} products={productsData} />} />
            {/* {shopRoutes()} */}
            <Route path='/cart' element={<Cart clickHandler={handleClick} cart={cartItems} />} />
            <Route path='/checkout' element={<Checkout clickHandler={handleClick} cart={cartItems} />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;