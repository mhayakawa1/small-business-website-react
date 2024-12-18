
import React, { useState } from "react";
  
export const CartItemsContext = React.createContext();
export const ContextProvider = ({ children }) => {
    const [items, setItems] = useState(0);
  
    return (
        <CartItemsContext.Provider value={{ items, setItems }}>
            {children}
        </CartItemsContext.Provider>
    );
};