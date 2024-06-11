import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Shop(props){
    const [gridNum, setGridNum] = useState(3);

    const [viewProduct, setViewProduct] = useState(false);
    const [productInfo, setProductInfo] = useState({});
    const [productQty, setProductQty] = useState(0);

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

    const getProductsData = () => {
        const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4r5F3JQ2tlhqi0PnFhlBvHcY-W-DWceYwlKITFz9afma_JAwDmH56Kmywig9tWNsxkUZ64MGT3Nnp/pub?output=csv';
        axios.get(url)
        .then((response) => {
            const parsedData = parseCSV(response.data);
            setProductsData(parsedData);
        })
        .catch((error) => {
            console.error('Error', error);
        })
    }
    
    useEffect(() => {
        getProductsData();
    }, []);

    const renderProducts = () =>{
        const productsArr = []
            for(let i = 0; i < productsData.length; i++){
                productsArr.push( <div key={i} className={`product-card-container ${gridNum === 3 ? 'grid3 grid1' : 'grid2'}`}
                onClick={() => toggleViewProduct(productsData[i], i)}>
                    <div className='product-card'>
                        <img src={productsData[i].ImageSource} className={`product-image ${gridNum === 3 ? 'grid-image-3 grid-image-1' : 'grid-image-2'}`}></img>
                        <div className='product-info'>
                            <p className='product-name'>{productsData[i].Name}</p>
                            <p className='product-price'>${productsData[i].Price}</p>
                        </div>
                    </div>
                </div>
                )
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
                    <h1></h1>
                </div>
            </section>

            <div className='shop-menu'>
                <div className='dropdown'>
                    {/*<button className='btn dropdown-toggle' type='button' data-bs-toggle='dropdown'>
                        Categories
                        <div className='angle-down-div'>
                            <i className='fas fa-angle-down'></i>
                        </div>
                    </button>
                    <ul className='dropdown-menu dropdown-menu-right'>
                        <li><a className='dropdown-item' href='#' onClick={() => handleChange('Bestsellers')}>
                            Bestsellers {`(${productsData.filter(i => i.Bestseller === 'true').length})`}
                            </a>
                        </li>
                        <li><a className='dropdown-item' href='#' onClick={() => handleChange('Sympathy')}>
                            Sympathy {`(${productsData.filter(i => i.Category === 'Sympathy').length})`}
                            </a>
                        </li>
                        <li><a className='dropdown-item' href='#' onClick={() => handleChange('Love & Romance')}>
                            Love & Romance {`(${productsData.filter(i => i.Category === 'Love & Romance').length})`}
                            </a>
                        </li>
                        <li><a className='dropdown-item' href='#' onClick={() => handleChange('Get Well')}>
                            Get Well {`(${productsData.filter(i => i.Category === 'Get Well').length})`}
                            </a>
                        </li>
                        <li><a className='dropdown-item' href='#' onClick={() => handleChange('Birthday')}>
                            Birthday {`(${productsData.filter(i => i.Category === 'Birthday').length})`}
                            </a>
                        </li>
                    </ul>*/}
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
                {renderProducts()}
            </section>
            
            {viewProduct === false ? null : 
                <div className='view-product-container'>
                    <div className='view-product'>
                        <button className='exit-view' onClick={() => toggleViewProduct([], undefined)}>
                            <i className='fa-solid fa-x'></i>
                        </button>
                        <img src={productInfo.ImageSource}></img>
                        <div className='right-panel'>
                            <div className='view-product-info'>
                                <p className='view-product-name'>{productInfo.Name}</p>
                                <div className='view-product-reviews'>
                                    <div className='view-product-stars'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star-half-stroke' aria-hidden='true'></i>
                                    </div>                                
                                    <a href=''>({productInfo.Ratings} Ratings)</a>
                                </div>
                                <p className='view-product-price'>${productInfo.Price}</p>
                                <div className='quantity-cart-container' >
                                    <div className='quantity-container'>
                                        <button onClick={() => setQuantity('sub')}>-</button>
                                        <p>{productQty}</p>
                                        <button onClick={() => setQuantity('add')}>+</button>
                                    </div>
                                    <button className='add-to-cart' onClick={() => addToCart(productQty, productInfo.Name)}>Add to Cart</button>
                                </div> 
                            </div>
                            <div className='share-container'>
                                <p className='font-extra-small'>Share:</p>
                                <div className='share-social-media'>                                    
                                    <a><i className='fab fa-instagram' title='Instagram' alt='Instagram link'></i></a>
                                    <a><i className='fab fa-facebook' title='Facebook' alt='Facebook link'></i></a>
                                    <a><i className='fab fa-pinterest' title='Pinterest' alt='Pinterest link'></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </main>
    )
}
export default Shop;