
import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
  
export const CartItemsContext = React.createContext();

export function useCart() {
  const value = useContext(CartItemsContext);
  return value;
}

export const CartItemsProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [productsData, setProductsData] = useState([]);  
    const [saveData, setSaveData] = useState('');
  
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
  
    const onStorageUpdate = (e) => {
      const { key, newValue } = e;
      if (key === 'cartItems') {
        //setSaveData(newValue);
        setCartItems(newValue)
      }
    };
  
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
      //setSaveData(JSON.parse(localStorage.getItem('saveData')) || '');
        setCartItems(JSON.parse(localStorage.getItem('saveData')) || '')
  
      window.addEventListener('storage', onStorageUpdate);
      return () => {
        window.removeEventListener('storage', onStorageUpdate);
      };
    }, []);

    const updateCart = (productQty, productName, add) => {
        let addToCart = [];
        let newCartArray = cartItems.filter(i => i !== productName);
        if (productQty === 'clear' && productName === 'clear') {
          setCartItems([]);
          //setSaveData(JSON.parse(localStorage.getItem('saveData')) || '');
          localStorage.setItem('cartItems', '');
        } else if (add) {
          for (let i = 0; i < productQty; i++) {
            addToCart.push(productName)
          }
          setCartItems(newCartArray.concat(addToCart));
          localStorage.setItem('cartItems', JSON.stringify(newCartArray.concat(addToCart)));
          //setSaveData(JSON.stringify(newCartArray.concat(addToCart)));
          setCartItems(JSON.stringify(newCartArray.concat(addToCart)));
        } else if (!add) {
          setCartItems(newCartArray);
          localStorage.setItem('cartItems', JSON.stringify(newCartArray));
          //setSaveData(JSON.stringify(newCartArray));
        }
      }
    
  
    return (
        <CartItemsContext.Provider value={{ productsData, updateCart }}>
            {children}
        </CartItemsContext.Provider>
    );
};