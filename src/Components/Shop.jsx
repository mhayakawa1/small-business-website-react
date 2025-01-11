import React from 'react';
import { useParams } from 'react-router-dom';
import Category from './Category';

function Shop({clickHandler, cart}){
    const { category } = useParams();
  
    return (
      <>
        <Category category={category} clickHandler={clickHandler} cart={cart}/>
      </>
    );
}
export default Shop;