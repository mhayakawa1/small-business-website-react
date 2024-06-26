import React, {useState, useEffect} from 'react';
import axios from 'axios';
import heroImage1 from '../OtherImages/hero1.jpg';
import heroImage2 from '../OtherImages/hero2.jpeg';
import heroImage3 from '../OtherImages/hero3.jpg';
import Sympathy10 from '../ProductImages/lobortis scelerisque.jpeg';
import LoveRom4 from '../ProductImages/sollicitudin nibh.jpeg';
import Birthday7 from '../ProductImages/dignissim cras.jpeg';
import GetWell2 from '../ProductImages/euismod quis.jpeg';
import HomeBackground from '../OtherImages/Home Background Image.jpeg';
import Delivery from '../OtherImages/delivery.png';
import EcoFriendly from '../OtherImages/ecofriendly.png';
import FamilyOwned from '../OtherImages/familyowned.png';
import IG1 from '../OtherImages/IG1.jpeg';
import IG2 from '../OtherImages/IG2.jpg';
import IG3 from '../OtherImages/IG3.jpeg';
import IG4 from '../OtherImages/IG4.jpg'

function Home(){
    const [imagesArr, setImagesArr] = useState([heroImage1, heroImage2, heroImage3]);
    const [fadeIn, setFadeIn] = useState('');
    const [image1, setImage1] = useState(imagesArr[0]);
    const [image2, setImage2] = useState(imagesArr[1]);
    const [reviewClasses, setReviewClasses] = useState(1);

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
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const reviewCarousel = (direction) => {
        if(direction === 'right' && reviewClasses < 3){
            setReviewClasses(reviewClasses+1)
        }else if(direction === 'right' && reviewClasses === 3){
            setReviewClasses(1)
        }else if(direction === 'left' && reviewClasses > 1){
            setReviewClasses(reviewClasses-1)
        }else if(direction === 'left' && reviewClasses === 1){
            setReviewClasses(3)
        }
    }

    return(
        <main>
            <img className='home-background' src={HomeBackground} alt=''></img>
            <section className='hero'>
                {getHeroImage()}
                <div className='hero-headline'>
                    <h1>Explore arrangements for any occasion</h1>
                    <p className='font-small'>Order fresh flowers online today! Follow us on social media for floral inspiration.</p>
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
                    <a href='/shop/bestsellers'>Shop All</a>
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
                    <img src={Delivery}></img>
                    <p>Quick Delivery</p>
                 </div>
                 <div className='feature'>
                    <img src={EcoFriendly}></img>
                    <p>Eco-Friendly</p>
                 </div>
                 <div className='feature'>
                    <img src={FamilyOwned}></img>
                    <p>Family Owned</p>
                 </div>
            </section>
            <section className='reviews'>
                <h2>Customer Reviews</h2>
                <div className='review-cards'>
                    <button onClick={() => reviewCarousel('left')}><i className='fa fa-chevron-left'></i></button>
                    <div className={`review-card ${reviewClasses === 1 ? 'show-review' : ''}`}>
                        <p className='review-stars'>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                        </p>
                        <p className='review-text font-small'>
                        "I received a surprise delivery from Green Oasis today, and I couldn't be happier. 
                        The bouquet is a masterpiece of colors and fragrances. It brightened my entire day, and 
                        I feel so appreciated."
                        </p>
                        <div className='attribution'>
                            <p className='name'>- Daniel White</p>
                            <p className='source'><i className='fab fa-yelp review-source-icon'></i> Yelp</p>
                        </div>
                    </div>
                    <div className={`review-card ${reviewClasses === 2 ? 'show-review' : ''}`}>
                        <p className='review-stars'>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                        </p>
                        <p className='review-text font-small'>
                        "I ordered a sympathy bouquet from Green Oasis during a difficult time, and I was deeply 
                            touched by the beauty and thoughtfulness of the arrangement. It brought comfort and solace 
                            to our family during a challenging period."
                        </p>
                        <div className='attribution'>
                            <p className='name'>- Jessica Garcia</p>
                            <p className='source'><i className='fab fa-yelp review-source-icon'></i> Yelp</p>
                        </div>
                    </div> 
                    <div className={`review-card ${reviewClasses === 3 ? 'show-review' : ''}`}>
                        <p className='review-stars'>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                        </p>
                        <p className='review-text font-small'>
                        "I'm a regular customer at Green Oasis, and I can say that they never disappoint.
                             The staff is incredibly friendly and knowledgeable, always helping me find the perfect 
                             arrangement for any occasion."
                        </p>
                        <div className='attribution'>
                            <p className='name'>- Michelle Scott</p>
                            <p className='source'><i className='fab fa-yelp review-source-icon'></i> Yelp</p>
                        </div>
                    </div>
                    <button onClick={() => reviewCarousel('right')}><i className='fa fa-chevron-right'></i></button>
                </div>
            </section>
            <section className='instagram'>
                <div className='ig-header'>
                    <h2>@GreenOasisFlorist</h2>
                    <button>Follow Us</button>
                </div>
                <div className='ig-posts'>
                    <a>
                        <img src={IG1} alt='Bouquet of pink and magenta carnations with foliage on a stand with a notebook and pen cup holder.'></img>
                        <span><i className='fab fa-instagram'></i></span>
                    </a>
                    <a>
                        <img src={IG2} alt='Person in a white sweater touching a bouqet of white tulips'></img>
                        <span><i className='fab fa-instagram'></i></span>
                    </a>
                    <a>
                        <img src={IG3} alt='Customer&quot;s bouquet of peonies on a white sheet with an open book and cup of coffee.'></img>
                        <span><i className='fab fa-instagram'></i></span>
                    </a>
                    <a>
                        <img src={IG4} alt='Person arranging a basket of carnations and baby&quot;s breath'></img>
                        <span><i className='fab fa-instagram'></i></span>
                    </a>                    
                </div>
            </section>
            <section className='newsletter'>
                <h2>Sign up for our newsletter</h2>
                <p>Stay informed about store updates and receive discount codes.</p>
                <div className='submit-email'>
                    <input placeholder='Email'></input>
                    <button>Subscribe</button>
                </div>
                
            </section>
        </main>
    )
}
export default Home;