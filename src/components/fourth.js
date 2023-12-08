import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Rating from '@mui/material/Rating';
const Fourth = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div id='crsl'>
            <h2 id='ttlnew'>NEWEST </h2>
             <Carousel
            responsive={responsive}
               showDots={true}
               draggable={true}
               swipeable={true}
               infinite={true}
        
               autoPlaySpeed={1000}
               keyBoardControl={true}
               
               transitionDuration={500}
               containerClass="carousel-container"
               
           
               
               dotListClass="custom-dot-list-style"
               itemClass="carousel-item-padding-40-px"
               

            >
               
               <div id='item'>
                    <img id='img1' src="./inter.jpg" />
                    <p id='title1' className='pdng'>
                       INTER MILAN 2022
                    </p>
                    <span  className='pdng'>
                        <Rating name="read-only" value={2} precision={0.25} readOnly />
                    </span>
                    <span  className='pdng' id='price1'>20<sup>DH</sup></span>
                </div>
                <div id='item'>
                    <img id='img1' src="./387873626_850677586433592_3454741033777112757_n.jpg" />
                    <p id='title1' className='pdng'>
                       MAN UNITED 07
                    </p>
                    <span  className='pdng'>
                        <Rating name="read-only" value={5} precision={0.25} readOnly />
                    </span>
                    <span  className='pdng' id='price1'>20<sup>DH</sup></span>
                </div>

                <div id='item'>
                    <img id='img1' src="./387829160_849057019928982_6794097387075104108_n.jpg" />
                    <p id='title1' className='pdng'>
                      MAN UNITED 1998
                    </p>
                    <span  className='pdng'>
                        <Rating name="read-only" value={1} precision={0.25} readOnly />
                    </span>
                    <span  className='pdng' id='price1'>20<sup>DH</sup></span>
                </div>

                <div id='item'>
                    <img id='img1' src="./387830725_849057073262310_3266285352952087507_n.jpg" />
                    <p id='title1' className='pdng'>
                       MAROC 1994
                    </p>
                    <span  className='pdng'>
                        <Rating name="read-only" value={4.5} precision={0.25} readOnly />
                    </span>
                    <span  className='pdng' id='price1'>20<sup>DH</sup></span>
                </div>
            </Carousel>
        </div>
    );
}

export default Fourth;
