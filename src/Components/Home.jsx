import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
//const heroImage1 = 'https://images.pexels.com/photos/4466544/pexels-photo-4466544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
//const heroImage2 = 'https://images.pexels.com/photos/4022213/pexels-photo-4022213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
//const heroImage3 = 'https://images.pexels.com/photos/5706594/pexels-photo-5706594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
import heroImage1 from '../ProductImages/hero1.jpeg';
import heroImage2 from '../ProductImages/hero2.jpeg';
import heroImage3 from '../ProductImages/hero3.jpg';

function Home(){
    const [imagesArr, setImagesArr] = useState([heroImage1, heroImage2, heroImage3]);
    //turn imagesArr to 'let' var
    const [fadeIn, setFadeIn] = useState('');
    const [image1, setImage1] = useState(imagesArr[0]);
    const [image2, setImage2] = useState(imagesArr[1]);

    function getHeroImage(){
        return (
            <div key={'key'} className='hero-image-container'>
              <img key={image2} src={image2} className={`hero-image`} />
              <img key={image1} src={image1} className={`${fadeIn} hero-image`} />
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

    return(
        <div>
            {/*https://images.pexels.com/photos/4207679/pexels-photo-4207679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
            <img className='home-background' src='https://images.pexels.com/photos/4207569/pexels-photo-4207569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>*/}
            
            <img className='home-background' src='https://images.pexels.com/photos/4207679/pexels-photo-4207679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
            <div className='hero-container'>
                <div className='hero-headline'>
                    <img className='logo' src={logo}></img>
                    <h1>Green<br/>Oasis Florist</h1>
                    <p className='font-extra-small'>Order fresh flowers online today! Follow us on social media for floral inspiration.</p>
                    <ul className='social-media-hero'>
                        <li>
                            <a><i className='fab fa-instagram' title='Instagram' alt='instagram logo'></i></a>
                        </li>
                        <li>
                            <a><i className='fab fa-facebook' title='Facebook' alt='facebook logo'></i></a>
                        </li>
                        <li>
                            <a><i className='fa-brands fa-tiktok' title='TikTok' alt='tiktok logo'></i></a>
                        </li>
                    </ul>
                </div>
                    
                {/*Automatically fade to different image every 4 seconds*/}
                {getHeroImage()}
            </div>

            <div className='our-bestsellers'>                
                <div className='bestseller-cards'>
                    <div className='bestseller-card bestseller-1'>
                        <img className='bestseller-card-image' src='https://images.pexels.com/photos/4022206/pexels-photo-4022206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
                        <div className='bestseller-card-info b-c-info-1'>
                            <p>Lorem Ipsum</p>
                            <p>$10.00</p>
                        </div>
                    </div>
                    <div className='bestseller-card bestseller-2'>
                        <img className='bestseller-card-image' src='https://images.pexels.com/photos/4466625/pexels-photo-4466625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
                        <div className='bestseller-card-info bestseller-card-info-2'>
                            <p>Consectetur Adipiscing<br/>$10.00</p>
                        </div>                        
                    </div>
                    <div className='bestseller-card bestseller-3'>
                        <img className='bestseller-card-image' src='https://images.pexels.com/photos/5414339/pexels-photo-5414339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
                        <div className='bestseller-card-info bestseller-card-info-2'>
                            <p>Elit Sed Do</p>
                            <p>$12.00</p>
                        </div>                        
                    </div>
                    <div className='bestseller-card bestseller-4'>
                        <img className='bestseller-card-image' src='https://images.pexels.com/photos/8903960/pexels-photo-8903960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
                        <div className='bestseller-card-info'>
                            <p>Dolor Sit Amet</p>
                            <p>$12.00</p>
                        </div>
                    </div>
                </div>
                <div className='bestsellers-header'>
                    <h3>Our Bestsellers</h3>
                    <p className='bestsellers-text font-extra-small'>Explore our bestselling items and make moments more memorable
                     with the gift of flowers. Whether it's a birthday, anniversary, or any other milestone, our bouquets add a 
                     touch of elegance and celebration to your gatherings.</p>
                    <NavLink to='/shop' className='nav-link-button'>
                    <button className='col-xs-1'>
                        See More<i className='fas fa-arrow-right'></i>
                    </button>
                    </NavLink>
                </div>
            </div>

            <div className='customer-reviews'>
                <h3>Customer Reviews</h3>
                <p className='review-p'>From weddings and birthdays to everyday surprises, our customers have trusted us to 
                make their moments truly special. Your feedback inspires us to continue crafting unforgettable floral 
                arrangements and providing exceptional service.</p>
                <div className='reviews-container'>
                    <div className='review-card'>
                        <img className='review-card-image' src='https://images.pexels.com/photos/5706258/pexels-photo-5706258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
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
                        <img className='review-card-image' src='https://images.pexels.com/photos/15765427/pexels-photo-15765427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
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
                        <img className='review-card-image' src='https://images.pexels.com/photos/8605039/pexels-photo-8605039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
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
            </div>

            <div className='about'>
                <div className='about-text'>
                    <h3>About</h3>
                    <p className='font-extra-small'>
                    In our early days, Green Oasis operated out of a modest greenhouse, where we handpicked each bloom and crafted 
                    unique arrangements for local customers.<br/><br/>As our business grew, we expanded our offerings to include floral 
                    design services for weddings, events, and other occasions. Our mission remains unwavering: to bring the magic 
                    of flowers to the desert, brightening the lives of those who call Phoenix home and those who visit the city.
                    </p>
                </div>
                <div className='about-image'>
                    <img src='https://images.pexels.com/photos/5409713/pexels-photo-5409713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
                </div>                
            </div>
        </div>
    )
}
export default Home;