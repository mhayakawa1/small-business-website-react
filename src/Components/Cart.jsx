import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import axios from 'axios';

function Cart(){
    const [data, setData] = useState('');
    const [quantities, setQuantities] = useState('0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0');
    let subtotal = 0;
{/*color: '#173935',
        background: isActive ? '#E8908F' : '#E9A8A5',
        textDecoration: 'none',
        textAlign: 'center',
        fontFamily: 'Tajawal, sans-serif'*/}
    const navButtonStyles = ({ isActive }) => ({
        width: '8rem'
    })

    //Get minimum date for order
    let date = new Date()    
    let today = date.getDate()
        if(today < 10){
            today = '0' + today;
        }
    let tomorrow1 = new Date(date)
        tomorrow1.setDate(tomorrow1.getDate() + 1)
    let tomorrow2 = tomorrow1.getDate()
        if(tomorrow2 < 10){
            tomorrow2 = '0' + tomorrow2;
        }
    let month = date.getMonth() + 1;
        if(month < 10){
            month = '0' + month;
        }
    let year = date.getUTCFullYear();
    let time = new Date()
        time = time.getHours()

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
        if (key === 'data') {
          setData(newValue);
        }
      };
    
    useEffect(() => {
        fetchProductsData();
        setData(localStorage.getItem('data') || '');        
        setQuantities(localStorage.getItem('quantities') || '');
        window.addEventListener('storage', onStorageUpdate);
        return () => {
          window.removeEventListener('storage', onStorageUpdate);
        };
    }, []);

    function deleteItem(productItem){
        {/*let index = products.indexOf(productItem)
        setQuantities(quantities.replace(quantities.charAt(index*2), '0'))
        localStorage.setItem('quantities', quantities.replace(quantities.charAt(index*2), '0'))

        const split = data.split(',');
        setData(data.replaceAll(productItem[0]+',', ''))
        localStorage.setItem('data', data.replaceAll(productItem[0]+',', ''))

        for(let i = 0; i < products.length; i++){
            if(products[i][0] === productItem[0]){
                products[i][2] = 0
            }
        }*/}
    }
    
    const getItemsInCart = () =>{
        const split = data.split(',');
        const itemsArr = [];

        {/*for(let i = 0; i < split.length; i++){
            for(let j = 0; j < products.length; j++){
                if(split[i] === products[j][0] && products[j][2] < quantities.split(',')[j]){
                    products[j][2] = products[j][2] + 1
                }
            }
        }

        for(let i = 0; i < products.length; i++){
            if(products[i][2] > 0){
                itemsArr.push(
                    <div key={i} className='cart-product'>
                        <img src={products[i][3]} className='cart-product-image'></img>
                        <p className='cart-product-name'>{products[i][0]}</p>
                        <p className='cart-unit-price'>${products[i][1]}</p>
                        <p className='cart-quantity'>{products[i][2]}</p>
                        <button className='cart-item-button' onClick={() => deleteItem(products[i])}><i className='fas fa-x'></i></button>
                    </div>
                )
            }
        }*/}
        return (
            itemsArr
        )
    }

    const calculateTotal = () =>{
        //get subtotal, tax(5.6%), discount(if any) and total    

        function addDecimal(num){
            num = num.toString()      
            if(num.includes('.') === false){
                num = num + '.00'
            }if(num[num.length - 2] === '.'){
               num = num + '0'
            }
            return num
        }
        let split = quantities.split(',')
        {/*if(subtotal === 0){
            for(let i = 0; i < products.length; i++){
                if(split[i] > 0){
                    subtotal = subtotal + (Number(products[i][1]) * Number(split[i]))
                }
            }
        }*/}
        subtotal = addDecimal(subtotal)
    }
    calculateTotal()

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
                    {data === '' ? <p className='cart-empty'>Your cart is empty.</p>
                            : getItemsInCart()}
                    </div>
                </div>
                <div className='subtotal-checkout-container'>
                    <h3><i className='fas fa-shopping-cart cart-shopping-cart'></i> You have {data.split(',').filter(i => i !== '').length} {data.split(',').length === 1 ? 'item' : 'items'} in your cart.</h3>
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