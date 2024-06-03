import React from 'react';
import HomeBackground from '../OtherImages/Home Background Image.jpeg';

function Error(){
    return(
        <div className='error-page'>
            <img className='error-background' src={HomeBackground}></img>
            <h3>This page does not exist.</h3>
        </div>
    )
}   
export default Error;