import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

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

function Cart(){
    const [products, setProducts] = useState([
        ['Lobortis scelerisque', '$45.00', 0, Sympathy10, 'Bestsellers'],
        ['sollicitudin nibh', '$23.00', 0, LoveRom4, 'Bestsellers'],
        ['dignissim cras', '$32.00', 0, Birthday7, 'Bestsellers'],
        ['euismod quis', '$17.00', 0, GetWell2, 'Bestsellers'],
        ['ullamcorper', '$25.00', 0, Birthday6, 'Bestsellers'],
        ['lorem diam in', '$10.00', 0, LoveRom10, 'Bestsellers'],
        ['Vestibulum lorem', '$30.00', 0, Sympathy3, 'Bestsellers'],
        ['sollicitudin tempor', '$28.00', 0, GetWell10, 'Bestsellers'],
        
        ['Vel quam elementum', '$20.00', 0, Sympathy1, 'Sympathy'],
        ['pulvinar etiam', '$32.00', 0, Sympathy2, 'Sympathy'],
        ['Vestibulum lorem', '$30.00', 0, Sympathy3, 'Sympathy'],
        ['sed risus ultricies', '$22.00', 0, Sympathy4, 'Sympathy'],
        ['tristique nulla', '$42.00', 0, Sympathy5, 'Sympathy'],
        ['aliquet enim', '$38.00', 0, Sympathy6, 'Sympathy'],
        ['Scelerisque viverra', '$23.00', 0, Sympathy7, 'Sympathy'],
        ['mauris in aliquam', '$41.00', 0, Sympathy8, 'Sympathy'],
        ['Diam quis enim', '$47.00', 0, Sympathy9, 'Sympathy'],
        ['lobortis scelerisque', '$45.00', 0, Sympathy10, 'Sympathy'],

        ['fermentum dui', '$21.00', 0, LoveRom1, 'Love & Romance'],
        ['faucibus elit', '$19.00', 0, LoveRom2, 'Love & Romance'],
        ['duis tristique', '$19.00', 0, LoveRom3, 'Love & Romance'],
        ['sollicitudin nibh', '$23.00', 0, LoveRom4, 'Love & Romance'],
        ['Et ultrices', '$38.00', 0, LoveRom5, 'Love & Romance'],
        ['neque ornare', '$25.00', 0, LoveRom6, 'Love & Romance'],
        ['aenean euismod', '$32.00', 0, LoveRom7, 'Love & Romance'],
        ['elementum non', '$30.00', 0, LoveRom8, 'Love & Romance'],
        ['diam phasellus', '$36.00', 0, LoveRom9, 'Love & Romance'],
        ['lorem diam in', '$10.00', 0, LoveRom10, 'Love & Romance'],

        ['arcu cursus', '$22.00', 0, GetWell1, 'Get Well'],
        ['euismod quis', '$17.00', 0, GetWell2, 'Get Well'],
        ['viverra nibh', '$18.00', 0, GetWell3, 'Get Well'],
        ['Senectus et netus', '$24.00', 0, GetWell4, 'Get Well'],
        ['et malesuada fames', '$20.00', 0, GetWell5, 'Get Well'],
        ['ac turpis egestas', '$17.00', 0, GetWell6, 'Get Well'],
        ['Enim praesent', '$25.00', 0, GetWell7, 'Get Well'],
        ['elementum facilisis', '$15.00', 0, GetWell8, 'Get Well'],
        ['Leo a diam', '$32.00', 0, GetWell9, 'Get Well'],
        ['sollicitudin tempor', '$28.00', 0, GetWell10, 'Get Well'],

        ['Suspendisse in', '$21.00', 0, Birthday1, 'Birthday'],
        ['est ante in', '$19.00', 0, Birthday2, 'Birthday'],
        ['Vestibulum', '$19.00', 0, Birthday3, 'Birthday'],
        ['rhoncus est', '$23.00', 0, Birthday4, 'Birthday'],
        ['pellentesque elit', '$38.00', 0, Birthday5, 'Birthday'],
        ['ullamcorper', '$25.00', 0, Birthday6, 'Birthday'],
        ['dignissim cras', '$32.00', 0, Birthday7, 'Birthday'],
        ['Mattis nunc sed', '$30.00', 0, Birthday8, 'Birthday'],
        ['blandit libero', '$36.00', 0, Birthday9, 'Birthday'],
        ['Turpis in eu', '$10.00', 0, Birthday10, 'Birthday']
    ]);
    const [prices, setPrices] = useState([
        ['Lorem ipsum', '10.00'],
        ['dolor sit amet', '12.00'],
        ['consectetur adipiscing', '10.00'],
        ['elit sed do', '12.00'],
        ['eiusmod tempor', '10.00'],
        ['incididunt ut', '12.00'],
        ['labore et dolore', '10.00'],
        ['magna aliqua', '12.00'],
        ['Vel quam elementum', '10.00'],
        ['pulvinar etiam', '12.00'],
        ['Vestibulum lorem', '10.00'],
        ['sed risus ultricies', '12.00'],
        ['tristique nulla', '10.00'],
        ['aliquet enim', '12.00'],
        ['Scelerisque viverra', '10.00'],
        ['mauris in aliquam', '12.00'],
        ['Diam quis enim', '10.00'],
        ['lobortis scelerisque', '12.00'],
        ['fermentum dui', '10.00'],
        ['faucibus elit', '12.00'],
        ['duis tristique', '10.00'],
        ['sollicitudin nibh', '12.00'],
        ['Et ultrices', '10.00'],
        ['neque ornare', '12.00'],
        ['aenean euismod', '10.00'],
        ['elementum non', '12.00'],
        ['diam phasellus', '10.00'],
        ['lorem diam in', '12.00'],
        ['arcu cursus', '10.00'],
        ['euismod quis', '12.00'],
        ['viverra nibh', '10.00'],
        ['Senectus et netus', '12.00'],
        ['et malesuada fames', '10.00'],
        ['ac turpis egestas', '12.00'],
        ['Enim praesent', '10.00'],
        ['elementum facilisis', '12.00'],
        ['Leo a diam', '10.00'],
        ['sollicitudin tempor', '12.00'],
        ['arcu cursus', '10.00'],
        ['euismod quis', '12.00'],
        ['viverra nibh', '10.00'],
        ['Senectus et netus', '12.00'],
        ['et malesuada fames', '10.00'],
        ['ac turpis egestas', '12.00'],
        ['Enim praesent', '10.00'],
        ['elementum facilisis', '12.00'],
        ['Leo a diam', '10.00'],
        ['sollicitudin tempor', '12.00']

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

    function deleteItem(productItem){
        let index = products.indexOf(productItem)
        setQuantities(quantities.replace(quantities.charAt(index*2), '0'))
        localStorage.setItem('quantities', quantities.replace(quantities.charAt(index*2), '0'))

        const split = data.split(',');
        setData(data.replaceAll(productItem[0]+',', ''))
        localStorage.setItem('data', data.replaceAll(productItem[0]+',', ''))

        for(let i = 0; i < products.length; i++){
            if(products[i][0] === productItem[0]){
                products[i][2] = 0
            }
        }
        
        if(data === ''){
            setData('0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0')
            localStorage.setItem('data', '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0')
        }
    }
    
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
                        <p className='cart-unit-price'>${products[i][1]}</p>
                        <p className='cart-quantity'>{products[i][2]}</p>
                        <button className='cart-item-button' onClick={() => deleteItem(products[i])}><i className='fas fa-x'></i></button>
                    </div>
                )
            }
        }
        return (
            itemsArr
        )
    }
{/*
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
*/}
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
                //console.log(quantities)
                //console.log(quantities[i * 2])
                if(quantities[i * 2] > 0){
                    subtotal = subtotal + (Number(products[i][1]) * quantities[i * 2])
                    //console.log(subtotal)
                }
            }
        }
        {/*
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
            total = total + 20
        }*/}
        
        subtotal = addDecimal(subtotal)
    }
    calculateTotal()
    
    const submitForm = (e) =>{
        e.preventDefault()
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
                            {/*<h4><i className='fas fa-shopping-cart cart-shopping-cart'></i> You have {data.split(',').length - 1} {data.split(',').length - 1 === 1 ? 'item' : 'items'} in your cart.</h4>*/}
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
                    <h3><i className='fas fa-shopping-cart cart-shopping-cart'></i> You have {data.split(',').length - 1} {data.split(',').length - 1 === 1 ? 'item' : 'items'} in your cart.</h3>
                    <h4 className='cart-subtotal'>Subtotal: ${subtotal}</h4>
                    <p>Tax, shipping and discounts calculated at checkout</p>
                    <NavLink to='/checkout' className='checkout-link nav-link-button'>
                        <button style={{textDecoration: 'none'}} className='col-xs-1 checkout-button'>
                            Checkout<i className='fas fa-arrow-right'></i>
                        </button>
                    </NavLink>
                </div>            
            </div>
        </div>
    )
}
export default Cart;