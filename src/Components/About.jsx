import React from 'react';
import { NavLink } from 'react-router-dom';
import OwnersImage from '../OtherImages/Owners Image.jpg';
import MissionImage from '../OtherImages/Mission Image.jpg';
import AboutHeaderImage from '../OtherImages/About Header Image.jpg'

function About(){
    return(
        <main className='about-page'>
            <header className=''>
                <img src={AboutHeaderImage}></img>
                <div className='about-header-container'>
                    <h1>About Us</h1>
                    <p>Supplying quality flowers to the local community since 1990.</p>
                </div>
            </header>
            <section className='container our-mission'>
                <img className='about-img mission-img' src={MissionImage}></img>
                <div className='about-text'>
                    <h2>Our Mission</h2>
                    <p className='font-extra-small'>
                        At Green Oasis, our mission is to spread joy while being kind to the planet. We are committed to providing our 
                        community with beautiful flowers sourced from sustainable greenhouses. From locally grown blooms to 
                        eco-friendly biodegradable packaging, we strive to minimize our environmental impact every step of the way. With every purchase, 
                        you're not just buying flowers, you're contributing to a greener, more sustainable future.
                    </p>
                </div>
            </section>
            <section className='container our-story'>
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
            </section> 
        </main>
    )
}

export default About;