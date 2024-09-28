import React from 'react';
import HomeBackground from '../OtherImages/Home Background Image.jpeg';

function Error(){
    return(
        <main className='error-page'>
            <img className='error-background' src={HomeBackground}></img>
            <h1>This page does not exist.</h1>
        </main>
    )
}   
export default Error;