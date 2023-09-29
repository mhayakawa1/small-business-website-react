//import { Context } from'../Context'
import React, {useState, useEffect} from 'react';
//import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../logo.svg'
const placeholderImg = 'https://gildasclubgr.org/wp-content/uploads/2019/02/no-image.jpg';

{/*Goals
- Update header to be more professional, title, category, and logo with 
    plain background and fixed position
- Default category - all
- Allow filters - 
- Sort - AZ, ZA, Bestseller, Price low-high high-low
- Fix thumbnail sizes to look better with widow resizing
- Star rating and reviews

*/}

function Shop(){
    //B index: 0-1
    //S&GW index: 2-3
    const [products, setProducts] = useState([
        ['Lorem ipsum', '$10.00', 0, 'https://images.pexels.com/photos/4022206/pexels-photo-4022206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['dolor sit amet', '$12.00', 0, 'https://images.pexels.com/photos/8903960/pexels-photo-8903960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['consectetur adipiscing', '$10.00', 0, 'https://images.pexels.com/photos/4466625/pexels-photo-4466625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['elit sed do', '$12.00', 0, 'https://images.pexels.com/photos/5414339/pexels-photo-5414339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['eiusmod tempor', '$10.00', 0, 'https://images.pexels.com/photos/4466545/pexels-photo-4466545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['incididunt ut', '$12.00', 0, 'https://images.pexels.com/photos/5414333/pexels-photo-5414333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['labore et dolore', '$10.00', 0, 'https://images.pexels.com/photos/6913841/pexels-photo-6913841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['magna aliqua', '$12.00', 0, 'https://images.pexels.com/photos/4499854/pexels-photo-4499854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['Vel quam elementum', '$10.00', 0, 'https://images.pexels.com/photos/6913829/pexels-photo-6913829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['pulvinar etiam', '$12.00', 0, 'https://images.pexels.com/photos/13804370/pexels-photo-13804370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['Vestibulum lorem', '$10.00', 0, 'https://images.pexels.com/photos/6913841/pexels-photo-6913841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['sed risus ultricies', '$12.00', 0, 'https://images.pexels.com/photos/9252957/pexels-photo-9252957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['tristique nulla', '$10.00', 0, 'https://images.pexels.com/photos/4428629/pexels-photo-4428629.jpeg', 'Sympathy'],
        ['aliquet enim', '$12.00', 0, 'https://images.pexels.com/photos/13849767/pexels-photo-13849767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['Scelerisque viverra', '$10.00', 0, 'https://images.pexels.com/photos/1109561/pexels-photo-1109561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['mauris in aliquam', '$12.00', 0, 'https://images.pexels.com/photos/11831038/pexels-photo-11831038.jpeg', 'Sympathy'],
        ['Diam quis enim', '$10.00', 0, 'https://images.pexels.com/photos/13250577/pexels-photo-13250577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['lobortis scelerisque', '$12.00', 0, 'https://images.pexels.com/photos/4022206/pexels-photo-4022206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['fermentum dui', '$10.00', 0, 'https://images.pexels.com/photos/12511442/pexels-photo-12511442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['faucibus elit', '$12.00', 0, 'https://images.pexels.com/photos/6913749/pexels-photo-6913749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['duis tristique', '$10.00', 0, 'https://images.pexels.com/photos/6913747/pexels-photo-6913747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['sollicitudin nibh', '$12.00', 0, 'https://images.pexels.com/photos/8903960/pexels-photo-8903960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['Et ultrices', '$10.00', 0, 'https://images.pexels.com/photos/5713339/pexels-photo-5713339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['neque ornare', '$12.00', 0, 'https://images.pexels.com/photos/5706233/pexels-photo-5706233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['aenean euismod', '$10.00', 0, 'https://images.pexels.com/photos/8245520/pexels-photo-8245520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['elementum non', '$12.00', 0, 'https://images.pexels.com/photos/5566042/pexels-photo-5566042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['diam phasellus', '$10.00', 0, 'https://images.pexels.com/photos/1179026/pexels-photo-1179026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['lorem diam in', '$12.00', 0, 'https://images.pexels.com/photos/5414333/pexels-photo-5414333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['arcu cursus', '$10.00', 0, 'https://images.pexels.com/photos/8264834/pexels-photo-8264834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['euismod quis', '$12.00', 0, 'https://images.pexels.com/photos/5414339/pexels-photo-5414339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['viverra nibh', '$10.00', 0, 'https://images.pexels.com/photos/4467128/pexels-photo-4467128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['Senectus et netus', '$12.00', 0, 'https://images.pexels.com/photos/6913757/pexels-photo-6913757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['et malesuada fames', '$10.00', 0, 'https://images.pexels.com/photos/4464208/pexels-photo-4464208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['ac turpis egestas', '$12.00', 0, 'https://images.pexels.com/photos/4041420/pexels-photo-4041420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['Enim praesent', '$10.00', 0, 'https://images.pexels.com/photos/8976495/pexels-photo-8976495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['elementum facilisis', '$12.00', 0, 'https://images.pexels.com/photos/6913052/pexels-photo-6913052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['Leo a diam', '$10.00', 0, 'https://images.pexels.com/photos/5706559/pexels-photo-5706559.jpeg', 'Get Well'],
        ['sollicitudin tempor', '$12.00', 0, 'https://images.pexels.com/photos/4499854/pexels-photo-4499854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['arcu cursus', '$10.00', 0, 'https://images.pexels.com/photos/6913056/pexels-photo-6913056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['euismod quis', '$12.00', 0, 'https://images.pexels.com/photos/4207475/pexels-photo-4207475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['viverra nibh', '$10.00', 0, 'https://images.pexels.com/photos/7063876/pexels-photo-7063876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['Senectus et netus', '$12.00', 0, 'https://images.pexels.com/photos/13263945/pexels-photo-13263945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['et malesuada fames', '$10.00', 0, 'https://images.pexels.com/photos/9085807/pexels-photo-9085807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['ac turpis egestas', '$12.00', 0, 'https://images.pexels.com/photos/4466545/pexels-photo-4466545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['Enim praesent', '$10.00', 0, 'https://images.pexels.com/photos/4466625/pexels-photo-4466625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['elementum facilisis', '$12.00', 0, 'https://images.unsplash.com/photo-1648993880071-188101660605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'Birthday'],
        ['Leo a diam', '$10.00', 0, 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80', 'Birthday'],
        ['sollicitudin tempor', '$12.00', 0, 'https://images.unsplash.com/photo-1589242797586-3d9a39cd9277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379&q=80', 'Birthday']
    ]);

    const [data, setData] = useState('');
    const [quantities, setQuantities] = useState('0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0');

    const [inCart, setInCart] = useState([]);
    const [showCateg, setShowCateg] = useState('Bestsellers');
    const [gridNum, setGridNum] = useState(3);
    
    const onStorageUpdate = (e) => {
        const { key, newValue } = e;
        if (key === 'data') {
          setData(newValue);
        }
    };
    
    function addToCart(product, op, index){
            let array = quantities.split(',')
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
            array = addCommas(array)
            array.join('')
            setQuantities(array.join(''))            
            localStorage.setItem('quantities', array.join(''))
            setData(product + data)
            localStorage.setItem('data', product + data); 
            //console.log(quantities)
        }else if(op === 'sub' && array[index] < 1){
            return
        }else if(op === 'sub'){
            num = Number(array[index])-1
            array.splice(index, 1, num.toString())
            array = addCommas(array)
            array.join('')
            setQuantities(array.join(''))
            localStorage.setItem('quantities', array.join(''))
            setData(data.replace(product, ''))
            localStorage.setItem('data', data.replace(product, '')); 
        }
    }

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

    const showProducts = () =>{
        const productsArr = []
            for(let i = 0; i < products.length; i++){
                productsArr.push(
                    showCateg === products[i][4] ?
                    <div key={i} className={`product-card-container ${gridNum === 3 ? 'grid3 grid1' : 'grid2'}`}>
                        <div className='product-card'>
                            <img src={products[i][3]} className={`product-image ${gridNum === 3 ? 'grid-image-3 grid-image-1' : 'grid-image-2'}`}></img>
                            {/*<button className='magnify-button'><i className='fas fa-magnifying-glass'></i></button>*/}
                            <div className='product-info'>
                                <p className='product-name'>{products[i][0]}</p>
                                <p className='product-price'>{products[i][1]}</p>
                                <label className='add-to-cart'>Add to Cart</label>
                                <div className='alter-total'>
                                    <button onClick={() => addToCart(products[i][0]+',', 'add', i)} className='add-button'>+</button>
                                    <p className='quantity'>{quantities.split(',')[i]}</p>
                                    <button onClick={() => addToCart(products[i][0]+',','sub', i)} className='sub-button'>-</button>
                                </div>
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
                    <p><i className='fas fa-shopping-cart shop-shopping-cart'></i> {data.split(',').length - 1} {data.split(',').length - 1 === 1 ? 'item' : 'items'}</p> 
                    <button className='clear-cart-button' onClick={() => reset()}>Clear Cart</button>
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
                        <li><a className='dropdown-item' href='#' onClick={() => handleChange('Get Well')}>Get Well</a></li>
                        <li><a className='dropdown-item' href='#' onClick={() => handleChange('Love & Romance')}>Love & Romance</a></li>
                        <li><a className='dropdown-item' href='#' onClick={() => handleChange('Birthday')}>Birthday</a></li>
                    </ul>
                </div>
                <div className='shop-menu-buttons'>
                    <button className='grid-button-1' onClick={() => shopGridButton(3)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
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
        </div>
    )
}
export default Shop;