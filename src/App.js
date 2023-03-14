import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
  const [showPage, setshowPage] = useState(1);

  return (
    <div className='page'>

      <BrowserRouter>
        <div>
          <NavbarMenu />
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
        <div className='footer-col'>
          <ul className='footer-list contact-information font-extra-small'>
            <li><i className='fas fa-phone'></i> (012)345-6789</li>
            <br/>
            <li>loremipsum@abc.com<br/>Business inquiries only</li>
            <br/>
            <li>Dolor Sit Amet<br/>
              Lorem Ipsum Flower Shop<br/>
              123 Sonsectetur St.<br/>
              Adipiscing Alit 12345
            </li>
          </ul>
        </div>
        <div className='footer-col'>
          <ul className='footer-list social-media-footer'>
            <li>
              <a><i className='fab fa-instagram' title='Instagram' alt='instagram logo'></i></a>
            </li>
            <li>
              <a><i className='fab fa-facebook' title='Facebook' alt='facebook logo'></i></a>
            </li>
            <li>
              <a><i className='fab fa-tiktok' title='TikTok' alt='tiktok logo'></i></a>
            </li>
          </ul>
        </div>
        <div className='footer-col'>
          <ul className='footer-list other-information font-extra-small'>
            <li><a className='footer-link'>FAQs</a></li>
            <li><a className='footer-link'>Return Policy</a></li>
            <li><a className='footer-link'>Customer Service</a></li>
          </ul>
        </div>
        <p className='copyright-statement'>© 2023 Lorem Ipsum Flower Shop</p>
      </div>
    </div>
  );
}

export default App;