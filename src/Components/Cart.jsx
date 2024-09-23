import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import axios from 'axios';

function Cart(props){
    let subtotal = 0
    const navButtonStyles = () => ({
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

    useEffect(() => {
        fetchProductsData();
    }, []);
    
    function deleteItem(productQty, productName){
        props.clickHandler(productQty, productName, 'delete')
    }
    
    const getItemsInCart = () =>{
        const itemsArr = [];

        for(let i = 0; i < productsData.length; i++){
            if(props.cart.includes(productsData[i].Name)){
                const quantity = props.cart.filter(element => element === productsData[i].Name).length;
                subtotal = subtotal+productsData[i].Price*quantity;
                localStorage.setItem('subtotal', subtotal+productsData[i].Price*quantity);
                itemsArr.push(
                    <div key={i} className='cart-product'>
                        <img src={productsData[i].ImageSource} className='cart-product-image'></img>
                        <p className='cart-product-name'>{productsData[i].Name}</p>
                        <p className='cart-unit-price'>${productsData[i].Price}</p>
                        <p className='cart-quantity'>x{quantity}</p>
                        <button className='delete-cart-item' onClick={() => deleteItem(quantity, productsData[i].Name)}><i className='fas fa-x'></i></button>
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
console.log(props.cart)
    return(
        <main className='cart-page'>
            <div className='shop-header'>
                <div className='shop-header-container'>
                    <h1>Your Cart</h1>
                </div>
            </div>
            <div className='cart-container'>
                <div className='cart-table'>
                    <h3>Shopping Cart</h3>
                    <div className='items-in-cart'>
                        {props.cart.length > 0 ? 
                            <ul className='cart-table-headers'>
                                <li className='font-small'>Product:</li>
                                <li className='font-small'>Unit Price:</li>
                                <li className='font-small'>Quantity:</li>
                            </ul>
                        : null
                        }
                    {props.cart.length === 0 ? <p className='font-extra-small cart-empty'>Your cart is empty.</p>
                        : getItemsInCart()}
                    </div>
                </div>
                <div className='summary-container'>
                    <h3>Order Summary</h3>
                    <div className='summary'>
                        <div>
                            <p className='font-small'>Items: {props.cart.length}</p>
                            <p className='font-small'>Subtotal: ${subtotal}</p>
                            <p className='font-extra-small'>Tax, shipping and discounts calculated at checkout</p>
                        </div>                        
                        <button className={`checkout-button ${props.cart.length === 0 ? 'btn-disabled' : null}`}>
                            <NavLink to='/checkout' style={{navButtonStyles}} className='nav-link-button'>
                                Checkout<i className='fas fa-arrow-right'></i>
                            </NavLink>
                        </button>
                    </div>                    
                </div>
            </div>
        </main>
    )
}
export default Cart;