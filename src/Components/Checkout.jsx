import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
import GetWell10 from '../ProductImages/Temporibus autem.jpeg';
import Birthday1 from '../ProductImages/Suspendisse in.png';
import Birthday2 from '../ProductImages/est ante in.png';
import Birthday3 from '../ProductImages/Occaecati cupiditate.png';
import Birthday4 from '../ProductImages/rhoncus est.png';
import Birthday5 from '../ProductImages/pellentesque elit.jpeg';
import Birthday6 from '../ProductImages/ullamcorper.jpeg';
import Birthday7 from '../ProductImages/dignissim cras.jpeg';
import Birthday8 from '../ProductImages/Mattis nunc sed.png';
import Birthday9 from '../ProductImages/blandit libero.png';
import Birthday10 from '../ProductImages/Turpis in eu.png';

const placeholderImg = 'https://gildasclubgr.org/wp-content/uploads/2019/02/no-image.jpg';

function Checkout(){
    const [products, setProducts] = useState([
        ['Lobortis scelerisque', '45.00', 0, Sympathy10, 'Bestsellers'],
        ['sollicitudin nibh', '23.00', 0, LoveRom4, 'Bestsellers'],
        ['dignissim cras', '32.00', 0, Birthday7, 'Bestsellers'],
        ['euismod quis', '17.00', 0, GetWell2, 'Bestsellers'],
        ['ullamcorper', '25.00', 0, Birthday6, 'Bestsellers'],
        ['lorem diam in', '10.00', 0, LoveRom10, 'Bestsellers'],
        ['Vestibulum lorem', '30.00', 0, Sympathy3, 'Bestsellers'],
        ['sollicitudin tempor', '28.00', 0, GetWell10, 'Bestsellers'],
        
        ['Vel quam elementum', '20.00', 0, Sympathy1, 'Sympathy'],
        ['pulvinar etiam', '32.00', 0, Sympathy2, 'Sympathy'],
        ['Vestibulum lorem', '30.00', 0, Sympathy3, 'Sympathy'],
        ['sed risus ultricies', '22.00', 0, Sympathy4, 'Sympathy'],
        ['tristique nulla', '42.00', 0, Sympathy5, 'Sympathy'],
        ['aliquet enim', '38.00', 0, Sympathy6, 'Sympathy'],
        ['Scelerisque viverra', '23.00', 0, Sympathy7, 'Sympathy'],
        ['mauris in aliquam', '41.00', 0, Sympathy8, 'Sympathy'],
        ['Diam quis enim', '47.00', 0, Sympathy9, 'Sympathy'],
        ['lobortis scelerisque', '45.00', 0, Sympathy10, 'Sympathy'],

        ['fermentum dui', '21.00', 0, LoveRom1, 'Love & Romance'],
        ['faucibus elit', '19.00', 0, LoveRom2, 'Love & Romance'],
        ['duis tristique', '19.00', 0, LoveRom3, 'Love & Romance'],
        ['sollicitudin nibh', '23.00', 0, LoveRom4, 'Love & Romance'],
        ['Et ultrices', '38.00', 0, LoveRom5, 'Love & Romance'],
        ['neque ornare', '25.00', 0, LoveRom6, 'Love & Romance'],
        ['aenean euismod', '32.00', 0, LoveRom7, 'Love & Romance'],
        ['elementum non', '30.00', 0, LoveRom8, 'Love & Romance'],
        ['diam phasellus', '36.00', 0, LoveRom9, 'Love & Romance'],
        ['lorem diam in', '10.00', 0, LoveRom10, 'Love & Romance'],

        ['arcu cursus', '22.00', 0, GetWell1, 'Get Well'],
        ['euismod quis', '17.00', 0, GetWell2, 'Get Well'],
        ['viverra nibh', '18.00', 0, GetWell3, 'Get Well'],
        ['Senectus et netus', '24.00', 0, GetWell4, 'Get Well'],
        ['et malesuada fames', '20.00', 0, GetWell5, 'Get Well'],
        ['ac turpis egestas', '17.00', 0, GetWell6, 'Get Well'],
        ['Enim praesent', '25.00', 0, GetWell7, 'Get Well'],
        ['elementum facilisis', '15.00', 0, GetWell8, 'Get Well'],
        ['Leo a diam', '32.00', 0, GetWell9, 'Get Well'],
        ['sollicitudin tempor', '28.00', 0, GetWell10, 'Get Well'],

        ['Suspendisse in', '21.00', 0, Birthday1, 'Birthday'],
        ['est ante in', '19.00', 0, Birthday2, 'Birthday'],
        ['Occaecati cupiditate', '19.00', 0, Birthday3, 'Birthday'],
        ['rhoncus est', '23.00', 0, Birthday4, 'Birthday'],
        ['pellentesque elit', '38.00', 0, Birthday5, 'Birthday'],
        ['ullamcorper', '25.00', 0, Birthday6, 'Birthday'],
        ['dignissim cras', '32.00', 0, Birthday7, 'Birthday'],
        ['Mattis nunc sed', '30.00', 0, Birthday8, 'Birthday'],
        ['blandit libero', '36.00', 0, Birthday9, 'Birthday'],
        ['Turpis in eu', '10.00', 0, Birthday10, 'Birthday']
    ]);

    const [data, setData] = useState('');
    const [quantities, setQuantities] = useState('0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0');
    let subtotal = 0;
    let percentOff = 0;
    let discount = 0;
    let tax = 0;
    let shipping = 0;
    let total = 0;

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
    let minDate = year + '-' + month + '-' + today;
    let tomorrowsDate = year + '-' + month + '-' + tomorrow2;
    let time = new Date()
        time = time.getHours()
    const codes = [['REACTJS', 10], ['JAVASCRIPT', 20]];
    const [inputCode, setInputCode] = useState('');
    let submittedCode = ''
    const [codeValid, setCodeValid] = useState('');
    const [radioBtnVal, setRadioBtnVal] = useState('')

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

    const getItemsInCart = () =>{
        const split = data.split(',');
        const itemsArr = [];

        for(let i = 0; i < split.length; i++){
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
                        <p className='cart-unit-price'>Unit Price: ${products[i][1]}</p>
                        <p className='cart-quantity'>Quantity: {products[i][2]}</p>
                    </div>
                )
            }
        }
        return (
            itemsArr
        )
    }

    const handleChange = (e) => {
        if(codeValid !== true){
            setInputCode(e)
        }
        
    }
 
    const submitCode = (e) => {
        e.preventDefault()
        submittedCode = inputCode.toLocaleUpperCase()
        let filtered = codes.filter(i => i[0] === submittedCode).flat()
        if(filtered.length > 0 && filtered.includes(submittedCode) === true){
            setCodeValid(true)
        }else if(submittedCode.length > 0){
            setCodeValid(false)
        }
    }

    const onChangeValue = (string) => {
        setRadioBtnVal(string)
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
        if(subtotal === 0){
            for(let i = 0; i < products.length; i++){
                if(quantities[i * 2] > 0){
                    subtotal = subtotal + (Number(products[i][1]) * quantities[i * 2])
                }
            }
        }
        
        total = subtotal
        if(codeValid === true){
            const findCode = codes.filter(i => i[0] === inputCode.toLocaleUpperCase()).flat()
            discount = findCode[1]
            percentOff = discount
            
            discount = addDecimal((discount * total)/100)
            total = ((total * 100) - (findCode[1] * total))/100
        }else{
            discount = 0
        }
        tax = Math.round(((total*100)*.056))/100
        total = total + tax

        if(radioBtnVal === 'Delivery'){
            shipping = '20.00'
            total = ((total * 100) + 2000)/100
        }
        
        subtotal = addDecimal(subtotal)
        tax = addDecimal(tax)
        total = addDecimal(total)
    }
    calculateTotal()
    
    const submitForm = (e) =>{
        e.preventDefault()
    }
    return(
        <div className='checkout-page'>
            <NavLink to='/cart' className='cart-link nav-link-button'>
                <button className='back-to-cart'>
                    <i className='fas fa-arrow-left'></i> Back to cart
                </button>
            </NavLink>
            <h3>Checkout</h3>
            <p>You have {data.split(',').length - 1} {data.split(',').length - 1 === 1 ? 'item' : 'items'} in your cart.</p>
            <div className='items-in-cart'>                
                {data === '' ? <p className='cart-empty'>Your cart is empty.</p>
                    : getItemsInCart()}
            </div>
            <form className='checkout-form'>
                <div className='customer-info'>
                    <div className='form-div'>
                        <h4>Name</h4>
                        <div className='name-container'>
                            <div className='input-item'>
                                <input type='text' className='font-small'></input>
                                <label className='font-extra-small'>First <i className='fas fa-asterisk'></i></label>
                            </div>
                            <div className='input-item'>
                                <input type='text' className='font-small'></input>
                                <label className='font-extra-small'>Last <i className='fas fa-asterisk'></i></label>
                            </div>
                        </div>
                    </div>
                    <div className='form-div'>
                        <h4>Contact Information</h4>
                        <div>
                            <div className='input-item'>
                                <input type='email' className='font-small'></input>
                                <label className='font-extra-small'>Email</label>
                            </div>
                            <div className='input-item'>
                                <input type='tel' className='font-small'></input>
                                <label className='font-extra-small'>Phone Number</label>
                            </div>                                
                        </div>
                    </div>
                </div>
                <div className='pickup-delivery-container'>
                    <div className='form-div'>
                        <h4>Pickup or Delivery</h4>
                        <div className='pickup-delivery-input'>
                            <div>
                                <input onChange={() => onChangeValue('Pickup')} type='radio' value='pickup' id='pickup' name='pickupDelivery'/>
                                <label htmlFor='pickup' className='font-small'>Pickup</label>
                            </div>
                            <div>
                                <input onChange={() => onChangeValue('Delivery')} type='radio' value='delivery' id='delivery' name='pickupDelivery'/>
                                <label htmlFor='delivery' className='font-small'>Delivery</label>
                            </div>
                            <div className='select-date-container'>
                                <label htmlFor='select-date' className='font-small'>Select a Date <i className='fas fa-asterisk'></i></label>
                                <p className='order-date-statement font-extra-small'>Large orders (10+ items) must be placed at least 1 day in advance. 
                                    Same-day delivery unavailable past 4pm MST. 
                                    Same-day pickup unavailable past 6pm MST.</p>
                                {data.split(',').length - 1 < 10 
                                    && ((radioBtnVal === 'Delivery' && time < 16) || (radioBtnVal === 'Pickup' && time < 18)) ?
                                    <input type='date' className='select-date font-extra-small' min={minDate}></input>
                                    : <input type='date' className='select-date font-extra-small' min={tomorrowsDate}></input>}
                            </div>
                        </div>
                    </div>
                    <div className='form-div'>
                        <h4>Delivery Address</h4>
                        <div className='delivery-address-container'>
                            <div className='input-item'>
                                {radioBtnVal === 'Delivery' ? <input type='text' className='font-small' required></input>
                                : <input type='text' className='font-small'></input>}
                                <label className='font-extra-small'>Street Address {radioBtnVal === 'Delivery' ? <i className='fas fa-asterisk'></i> : null}</label>
                            </div>
                            <div className='input-item'>
                                {radioBtnVal === 'Delivery' ? <input type='text' className='font-small' required></input>
                                : <input type='text' className='font-small'></input>}
                                <label className='font-extra-small'>Street Address Line 2</label>
                            </div>
                            <div className='input-item'>
                                {radioBtnVal === 'Delivery' ? <input type='text' className='font-small' required></input>
                                : <input type='text' className='font-small'></input>}
                                <label className='font-extra-small'>City {radioBtnVal === 'Delivery' ? <i className='fas fa-asterisk'></i> : null}</label>
                            </div>
                            <div className='input-item'>
                                {radioBtnVal === 'Delivery' ? <input type='text' className='font-small' required></input>
                                : <input type='text' className='font-small'></input>}
                                <label className='font-extra-small'>State {radioBtnVal === 'Delivery' ? <i className='fas fa-asterisk'></i> : null}</label>
                            </div>
                            <div className='input-item'>
                                {radioBtnVal === 'Delivery' ? <input type='number' className='font-small' required></input>
                                : <input type='number' className='font-small'></input>}
                                <label className='font-extra-small'>Zipcode {radioBtnVal === 'Delivery' ? <i className='fas fa-asterisk'></i> : null}</label>
                            </div> 
                        </div>
                    </div>               
                </div>
                <div className='billing-info'>
                    <div className='form-div'>
                        <h4>Debit or Credit Card</h4>
                        <div className='card-info-container'>
                            <div className='input-item'>
                                <input type='text' className='font-small'></input>
                                <label className='font-extra-small'>Cardholder's Name <i className='fas fa-asterisk'></i></label>
                            </div>
                            <div className='input-item'>
                                <input type='number' className='font-small'></input>
                                <label className='font-extra-small'>Credit Card Number <i className='fas fa-asterisk'></i></label>
                            </div>
                            <div className='input-item'>
                                <input type='number' className='font-small'></input>
                                <label className='font-extra-small'>Security Code <i className='fas fa-asterisk'></i></label>
                            </div>
                            <div className='input-item'>
                                <input type='month' className='font-small'></input>
                                <label className='font-extra-small'>Card Expiration <i className='fas fa-asterisk'></i></label>
                            </div>
                        </div>
                    </div> 
                    <div className='form-div'>
                        <h4>Coupon Code</h4>
                        <div className='input-item'>
                            <input type='text' className='input-code font-small' onChange={(e) => handleChange(e.target.value)}></input>
                            <button className='col-md-3 font-extra-small form-button submit-code' onClick={(e) => submitCode(e)}>Submit Code</button>
                            {codeValid === true ? <p>Congratulations! You've earned {`${percentOff}`}% off.</p>
                                : codeValid === false ? <p>Sorry, this code is invalid.</p>
                                : ''}
                        </div>
                    </div>                   
                </div>
                <div className='price-info'>
                    <p className='font-extra-small'>Subtotal: ${subtotal}</p>
                    <p className='font-extra-small'>Discount: {codeValid === true ? `-$${discount} (${percentOff}%)` : '$0.00'}</p>
                    <p className='font-extra-small'>Tax: ${tax} (5.6%)</p>
                    <p className='font-extra-small'>Shipping: ${shipping}</p>
                    <p className='total'>Total: ${total}</p>
                </div>
                <div className='submit-button-div'>
                    <button className='col-md-5 form-button submit-form' onClick={(e) => submitForm(e)}>Submit</button>
                </div>    
            
            </form>
        </div>
    )
}
export default Checkout;