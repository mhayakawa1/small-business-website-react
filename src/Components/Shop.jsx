import React, {useState, useEffect} from 'react';
import logo from '../logo.svg'

import Sympathy1 from '../ProductImages/Vel quam elementum.png';
import Sympathy2 from '../ProductImages/pulvinar etiam.jpeg';
import Sympathy3 from '../ProductImages/Vestibulum lorem.jpeg';
import Sympathy4 from '../ProductImages/sed risus ultricies.jpeg';
import Sympathy5 from '../ProductImages/tristique nulla.jpeg';
import Sympathy6 from '../ProductImages/aliquet enim.jpeg';
import Sympathy7 from '../ProductImages/Scelerisque viverra.png';
import Sympathy8 from '../ProductImages/mauris in aliquam.jpeg';
import Sympathy9 from '../ProductImages/Diam quis enim.jpeg';
import Sympathy10 from '../ProductImages/lobortis scelerisque.jpeg';
import LoveRom1 from '../ProductImages/fermentum dui.png';
import LoveRom2 from '../ProductImages/faucibus elit.png';
import LoveRom3 from '../ProductImages/duis tristique.jpeg';
import LoveRom4 from '../ProductImages/sollicitudin nibh.jpeg';
import LoveRom5 from '../ProductImages/Et ultrices.png';
import LoveRom6 from '../ProductImages/neque ornare.jpeg';
import LoveRom7 from '../ProductImages/aenean euismod.jpeg';
import LoveRom8 from '../ProductImages/elementum non.jpeg';
import LoveRom9 from '../ProductImages/diam phasellus.png';
import LoveRom10 from '../ProductImages/lorem diam in.png';
import GetWell1 from '../ProductImages/arcu cursus.jpeg';
import GetWell2 from '../ProductImages/euismod quis.jpeg';
import GetWell3 from '../ProductImages/viverra nibh.jpeg';
import GetWell4 from '../ProductImages/Senectus et netus.jpeg';
import GetWell5 from '../ProductImages/et malesuada fames.png';
import GetWell6 from '../ProductImages/ac turpis egestas.png';
import GetWell7 from '../ProductImages/Enim praesent.jpeg';
import GetWell8 from '../ProductImages/elementum facilisis.jpeg';
import GetWell9 from '../ProductImages/Leo a diam.jpeg';
import GetWell10 from '../ProductImages/sollicitudin tempor.jpeg';
import Birthday1 from '../ProductImages/Suspendisse in.png';
import Birthday2 from '../ProductImages/est ante in.png';
import Birthday3 from '../ProductImages/Vestibulum.png';
import Birthday4 from '../ProductImages/rhoncus est.png';
import Birthday5 from '../ProductImages/pellentesque elit.jpeg';
import Birthday6 from '../ProductImages/ullamcorper.jpeg';
import Birthday7 from '../ProductImages/dignissim cras.jpeg';
import Birthday8 from '../ProductImages/Mattis nunc sed.png';
import Birthday9 from '../ProductImages/blandit libero.png';
import Birthday10 from '../ProductImages/Turpis in eu.png';

const placeholderImg = 'https://gildasclubgr.org/wp-content/uploads/2019/02/no-image.jpg';

{/*Goals
- Sort - AZ, ZA, Bestseller, Price low-high high-low
- Determine Item prices
	- Small 1-3 stems - $15-20
	- Simple all same flower $30-40
	- Complex - 4 prices $50-60
*/}

function Shop(){
    //B index: 0-1
    //S&GW index: 2-3
    const [products, setProducts] = useState([
        ['Lobortis scelerisque', '$45.00', 0, Sympathy10, 'Bestsellers', 15],
        ['sollicitudin nibh', '$23.00', 0, LoveRom4, 'Bestsellers', 12],
        ['dignissim cras', '$32.00', 0, Birthday7, 'Bestsellers', 10],
        ['euismod quis', '$17.00', 0, GetWell2, 'Bestsellers', 13],
        ['ullamcorper', '$25.00', 0, Birthday6, 'Bestsellers', 11],
        ['lorem diam in', '$10.00', 0, LoveRom10, 'Bestsellers', 12],
        ['Vestibulum lorem', '$30.00', 0, Sympathy3, 'Bestsellers', 13],
        ['sollicitudin tempor', '$28.00', 0, GetWell10, 'Bestsellers', 14],
        
        ['Vel quam elementum', '$20.00', 0, Sympathy1, 'Sympathy', 5],
        ['pulvinar etiam', '$32.00', 0, Sympathy2, 'Sympathy', 6],
        ['Vestibulum lorem', '$30.00', 0, Sympathy3, 'Sympathy', 13],
        ['sed risus ultricies', '$22.00', 0, Sympathy4, 'Sympathy', 2],
        ['tristique nulla', '$42.00', 0, Sympathy5, 'Sympathy', 4],
        ['aliquet enim', '$38.00', 0, Sympathy6, 'Sympathy', 6],
        ['Scelerisque viverra', '$23.00', 0, Sympathy7, 'Sympathy', 4],
        ['mauris in aliquam', '$41.00', 0, Sympathy8, 'Sympathy', 5],
        ['Diam quis enim', '$47.00', 0, Sympathy9, 'Sympathy', 3],
        ['lobortis scelerisque', '$45.00', 0, Sympathy10, 'Sympathy', 15],

        ['fermentum dui', '$21.00', 0, LoveRom1, 'Love & Romance', 8],
        ['faucibus elit', '$19.00', 0, LoveRom2, 'Love & Romance', 5],
        ['duis tristique', '$19.00', 0, LoveRom3, 'Love & Romance', 6],
        ['sollicitudin nibh', '$23.00', 0, LoveRom4, 'Love & Romance', 12],
        ['Et ultrices', '$38.00', 0, LoveRom5, 'Love & Romance', 7],
        ['neque ornare', '$25.00', 0, LoveRom6, 'Love & Romance', 2],
        ['aenean euismod', '$32.00', 0, LoveRom7, 'Love & Romance', 3],
        ['elementum non', '$30.00', 0, LoveRom8, 'Love & Romance', 4],
        ['diam phasellus', '$36.00', 0, LoveRom9, 'Love & Romance', 5],
        ['lorem diam in', '$10.00', 0, LoveRom10, 'Love & Romance', 12],

        ['arcu cursus', '$22.00', 0, GetWell1, 'Get Well', 7],
        ['euismod quis', '$17.00', 0, GetWell2, 'Get Well', 13],
        ['viverra nibh', '$18.00', 0, GetWell3, 'Get Well', 8],
        ['Senectus et netus', '$24.00', 0, GetWell4, 'Get Well', 3],
        ['et malesuada fames', '$20.00', 0, GetWell5, 'Get Well', 2],
        ['ac turpis egestas', '$17.00', 0, GetWell6, 'Get Well', 3],
        ['Enim praesent', '$25.00', 0, GetWell7, 'Get Well', 4],
        ['elementum facilisis', '$15.00', 0, GetWell8, 'Get Well', 5],
        ['Leo a diam', '$32.00', 0, GetWell9, 'Get Well', 6],
        ['sollicitudin tempor', '$28.00', 0, GetWell10, 'Get Well', 14],

        ['Suspendisse in', '$21.00', 0, Birthday1, 'Birthday', 5],
        ['est ante in', '$19.00', 0, Birthday2, 'Birthday', 4],
        ['Vestibulum', '$19.00', 0, Birthday3, 'Birthday', 3],
        ['rhoncus est', '$23.00', 0, Birthday4, 'Birthday', 3],
        ['pellentesque elit', '$38.00', 0, Birthday5, 'Birthday', 2],
        ['ullamcorper', '$25.00', 0, Birthday6, 'Birthday', 11],
        ['dignissim cras', '$32.00', 0, Birthday7, 'Birthday', 10],
        ['Mattis nunc sed', '$30.00', 0, Birthday8, 'Birthday', 5],
        ['blandit libero', '$36.00', 0, Birthday9, 'Birthday', 4],
        ['Turpis in eu', '$10.00', 0, Birthday10, 'Birthday', 5]
    ]);

    const [data, setData] = useState('');
    const [quantities, setQuantities] = useState('0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0');

    const [inCart, setInCart] = useState([]);
    const [showCateg, setShowCateg] = useState('Bestsellers');
    const [gridNum, setGridNum] = useState(3);

    const [viewProduct, setViewProduct] = useState(false);
    const [productInfo, setProductInfo] = useState([]);
    const [productQty, setProductQty] = useState(0);
    
    const onStorageUpdate = (e) => {
        const { key, newValue } = e;
        if (key === 'data') {
          setData(newValue);
        }
    };

    useEffect(() => {
        setData(localStorage.getItem('data') || '');
        setQuantities(localStorage.getItem('quantities') || '');
        window.addEventListener('storage', onStorageUpdate);   
        return () => {
          window.removeEventListener('storage', onStorageUpdate);
        };
      }, []);

    const handleChange = (categ) => {
        setShowCateg(categ);
    };

    const toggleViewProduct = (product, i) =>{
        //console.log(product)
        setViewProduct((bool) => !bool)
        product.push(i)
        setProductInfo(product)
        setProductQty(Number(quantities[i*2]))
    }

    const showProducts = () =>{
        const productsArr = []
            for(let i = 0; i < products.length; i++){
                productsArr.push(
                    showCateg === products[i][4] ?
                    <div key={i} className={`product-card-container ${gridNum === 3 ? 'grid3 grid1' : 'grid2'}`}
                        onClick={() => toggleViewProduct(products[i], i)}>
                        <div className='product-card'>
                            <img src={products[i][3]} className={`product-image ${gridNum === 3 ? 'grid-image-3 grid-image-1' : 'grid-image-2'}`}></img>
                            {/*<button className='magnify-button'><i className='fas fa-magnifying-glass'></i></button>*/}
                            <div className='product-info'>
                                <p className='product-name'>{products[i][0]}</p>
                                <p className='product-price'>{products[i][1]}</p>
                                {/*<button className='add-to-cart'>Add to Cart</button>
                                <div className='alter-total'>
                                    <button onClick={() => addToCart(products[i][0]+',', 'add', i)} className='add-button'>+</button>
                                    <p className='quantity'>{quantities.split(',')[i]}</p>
                                    <button onClick={() => addToCart(products[i][0]+',','sub', i)} className='sub-button'>-</button>
                                </div>*/}
                            </div>
                        </div>
                    </div> : 
                    null 
                )
            }
        return(
            productsArr
        )
    }

    const shopGridButton = (num) =>{        
        setGridNum(num)
    }

    const setQuantity = (product, op, index) =>{
{/*        let array = quantities.split(',')
        function addCommas(array){
            let array2 = []
            for(let i = 0; i < array.length; i++){
                array2.push(array[i])
                if(i < array.length - 1){
                    array2.push(',')
                }
            }
            array = array2
            return array
        }
        let num

        if(op === 'add'){
            num = Number(array[index])+1
            array.splice(index, 1, num.toString())
            //array = addCommas(array)
            array.join(',')
            setQuantities(array.join(','))            
            localStorage.setItem('quantities', array.join(','))
            setData(product + data)
            localStorage.setItem('data', product + data);
        }else if(op === 'sub' && array[index] < 1){
            return
        }else if(op === 'sub'){
            num = Number(array[index])-1
            array.splice(index, 1, num.toString())
            //array = addCommas(array)
            array.join(',')
            setQuantities(array.join(','))
            localStorage.setItem('quantities', array.join('',))
            setData(data.replace(product, ''))
            localStorage.setItem('data', data.replace(product, '')); 
        }*/}
        if(op === 'add' && productQty < 15){
            setProductQty(productQty+1)
        }else if(op === 'sub' && productQty >= 1){
            setProductQty(productQty-1)
        }
    }

    const addToCart = (index) => {
        let array = quantities.split(',')
        array.splice(index, 1, productQty)
        console.log(array)        
    }

    function reset(){
        setData('')
        localStorage.setItem('data', '')
        setInCart([]);
        localStorage.setItem('inCart', []);
        setQuantities('0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0');
        localStorage.setItem('quantities', '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0');
    }
    
    return(
        <div className='shop-page'>
            <div className='cart-counter-container'>
                <div className='cart-counter'>
                    <p>{data.split(',').length - 1}<i className='fas fa-shopping-cart shop-shopping-cart'></i></p> 
                    {/*<button className='clear-cart-button' onClick={() => reset()}>Clear Cart</button>*/}
                </div>
            </div>

            <div className='shop-header'>
                <img className='shop-header-background' src='https://images.pexels.com/photos/5980208/pexels-photo-5980208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
                <div className='shop-header-container'>                    
                    <img className='logo shop-logo' src={logo}></img>
                    <h1>Green Oasis Florist</h1>
                    <h2>{showCateg}</h2>
                </div>
            </div>

            <div className='shop-menu'>
                <div className='dropdown'>
                    <button className='btn dropdown-toggle' type='button' data-bs-toggle='dropdown'>
                        View Categories
                        <div className='angle-down-div'>
                            <i className='fas fa-angle-down'></i>
                        </div>
                    </button>
                    <ul className='dropdown-menu dropdown-menu-right'>
                        <li><a className='dropdown-item' href='#' onClick={() => handleChange('Bestsellers')}>Bestsellers</a></li>
                        <li><a className='dropdown-item' href='#' onClick={() => handleChange('Sympathy')}>Sympathy</a></li>
                        <li><a className='dropdown-item' href='#' onClick={() => handleChange('Love & Romance')}>Love & Romance</a></li>
                        <li><a className='dropdown-item' href='#' onClick={() => handleChange('Get Well')}>Get Well</a></li>
                        <li><a className='dropdown-item' href='#' onClick={() => handleChange('Birthday')}>Birthday</a></li>
                    </ul>
                </div>
                <div className='shop-menu-buttons'>
                    <button className='grid-button-1' onClick={() => shopGridButton(3)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        </svg>
                    </button>
                    <button className='grid-button-3' onClick={() => shopGridButton(3)}>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-grid-3x3-gap shop-grid-button' viewBox='0 0 16 16'>
                        <path d='M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z'/>
                        </svg>
                    </button>
                    <button onClick={() => shopGridButton(2)}>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-grid shop-grid-button' viewBox='0 0 16 16'>
                        <path d='M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z'/>
                        </svg>
                    </button>
                </div>
            </div>            
            
            <div className='products-container'>
                {showProducts()}
            </div>
            
            {viewProduct === false ? null : 
                <div className='view-product-container'>
                    <button onClick={() => toggleViewProduct([], undefined)}>X</button>
                    {/*
                    [name, price, quantity, source, category, reviews, i]
                    */}
                    <div className='view-product'>
                        <img src={productInfo[3]}></img>
                        <div className='view-product-info'>
                            <p className='view-product-name'>{productInfo[0]}</p>
                            <div className='view-product-reviews'>
                                <div className='view-product-stars'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star-half-stroke' aria-hidden='true'></i>
                                </div>                                
                                <a href='#'>({productInfo[5]} Reviews)</a>
                            </div>
                            <p className='view-product-price'>{productInfo[1]}</p>
                            <div className='quantity-cart-container' >
                                <div className='quantity-container'>
                                    <button onClick={() => setQuantity(productInfo[2]+',', 'add', productInfo[6])}>+</button>
                                    <p>{productQty}</p>
                                    <button onClick={() => setQuantity(productInfo[2]+',', 'sub', productInfo[6])}>-</button>
                                </div>
                                <button onClick={() => addToCart(productInfo[6])}>Add to Cart</button>
                            </div> 
                        </div>                                               
                    </div>
                </div>
            }
        </div>
    )
}
export default Shop;