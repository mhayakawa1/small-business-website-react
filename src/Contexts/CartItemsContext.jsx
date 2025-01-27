
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
      setCartItems(JSON.parse(localStorage.getItem('cartItems')) || [])
  
      window.addEventListener('storage', onStorageUpdate);
      return () => {
        window.removeEventListener('storage', onStorageUpdate);
      };
    }, []);

    const updateCart = (quantity, productName, add) => {
        let addToCart = [];
        let newCartArray = cartItems.filter(i => i !== productName);
        if (add) {
          for (let i = 0; i < quantity; i++) {
            newCartArray.push(productName);
          }
          setCartItems(newCartArray);
          localStorage.setItem('cartItems', JSON.stringify(newCartArray.concat(addToCart)));
        } else{
          setCartItems(newCartArray);
          localStorage.setItem('cartItems', JSON.stringify(newCartArray));
        }
      }
    
  
    return (
        <CartItemsContext.Provider value={{ productsData, cartItems, updateCart }}>
            {children}
        </CartItemsContext.Provider>
    );
};