import './App.css';
import React, { useState, useEffect } from 'react';
import { CartItemsProvider } from './Contexts/CartItemsContext.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import NavbarMenu from './Components/NavbarMenu';
import Footer from './Components/Footer';
import Error from './Components/Error';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartItemsProvider>
          <NavbarMenu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route exact path="/shop/:category" element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </CartItemsProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;