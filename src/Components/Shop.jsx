import React from 'react';
import { useParams } from 'react-router-dom';
import Category from './Category';

function Shop(){
    const { category } = useParams();
  
    return (
      <>
        <Category category={category} />
      </>
    );
}
export default Shop;