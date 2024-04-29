import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import heroImage1 from '../OtherImages/hero1.jpg';
import heroImage2 from '../OtherImages/hero2.jpeg';
import heroImage3 from '../OtherImages/hero3.jpg';
import Sympathy10 from '../ProductImages/lobortis scelerisque.jpeg';
import LoveRom4 from '../ProductImages/sollicitudin nibh.jpeg';
import Birthday7 from '../ProductImages/dignissim cras.jpeg';
import GetWell2 from '../ProductImages/euismod quis.jpeg';
import AboutImage from '../OtherImages/About Image.png';
import HomeBackground from '../OtherImages/Home Background Image.jpeg';

function Home(props){
    const [imagesArr, setImagesArr] = useState([heroImage1, heroImage2, heroImage3]);
    const [fadeIn, setFadeIn] = useState('');
    const [image1, setImage1] = useState(imagesArr[0]);
    const [image2, setImage2] = useState(imagesArr[1]);
    //const [bestseller, setBestseller] = useState('');
    
    function getHeroImage(){
        return (
            <div key={'key'} className='hero-image-container'>
              <img key={image2} src={image2} className={`hero-image`} />
              <img key={image1} src={image1} className={`${fadeIn} hero-image`} 
                alt={image1 === heroImage1 ? 'Person holding bouquet of pink, yellow, and green flowers by a table of flower arranging supplies' 
                    : image1 === heroImage2 ? 'Close up of a vase of white and pink flowers'
                    : 'Close up of person handling a bouquet of red and orange flowers'}
              />
            </div>
        );
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setImagesArr(imagesArr.unshift(imagesArr.pop()));
            setImage2(imagesArr[1]);
            setImage1(imagesArr[0]);
            setFadeIn('fade-in');
            getHeroImage();
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const setViewBestseller = (item) => {
        //props.clickHandler(undefined, undefined, undefined, item)
        //console.log(item)
    }

    return(
        <main>
            <img className='home-background' src={HomeBackground} alt=''></img>
            <section className='hero'>
                {getHeroImage()}
                <div className='hero-headline'>
                    <h1>Explore arrangements for any occasion</h1>
                    <p className='font-extra-small'>Order fresh flowers online today! Follow us on social media for floral inspiration.</p>
                    <div className='social-media-hero'>
                            <a><i className='fab fa-instagram' title='Instagram' alt='Instagram link'></i></a>
                            <a><i className='fab fa-facebook' title='Facebook' alt='Facebook link'></i></a>
                            <a><i className='fa-brands fa-tiktok' title='TikTok' alt='Tiktok link'></i></a>                   
                    </div>    
                </div>
            </section>
            <section className='bestsellers'>
                <div className='section-header'>
                    <h2>Bestsellers</h2>
                    <a href='/shop'>Shop All</a>
                </div>
                <div className='bestseller-cards'>
                    <div className='bestseller-card'>
                        <img src={Sympathy10}></img>                       
                        <div className='card-info'>
                            <p className='font-small'>Lobortis Scelerisque</p>
                            <p className='font-small'>$45.00</p>
                        </div>
                    </div>
                    <div className='bestseller-card'>
                        <img src={Birthday7}></img>
                        <div className='card-info'>
                            <p className='font-small'>Dignissim Cras</p>
                            <p className='font-small'>$32.00</p>
                        </div>                        
                    </div>
                    <div className='bestseller-card'>
                        <img src={GetWell2}></img>
                        <div className='card-info'>
                            <p className='font-small'>Euismod Quis</p>
                            <p className='font-small'>$17.00</p>
                        </div>                        
                    </div>
                    <div className='bestseller-card'>
                        <img src={LoveRom4}></img>
                        <div className='card-info'>
                            <p className='font-small'>Sollicitudin Nibh</p>
                            <p className='font-small'>$23.00</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='features'>
                 <div className='feature'>
                    <p>Quick Delivery</p>
                 </div>
                 <div className='feature'>
                    <p>Eco-Friendly</p>
                 </div>
                 <div className='feature'>
                    <p>Family Owned</p>
                 </div>
            </section>
            {/**/}<section className='customer-reviews'>
                <h2>Customer Reviews</h2>
                <p className='review-p font-extra-small'>From weddings and birthdays to everyday surprises, our customers have trusted us to 
                make their moments truly special. Your feedback inspires us to continue crafting unforgettable floral 
                arrangements and providing exceptional service.</p>
                <div className='reviews-container'>
                    <div className='review-card'>
                        <img className='review-card-image' 
                            alt='Customer&quot;s bouquet of pink and magenta carnations with foliage on a stand with a notebook and pen cup holder.'
                            src='https://images.pexels.com/photos/5706258/pexels-photo-5706258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
                        <div className='review-content'>
                            <p className='review-stars'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                            </p>
                            <p className='review-text font-extra-small'>
                            "I received a surprise delivery from Green Oasis today, and I couldn't be happier. 
                            The bouquet is a masterpiece of colors and fragrances. It brightened my entire day, and 
                            I feel so appreciated."
                            </p>
                            <div className='review-attribution'>
                                <p className='review-name'>- Daniel White</p>
                                <p className='review-source'><i className='fab fa-yelp review-source-icon'></i> Yelp</p>
                            </div> 
                        </div>
                    </div>
                    <div className='review-card'>
                        <img className='review-card-image' 
                            alt='Customer in a white sweater touching a bouqet of white tulips'
                            src='https://images.pexels.com/photos/15765427/pexels-photo-15765427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
                        <div className='review-content'>
                            <p className='review-stars'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                            </p>
                            <p className='review-text font-extra-small'>
                            "I ordered a sympathy bouquet from Green Oasis during a difficult time, and I was deeply 
                            touched by the beauty and thoughtfulness of the arrangement. It brought comfort and solace 
                            to our family during a challenging period."
                            </p>
                            <div className='review-attribution'>
                                <p className='review-name'>- Jessica Garcia</p>
                                <p className='review-source'><i className='fab fa-yelp review-source'></i> Yelp</p>
                            </div>
                        </div>    
                    </div>
                    <div className='review-card'>
                        <img className='review-card-image' 
                            alt='Customer&quot;s bouquet of peonies on a white sheet with an open book and cup of coffee.'
                            src='https://images.pexels.com/photos/8605039/pexels-photo-8605039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
                        <div className='review-content'>
                            <p className='review-stars'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                            </p>
                            <p className='review-text font-extra-small'>
                            "I'm a regular customer at Green Oasis, and I can say that they never disappoint.
                             The staff is incredibly friendly and knowledgeable, always helping me find the perfect 
                             arrangement for any occasion."
                            </p>
                            <div className='review-attribution'>
                                <p className='review-name'>- Michelle Scott</p>
                                <p className='review-source'><i className='fab fa-facebook review-source'></i> Facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/**/}<section className='about'>
                <div className='about-text'>
                    <h2>About</h2>
                    <p className='font-extra-small'>
                    In our early days, Green Oasis operated out of a modest greenhouse, where we handpicked each bloom and crafted 
                    unique arrangements for local customers.<br/><br/>As our business grew, we expanded our offerings to include floral 
                    design services for weddings, events, and other occasions. Our mission remains unwavering: to bring the magic 
                    of flowers to the desert, brightening the lives of those who call Phoenix home and those who visit the city.
                    </p>
                </div>
                    <img className='about-image' src={AboutImage} alt='Green Oasis owner smiling and holding a vase of carnations.'></img>
            </section>
        </main>
    )
}
export default Home;