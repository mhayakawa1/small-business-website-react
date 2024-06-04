import React, { useState } from 'react';

function Category(props){
    const [gridNum, setGridNum] = useState(3);
    const [viewProduct, setViewProduct] = useState(false);
    const [productInfo, setProductInfo] = useState({});
    const [sortBy, setSortBy] = useState('featured');
    const [productQty, setProductQty] = useState(0);
    const [productSorting, setProductSorting] = useState(props.products);

    const toggleSorting = (event) => {
        setSortBy(event.target.value)
           
        const productsData = props.products
        let alphabetical = true
        if(event.target.value.length === 3){
            alphabetical = true
        }else{
            alphabetical = false
        }

        if(event.target.value === 'featured'){
            setProductSorting(props.products)
        }else{
            productsData.sort(function (a, b) {
                if(a[alphabetical ? 'Name' : 'Price'] < b[alphabetical ? 'Name' : 'Price']){
                    return -1;
                }
                if(a[alphabetical ? 'Name' : 'Price'] > b[alphabetical ? 'Name' : 'Price']){
                    return 1;
                }
                return 0;
                }
            )

            if(event.target.value === 'high-low'|| event.target.value === 'z-a'){
                productsData.reverse()
            }
            setProductSorting(productsData)
        }
        
    }

    const renderProducts = () =>{
        const productsArr = []
            for(let i = 0; i < productSorting.length; i++){
                const productCard = 
                <div key={i} className={`product-card-container ${gridNum === 3 ? 'grid3 grid1' : 'grid2'}`}>
                    <button onClick={() => toggleViewProduct(productSorting[i], i)}>
                        <img src={productSorting[i].ImageSource} className={`product-image ${gridNum === 3 ? 'grid-image-3 grid-image-1' : 'grid-image-2'}`}></img>
                    </button>                    
                    <div className='product-info'>
                        <p className='product-name font-small'>{productSorting[i].Name}</p>
                        <p className='product-price font-small'>${productSorting[i].Price}</p>
                    </div>
                </div>
                if(props.category === 'Bestsellers' && (/true/).test(productSorting[i].Bestseller) === true){
                    productsArr.push(productCard)
                }else if(props.category === productSorting[i].Category){
                    productsArr.push(productCard)
                }
            }
        return(
            productsArr
        )
    }

    const shopGridButton = (num) =>{
        setGridNum(num)
    }

    const setQuantity = (op) =>{        
        if(op === 'add' && productQty < 15){
            setProductQty(productQty+1);
        }else if(op === 'sub' && productQty >= 1){
            setProductQty(productQty-1);
        }
    }

    const addToCart = (productQty, productName) => {
        props.clickHandler(productQty, productName, 'add')
    }
    
    const toggleViewProduct = (product, i) =>{
        setViewProduct((bool) => !bool);
        setProductInfo(product);
        setProductQty(props.cart.filter(i => i === product.Name).length)
        Object.defineProperty(product, 'Index', {
            value: i
        })
    }

    return(
        <main className='shop-page'>
            <section className='shop-header'>
                <div className='shop-header-container'>
                    <h1>{props.category}</h1>
                </div>
            </section>

            <div className='shop-menu'>
                <div className='sorting-dropdown'>
                    <label htmlFor='sorting-options' className='font-small'>Sort By: </label>
                    <select onChange={toggleSorting} name='sorting-options' className='sorting-options font-small'>
                        <option name='featured' value='featured' className='font-small'>Featured</option>
                        <option name='a-z' value='a-z' className='font-small'>A-Z</option>
                        <option name='z-a' value='z-a' className='font-small'>Z-A</option>
                        <option name='low-high' value='low-high' className='font-small'>Price (Low to High)</option>
                        <option name='high-low' value='high-low' className='font-small'>Price (High to Low)</option>
                    </select>
                </div>
                <div className='shop-menu-buttons'>
                    <button className='grid-button-1' onClick={() => shopGridButton(3)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-square" viewBox="0 0 16 16">
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
            
            <section className='products-container'>
                {sortBy === '' ? renderProducts() : renderProducts()}
            </section>
            
            {viewProduct === false ? null : 
                <div className='view-product-container'>
                    <div className='view-product'>
                        <img src={productInfo.ImageSource}></img>
                        <div className='right-panel'>
                            <button className='exit-view' onClick={() => toggleViewProduct([], undefined)}>
                                <i className='fa-solid fa-x'></i>
                            </button>
                            <div className='view-product-info'>
                                <p className='view-product-name'>{productInfo.Name}</p>
                                <div className='view-product-reviews'>
                                    <div className='view-product-stars'>
                                        <i className='fa fa-star font-extra-small'></i>
                                        <i className='fa fa-star font-extra-small'></i>
                                        <i className='fa fa-star font-extra-small'></i>
                                        <i className='fa fa-star font-extra-small'></i>
                                        <i className='fa fa-star-half-stroke font-extra-small' aria-hidden='true'></i>
                                    </div>              
                                    <a href='#' className='font-extra-small'>({productInfo.Ratings} Ratings)</a>
                                </div>
                                <p className='view-product-price'>${productInfo.Price}</p>
                                <div className='quantity-cart-container' >
                                    <div className='quantity-container'>
                                        <button onClick={() => setQuantity('sub')}>-</button>
                                        <p>{productQty}</p>
                                        <button onClick={() => setQuantity('add')}>+</button>
                                    </div>
                                    <button className='add-to-cart font-small' onClick={() => addToCart(productQty, productInfo.Name)}>Add to Cart</button>
                                </div>
                            </div>
                            <div className='share-container'>
                                <p className='font-extra-small'>Share:</p>
                                <div className='share-social-media'>
                                    <a><i className='fab fa-instagram font-extra-small' title='Instagram' alt='Instagram link'></i></a>
                                    <a><i className='fab fa-facebook font-extra-small' title='Facebook' alt='Facebook link'></i></a>
                                    <a><i className='fab fa-pinterest font-extra-small' title='Pinterest' alt='Pinterest link'></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </main>
    )
}
export default Category;