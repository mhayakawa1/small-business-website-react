import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../Contexts/CartItemsContext';

function Cart(){
    const { productsData, cartItems, updateCart } = useCart();
    let subtotal = 0
    const navButtonStyles = () => ({
        width: '8rem'
    }); 
    
    function deleteItem(productQty, productName){
        updateCart(productQty, productName);
    }

    const getItemsInCart = () =>{
        const itemsArr = [];

        for(let i = 0; i < productsData.length; i++){
            if(cartItems.includes(productsData[i].Name)){
                const quantity = cartItems.filter((item) => item === productsData[i].Name).length;
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
                        {cartItems.length > 0 ? 
                            <ul className='cart-table-headers'>
                                <li className='font-small'>Product:</li>
                                <li className='font-small'>Unit Price:</li>
                                <li className='font-small'>Quantity:</li>
                            </ul>
                        : null
                        }
                    {cartItems.length === 0 ? <p className='font-extra-small cart-empty'>Your cart is empty.</p>
                        : getItemsInCart()}
                    </div>
                </div>
                <div className='summary-container'>
                    <h3>Order Summary</h3>
                    <div className='summary'>
                        <div>
                            <p className='font-small'>Items: {cartItems.length}</p>
                            <p className='font-small'>Subtotal: ${subtotal}</p>
                            <p className='font-extra-small'>Tax, shipping and discounts calculated at checkout</p>
                        </div>                        
                        <button className={`checkout-button ${cartItems.length === 0 ? 'btn-disabled' : null}`}>
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