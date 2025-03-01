import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../Contexts/CartItemsContext';

function Checkout(){
    const { productsData, cartItems, updateCart } = useCart();
    const [inCart, setInCart] = useState('');
    const [subtotal, setSubtotal] = useState(0);
    let percentOff = 0;
    let date = new Date();
    let today = date.getDate();
        if(today < 10){
            today = '0' + today;
        }
    let tomorrow1 = new Date(date);
        tomorrow1.setDate(tomorrow1.getDate() + 1);
    let tomorrow2 = tomorrow1.getDate();
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
    let time = new Date();
        time = time.getHours();
    const codes = [['REACTJS', 10], ['JAVASCRIPT', 20]];
    const [inputCode, setInputCode] = useState('');
    let submittedCode = '';
    const [codeValid, setCodeValid] = useState('');
    const [radioBtnVal, setRadioBtnVal] = useState('');

    const onStorageUpdate = (e) => {
        const { key, newValue } = e;
        if (key === 'inCart') {
          setInCart(newValue);
        }
    };

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

    useEffect(() => {
        setInCart(localStorage.getItem('inCart') || '');
        setSubtotal(localStorage.getItem('subtotal') || '');
        window.addEventListener('storage', onStorageUpdate);
        return () => {
          window.removeEventListener('storage', onStorageUpdate);
        };
    }, []);

    function deleteItem(productQty, productName){
        updateCart(productQty, productName, 'delete');
    }
    
    const getItemsInCart = () =>{
        const itemsArr = [];

        for(let i = 0; i < productsData.length; i++){
            if(cartItems.includes(productsData[i].Name)){
                const quantity = cartItems.filter(element => element === productsData[i].Name).length;
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
        return (
            itemsArr
        )
    }
    
    const submitForm = (e) =>{
        e.preventDefault()
    }

    const calculateTotal = () =>{
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
        tax = Math.round(((total*100)*.056))/100 //Tax rate: 5.6%
        total = total + tax

        if(radioBtnVal === 'Delivery'){
            shipping = '20.00'
            total = ((total * 100) + 2000)/100
        }
        
        tax = addDecimal(tax)
        return(//shange to ul          
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
        <main className='checkout-page'>
            <NavLink to='/cart'>
                <button className='back-to-cart'>
                    <i className='fas fa-arrow-left'></i> Back to cart
                </button>
            </NavLink>
            <h3>Checkout</h3>
            <p>You have {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart.</p>
            <div className='items-in-cart'>                
                {cartItems.length === 0 ? <p className='cart-empty'>Your cart is empty.</p>
                    : getItemsInCart()}
            </div>
            {calculateTotal()}
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
                                <input type='email' className='font-small' required></input>
                                <label className='font-extra-small'>Email <i className='fas fa-asterisk'></i></label>
                            </div>
                            <div className='input-item'>
                                <input type='tel' className='font-small' required></input>
                                <label className='font-extra-small'>Phone Number <i className='fas fa-asterisk'></i></label>
                            </div>                                
                        </div>
                    </div>
                </div>
                <div className='pickup-delivery-container'>
                    <div className='form-div'>
                        <h4>Pickup or Delivery</h4>
                        <div className='pickup-delivery-input'>
                            <div>
                                <input onChange={() => onChangeValue('Pickup')} type='radio' value='pickup' id='pickup' name='pickupDelivery' checked/>
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
        </main>
    )
}
export default Checkout;