import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import axios from 'axios';

function Cart(props){
    const [inCart, setInCart] = useState('');
    let subtotal = 0
    const navButtonStyles = ({ isActive }) => ({
        width: '8rem'
    })

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

    const fetchProductsData = () => {
        const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4r5F3JQ2tlhqi0PnFhlBvHcY-W-DWceYwlKITFz9afma_JAwDmH56Kmywig9tWNsxkUZ64MGT3Nnp/pub?output=csv';
        axios.get(url)
        .then((response) => {
            const parsedData = parseCSV(response.data);
            setProductsData(parsedData);
        })
        .catch((error) => {
            console.error('Error fetching CSV data:', error);
        })
    }
        
    const onStorageUpdate = (e) => {
        const { key, newValue } = e;
        if (key === 'inCart') {
          setInCart(newValue);
        }
      };
    
    useEffect(() => {
        fetchProductsData();
        setInCart(localStorage.getItem('inCart') || '');
        if(inCart === ','){
            setInCart('')
            localStorage.setItem('inCart', '')
        }
        window.addEventListener('storage', onStorageUpdate);
        return () => {
          window.removeEventListener('storage', onStorageUpdate);
        };
    }, []);
    
    function deleteItem(productQty, productName){
        props.clickHandler(productQty, productName, 'delete')
    }
    
    const getItemsInCart = () =>{//render a div for every product and calculate subtotal
        const split = inCart.split(',');
        const itemsArr = [];

        for(let i = 0; i < productsData.length; i++){
            if(props.data.includes(productsData[i].Name)){
                const quantity = props.data.filter(element => element === productsData[i].Name).length;
                subtotal = subtotal+productsData[i].Price*quantity;
                localStorage.setItem('subtotal', subtotal+productsData[i].Price*quantity);
                itemsArr.push(
                    <div key={i} className='cart-product'>
                        <img src={productsData[i].ImageSource} className='cart-product-image'></img>
                        <p className='cart-product-name'>{productsData[i].Name}</p>
                        <p className='cart-unit-price'>${productsData[i].Price}</p>
                        <p className='cart-quantity'>x{quantity}</p>
                        <button className='cart-item-button' onClick={() => deleteItem(quantity, productsData[i].Name)}><i className='fas fa-x'></i></button>
                    </div>
                )                
            }
        }

        subtotal.toString()
        if(/\./.test(subtotal) === false){
            subtotal = subtotal + '.00';
            localStorage.setItem('subtotal', subtotal)
        }
        if(subtotal[subtotal.length - 2] === '.'){
            subtotal = subtotal + '0'
            localStorage.setItem('subtotal',  subtotal)
        }

        return (
            itemsArr
        )
    }

    return(
        <div>
            <div className='shop-header'>
                <img className='shop-header-background' src='https://images.pexels.com/photos/5980208/pexels-photo-5980208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
                <div className='shop-header-container'>
                    <img className='logo shop-logo' src={logo}></img>
                    <h1>Lorem Ipsum Dolor</h1>
                    <h2>Your Cart</h2>
                </div>
            </div>
            <div className='cart-page'>            
                <div className='cart-container'>
                    <div className='items-in-cart'>
                        <div className='cart-table-header'>
                            <div className='column-names'>
                                <p className='column-name column-name-product'>Product:</p>
                                <p className='column-name'>Unit Price:</p>
                                <p className='column-name'>Quantity:</p>
                            </div>
                        </div>
                    {props.data.length === 0 ? <p className='cart-empty'>Your cart is empty.</p>
                        : getItemsInCart()}
                    </div>
                </div>
                <div className='subtotal-checkout-container'>
                    <h3><i className='fas fa-shopping-cart cart-shopping-cart'></i> 
                        You have {props.data.length} {inCart !== '' && inCart.includes(',') === false ? 'item' : 'items'} in your cart.</h3>
                    <h4 className='cart-subtotal'>Subtotal: ${subtotal}</h4>
                    <p>Tax, shipping and discounts calculated at checkout</p>
                    <button className='checkout-button'>
                        <NavLink to='/checkout' style={{navButtonStyles}} className='nav-link-button'>
                            Checkout<i className='fas fa-arrow-right'></i>
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Cart;