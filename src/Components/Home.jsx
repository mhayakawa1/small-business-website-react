import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; 
import heroImage1 from '../OtherImages/hero1.jpg';
import heroImage2 from '../OtherImages/hero2.jpeg';
import heroImage3 from '../OtherImages/hero3.jpg';
import Sympathy10 from '../ProductImages/lobortis scelerisque.jpeg';
import LoveRom4 from '../ProductImages/sollicitudin nibh.jpeg';
import Birthday7 from '../ProductImages/dignissim cras.jpeg';
import GetWell2 from '../ProductImages/euismod quis.jpeg';
import HomeBackground from '../OtherImages/Home Background Image.jpeg';
import QuickDelivery from '../OtherImages/delivery.png';
import EcoFriendly from '../OtherImages/ecofriendly.png';
import FamilyOwned from '../OtherImages/familyowned.png';
import IG1 from '../OtherImages/IG1.jpeg';
import IG2 from '../OtherImages/IG2.jpg';
import IG3 from '../OtherImages/IG3.jpeg';
import IG4 from '../OtherImages/IG4.jpg'

function Home() {
    const [imagesArr, setImagesArr] = useState([heroImage1, heroImage2, heroImage3]);
    const [fadeIn, setFadeIn] = useState('');
    const [image1, setImage1] = useState(imagesArr[0]);
    const [image2, setImage2] = useState(imagesArr[1]);
    const [reviewNumber, setReviewNumber] = useState(0);

    function heroImage() {
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
            heroImage();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const reviewCarousel = (direction) => {
        if (direction === 'right' && reviewNumber < 2) {
            setReviewNumber(reviewNumber + 1);
        } else if (direction === 'right' && reviewNumber === 2) {
            setReviewNumber(0);
        } else if (direction === 'left' && reviewNumber > 0) {
            setReviewNumber(reviewNumber - 1);
        } else if (direction === 'left' && reviewNumber === 0) {
            setReviewNumber(2);
        }
    }

    const Icons = () => {
        const platforms = ['Instagram', 'Facebook', 'TikTok'];
        let icons = [];
        for (let i = 0; i < platforms.length; i++) {
            icons.push(
                <a key={i}>
                    <i className={`fab fa-${platforms[i].toLowerCase()}`} title={platforms[i]} alt={`${platforms[i]} link`}></i>
                </a>
            )
        }
        return (
            icons
        )
    }

    const BestsellerCards = () => {
        const cardInfo = [
            {
                src: Sympathy10,
                name: 'Lobortis Scelerisque',
                price: '$45.00'
            },
            {
                src: Birthday7,
                name: 'Dignissim Cras',
                price: '$32.00'
            },
            {
                src: GetWell2,
                name: 'Euismod Quis',
                price: '$17.00'
            },
            {
                src: LoveRom4,
                name: 'Sollicitudin Nibh',
                price: '$23.00'
            }
        ];
        let bestsellerCards = [];
        for (let i = 0; i < cardInfo.length; i++) {
            bestsellerCards.push(
                <div key={i} className='bestseller-card'>
                    <img src={cardInfo[i].src} />
                    <div className='card-info'>
                        <p className='font-small'>{cardInfo[i].name}</p>
                        <p className='font-small'>{cardInfo[i].price}</p>
                    </div>
                </div>
            )
        }
        return (
            bestsellerCards
        )
    }

    const Features = () => {
        const featuresInfo = [
            {
                src: QuickDelivery,
                string: 'Quick Delivery'
            },
            {
                src: EcoFriendly,
                string: 'Eco-Friendly'
            },
            {
                src: FamilyOwned,
                string: 'Family Owned'
            }
        ];
        let features = [];
        for(let i = 0; i < featuresInfo.length; i++){
            features.push(
                <div key={i} className='feature'>
                    <img src={featuresInfo[i].src}/>
                    <p>{featuresInfo[i].string}</p>
                </div>
            )
        }
        return(
            features
        )
    }

    const Reviews = () => {
        const reviewsInfo = [
            {
                review: 'I received a surprise delivery from Green Oasis today, and I couldn\'t be happier. The bouquet is a masterpiece of colors and fragrances. It brightened my entire day, and I feel so appreciated.',
                name: 'Daniel White',
                source: 'Yelp'
            },
            {
                review: 'I ordered a sympathy bouquet from Green Oasis during a difficult time, and I was deeply touched by the beauty and thoughtfulness of the arrangement. It brought comfort and solace to our family during a challenging period.',
                name: 'Jessica Garcia',
                source: 'Yelp'
            },
            {
                review: 'I\'m a regular customer at Green Oasis, and I can say that they never disappoint. The staff is incredibly friendly and knowledgeable, always helping me find the perfect arrangement for any occasion.',
                name: 'Michelle Scott',
                source: 'Facebook'
            }
        ]
        let reviews = [];
        for(let i = 0; i < reviewsInfo.length; i++){
            let stars = [];
            for(let j = 0; j < 5; j++){
                stars.push(
                    <i key={j} className='fas fa-star'></i>
                )
            }
            reviews.push(
                <div key={i} className={`review-card ${reviewNumber === i ? 'show-review' : ''}`}>
                    <p className='review-stars'>
                        {stars}
                    </p>
                    <p className='review-text font-small'>{reviewsInfo[i].review}</p>
                    <div className='attribution'>
                        <p className='name'>- {reviewsInfo[i].name}</p>
                        <p className='source'><i className={`fab fa-${reviewsInfo[i].source.toLowerCase()} review-source-icon`}></i> {reviewsInfo[i].source}</p>
                    </div>
                </div>
            )
        }
        return(
            reviews
        )
    }

    const InstagramPosts = () => {
        const igPostInfo = [
            {
                src: IG1,
                alt: 'Bouquet of pink and magenta carnations with foliage on a stand with a notebook and pen cup holder.'
            },
            {
                src: IG2,
                alt: 'Person in a white sweater touching a bouqet of white tulips'
            },
            {
                src: IG3,
                alt: 'Customer&quot;s bouquet of peonies on a white sheet with an open book and cup of coffee.'
            },
            {
                src: IG4,
                alt: 'Person arranging a basket of carnations and baby&quot;s breath'
            }
        ]
        let igPosts = [];
        for(let i = 0; i < igPostInfo.length; i++){
            igPosts.push(
                <a key={i}>
                    <img src={igPostInfo[i].src} alt={igPostInfo[i].alt}></img>
                    <span><i className='fab fa-instagram'></i></span>
                </a>
            )
        }
        return(
            igPosts
        )
    }

    return (
        <main>
            <img className='home-background' src={HomeBackground} alt=''></img>
            <section className='hero'>
                {heroImage()}
                <div className='hero-headline'>
                    <h1>Explore arrangements for any occasion</h1>
                    <p className='font-small'>Order fresh flowers online today! Follow us on social media for floral inspiration.</p>
                    <div className='social-media-hero'>
                        {Icons()}
                    </div>
                </div>
            </section>
            <section className='bestsellers'>
                <div className='section-header'>
                    <h2>Bestsellers</h2>
                    <NavLink to="/shop/Bestsellers">Shop All</NavLink>
                </div>
                <div className='bestseller-cards'>
                    {BestsellerCards()}
                </div>
            </section>

            <section className='features'>
                {Features()}
            </section>
            <section className='reviews'>
                <h2>Customer Reviews</h2>
                <div className='review-cards'>
                    <button onClick={() => reviewCarousel('left')}><i className='fa fa-chevron-left'></i></button>
                    {Reviews()}
                    <button onClick={() => reviewCarousel('right')}><i className='fa fa-chevron-right'></i></button>
                </div>
            </section>
            <section className='instagram'>
                <div className='ig-header'>
                    <h2>@GreenOasisFlorist</h2>
                    <button>Follow Us</button>
                </div>
                <div className='ig-posts'>
                    {InstagramPosts()}
                </div>
            </section>
            <section className='newsletter'>
                <h2>Sign up for our newsletter</h2>
                <p>Stay informed about store updates and receive discount codes.</p>
                <div className='submit-email'>
                    <input placeholder='Email' id='email' type='email' autoComplete='on'></input>
                    <button>Subscribe</button>
                </div>
            </section>
        </main>
    )
}
export default Home;