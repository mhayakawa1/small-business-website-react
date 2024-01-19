import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Checkout(){
    const [inCart, setInCart] = useState('');
    {/*let subtotal = 0;*/}
    const [subtotal, setSubtotal] = useState(0);
    let percentOff = 0;

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
        if (key === 'inCart') {
          setInCart(newValue);
        }
    };

    function deleteItem(productItem){        
        setInCart(inCart.replaceAll(productItem, '').replaceAll(',,', ','))
        localStorage.setItem('inCart', inCart.replaceAll(productItem, '').replaceAll(',,', ','))
    }
    
    const getItemsInCart = () =>{
        const split = inCart.split(',');
        const itemsArr = [];

        for(let i = 0; i < productsData.length; i++){
            if(split.includes(productsData[i].Name)){
                const quantity = split.filter(element => element === productsData[i].Name).length;
                itemsArr.push(
                    <div key={i} className='cart-product'>
                        <img src={productsData[i].ImageSource} className='cart-product-image'></img>
                        <p className='cart-product-name'>{productsData[i].Name}</p>
                        <p className='cart-unit-price'>${productsData[i].Price}</p>
                        <p className='cart-quantity'>x{quantity}</p>
                        <button className='cart-item-button' onClick={() => deleteItem(productsData[i].Name)}><i className='fas fa-x'></i></button>
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

    {/*const calculateTotal = () =>{
        //get subtotal, tax(5.6%), discount(if any) and total    
        let split = inCart.split(',');
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
            for(let i = 0; i < productsData.length; i++){
                if(split.includes(productsData[i].Name)){
                    const quantity = split.filter(element => element === productsData[i].Name).length;
                    subtotal = subtotal + (Number(productsData[i].Price) * quantity)
                }
            }
        }
        
        total = subtotal
        console.log(total)
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
        
        //subtotal = addDecimal(subtotal)
        tax = addDecimal(tax)
        //total = addDecimal(total)        
    }*/}

    useEffect(() => {
        fetchProductsData();
        setInCart(localStorage.getItem('inCart') || '');
        setSubtotal(localStorage.getItem('subtotal') || '');
        //subtotal = localStorage.getItem('subtotal') || '';
        window.addEventListener('storage', onStorageUpdate);
        return () => {
          window.removeEventListener('storage', onStorageUpdate);
        };
    }, []);
    
    const submitForm = (e) =>{
        e.preventDefault()
    }
    //calculateTotal();

    const test = () =>{
        let discount = 0;
        let tax = 0;
        let shipping = 0;
        let total = Number(subtotal);
        function addDecimal(num){
            num = num.toString()      
            if(num.includes('.') === false){
                num = num + '.00'
            }if(num[num.length - 2] === '.'){
               num = num + '0'
            }
            return num
        }

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
        
        //setSubtotal(addDecimal(subtotal))
        tax = addDecimal(tax)
        //total = addDecimal(total)  
        return(            
            <div className='price-info'>
                <p className='font-extra-small'>Subtotal: ${subtotal}</p>
                <p className='font-extra-small'>Discount: {codeValid === true ? `-$${discount} (${percentOff}%)` : '$0.00'}</p>
                <p className='font-extra-small'>Tax: ${tax} (5.6%)</p>
                <p className='font-extra-small'>Shipping: ${shipping}</p>
                <p className='total'>Total: ${total}</p>
            </div>
        )
    }
    
    return(
        <div className='checkout-page'>
            <NavLink to='/cart' className='cart-link nav-link-button'>
                <button className='back-to-cart'>
                    <i className='fas fa-arrow-left'></i> Back to cart
                </button>
            </NavLink>
            <h3>Checkout</h3>
            <p>You have {inCart.split(',').filter(i => i !== '').length} {inCart !== '' && inCart.includes(',') === false ? 'item' : 'items'} in your cart.</p>
            <div className='items-in-cart'>                
                {inCart === '' ? <p className='cart-empty'>Your cart is empty.</p>
                    : getItemsInCart()}
            </div>
            {test()}
            {/*<div className='price-info'>
                <p className='font-extra-small'>Subtotal: ${subtotal}</p>
                <p className='font-extra-small'>Discount: {codeValid === true ? `-$${discount} (${percentOff}%)` : '$0.00'}</p>
                <p className='font-extra-small'>Tax: ${tax} (5.6%)</p>
                <p className='font-extra-small'>Shipping: ${shipping}</p>
                <p className='total'>Total: ${total}</p>
            </div>*/}
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
                                {inCart.split(',').length - 1 < 10 
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
                            {codeValid === true ? <p>Congratulations! You've earned {percentOff}% off.</p>
                                : codeValid === false ? <p>Sorry, this code is invalid.</p>
                                : ''}
                        </div>
                    </div>
                </div>
                <div className='submit-button-div'>
                    <button className='col-md-5 form-button submit-form' onClick={(e) => submitForm(e)}>Place Order</button>
                </div>    
            
            </form>
        </div>
    )
}
export default Checkout;