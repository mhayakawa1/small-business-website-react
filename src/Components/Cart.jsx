import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
const placeholderImg = 'https://gildasclubgr.org/wp-content/uploads/2019/02/no-image.jpg';

function Cart(){
    const [products, setProducts] = useState([ 
        ['Lorem ipsum', '10.00', 0, 'https://images.pexels.com/photos/4022206/pexels-photo-4022206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['dolor sit amet', '12.00', 0, 'https://images.pexels.com/photos/8903960/pexels-photo-8903960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['consectetur adipiscing', '10.00', 0, 'https://images.pexels.com/photos/4466625/pexels-photo-4466625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['elit sed do', '12.00', 0, 'https://images.pexels.com/photos/5414339/pexels-photo-5414339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['eiusmod tempor', '10.00', 0, 'https://images.pexels.com/photos/4466545/pexels-photo-4466545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['incididunt ut', '12.00', 0, 'https://images.pexels.com/photos/5414333/pexels-photo-5414333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['labore et dolore', '10.00', 0, 'https://images.pexels.com/photos/6913841/pexels-photo-6913841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['magna aliqua', '12.00', 0, 'https://images.pexels.com/photos/4499854/pexels-photo-4499854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Bestsellers'],
        ['Vel quam elementum', '10.00', 0, 'https://images.pexels.com/photos/6913829/pexels-photo-6913829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['pulvinar etiam', '12.00', 0, 'https://images.pexels.com/photos/13804370/pexels-photo-13804370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['Vestibulum lorem', '10.00', 0, 'https://images.pexels.com/photos/6913841/pexels-photo-6913841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['sed risus ultricies', '12.00', 0, 'https://images.pexels.com/photos/9252957/pexels-photo-9252957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['tristique nulla', '10.00', 0, 'https://images.pexels.com/photos/4428629/pexels-photo-4428629.jpeg', 'Sympathy'],
        ['aliquet enim', '12.00', 0, 'https://images.pexels.com/photos/13849767/pexels-photo-13849767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['Scelerisque viverra', '10.00', 0, 'https://images.pexels.com/photos/1109561/pexels-photo-1109561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['mauris in aliquam', '12.00', 0, 'https://images.pexels.com/photos/11831038/pexels-photo-11831038.jpeg', 'Sympathy'],
        ['Diam quis enim', '10.00', 0, 'https://images.pexels.com/photos/13250577/pexels-photo-13250577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['lobortis scelerisque', '12.00', 0, 'https://images.pexels.com/photos/4022206/pexels-photo-4022206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sympathy'],
        ['fermentum dui', '10.00', 0, 'https://images.pexels.com/photos/12511442/pexels-photo-12511442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['faucibus elit', '12.00', 0, 'https://images.pexels.com/photos/6913749/pexels-photo-6913749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['duis tristique', '10.00', 0, 'https://images.pexels.com/photos/6913747/pexels-photo-6913747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['sollicitudin nibh', '12.00', 0, 'https://images.pexels.com/photos/8903960/pexels-photo-8903960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['Et ultrices', '10.00', 0, 'https://images.pexels.com/photos/5713339/pexels-photo-5713339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['neque ornare', '12.00', 0, 'https://images.pexels.com/photos/5706233/pexels-photo-5706233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['aenean euismod', '10.00', 0, 'https://images.pexels.com/photos/8245520/pexels-photo-8245520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['elementum non', '12.00', 0, 'https://images.pexels.com/photos/5566042/pexels-photo-5566042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['diam phasellus', '10.00', 0, 'https://images.pexels.com/photos/1179026/pexels-photo-1179026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['lorem diam in', '12.00', 0, 'https://images.pexels.com/photos/5414333/pexels-photo-5414333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Love & Romance'],
        ['arcu cursus', '10.00', 0, 'https://images.pexels.com/photos/8264834/pexels-photo-8264834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['euismod quis', '12.00', 0, 'https://images.pexels.com/photos/5414339/pexels-photo-5414339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['viverra nibh', '10.00', 0, 'https://images.pexels.com/photos/4467128/pexels-photo-4467128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['Senectus et netus', '12.00', 0, 'https://images.pexels.com/photos/6913757/pexels-photo-6913757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['et malesuada fames', '10.00', 0, 'https://images.pexels.com/photos/4464208/pexels-photo-4464208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['ac turpis egestas', '12.00', 0, 'https://images.pexels.com/photos/4041420/pexels-photo-4041420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['Enim praesent', '10.00', 0, 'https://images.pexels.com/photos/8976495/pexels-photo-8976495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['elementum facilisis', '12.00', 0, 'https://images.pexels.com/photos/6913052/pexels-photo-6913052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['Leo a diam', '10.00', 0, 'https://images.pexels.com/photos/5706559/pexels-photo-5706559.jpeg', 'Get Well'],
        ['sollicitudin tempor', '12.00', 0, 'https://images.pexels.com/photos/4499854/pexels-photo-4499854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Get Well'],
        ['arcu cursus', '10.00', 0, 'https://images.pexels.com/photos/6913056/pexels-photo-6913056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['euismod quis', '12.00', 0, 'https://images.pexels.com/photos/4207475/pexels-photo-4207475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['viverra nibh', '10.00', 0, 'https://images.pexels.com/photos/7063876/pexels-photo-7063876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['Senectus et netus', '12.00', 0, 'https://images.pexels.com/photos/13263945/pexels-photo-13263945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['et malesuada fames', '10.00', 0, 'https://images.pexels.com/photos/9085807/pexels-photo-9085807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['ac turpis egestas', '12.00', 0, 'https://images.pexels.com/photos/4466545/pexels-photo-4466545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['Enim praesent', '10.00', 0, 'https://images.pexels.com/photos/4466625/pexels-photo-4466625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Birthday'],
        ['elementum facilisis', '12.00', 0, 'https://images.unsplash.com/photo-1648993880071-188101660605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'Birthday'],
        ['Leo a diam', '10.00', 0, 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80', 'Birthday'],
        ['sollicitudin tempor', '12.00', 0, 'https://images.unsplash.com/photo-1589242797586-3d9a39cd9277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379&q=80', 'Birthday']
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