import React from 'react';
import { NavLink } from 'react-router-dom';
import OwnersImage from '../OtherImages/Owners Image.jpg';
import MissionImage from '../OtherImages/Mission Image.jpg';

function About(){
    return(
        <main className='about-page'>
        <div className='shop-header'>
            <div className='shop-header-container'>
                <h1>About</h1>
            </div>
        </div>
            <div className='about-container'>
            <img className='about-img' src={MissionImage}></img>
                <div className='about-text'>
                    <h2>Our Mission</h2>
                    <p className='font-extra-small'>
                        At Green Oasis, our mission is to spread joy while being kind to the planet. We are committed to providing our 
                        community with beautiful flowers sourced from sustainable greenhouses. From locally grown blooms to 
                        eco-friendly biodegradable packaging, we strive to minimize our environmental impact every step of the way. With every purchase, 
                        you're not just buying flowers, you're contributing to a greener, more sustainable future.
                    </p>
                </div>
            </div>
            <div className='about-container'>
                <div className='about-text'>
                    <h2>Our Story</h2>
                    <p className='font-extra-small'>
                        In our early days, Green Oasis operated out of a modest greenhouse, where we handpicked each bloom and crafted 
                        unique arrangements for local customers.<br/><br/>As our business grew, we expanded our offerings to include floral 
                        design services for weddings, events, and other occasions. Our mission remains unwavering: to bring the magic 
                        of flowers to the desert, brightening the lives of those who call Phoenix home and those who visit the city.
                    </p>
                </div>                
                <img className='about-img' src={OwnersImage} alt='Green Oasis owner smiling and holding a vase of carnations'></img>
            </div>
            
        </main>
    )
}

export default About;