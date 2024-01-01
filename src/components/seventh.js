import React from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Carousel from 'react-multi-carousel';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Avatar, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import iamgeskamlin from "../pictures/index"
const Seventh = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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
    }

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="carousel-button-group">
                <ArrowCircleLeftIcon sx={{ fontSize: 50 }} className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
                <ArrowCircleRightIcon sx={{ fontSize: 50 }} onClick={() => next()} />
            </div>
        );
    }

    return (
        <div style={{marginBottom:"5%"}}>
            <h2 style={{ textAlign: "center", paddingTop: "1%" }}>CUSTOMERS REVIEWS</h2>
            <div id="containn">
                <Carousel
                    responsive={responsive}

                    showDots={true}
                    draggable={true}
                    swipeable={true}
                    infinite={true}

                    autoPlaySpeed={1000}
                    keyBoardControl={true}

                    transitionDuration={500}
                    containerClass="carousel-container1"
                    removeArrowOnDeviceType={["mobile"]}
                    arrows={false} customButtonGroup={<ButtonGroup />} renderButtonGroupOutside={true}



                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"


                >
                    <div id='review'>
                        <FormatQuoteIcon sx={{ fontSize: 40, color: "rgb(0, 110, 255)" }} id="quote" />
                        <p>LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </p>
                        <div id="info">
                            <div id='rtname'>
                            <span>full name</span>
                                <Rating name="read-only" value={5} sx={{ paddingTop: "3%" }} precision={0.25} readOnly />

                            </div>
                            <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={iamgeskamlin.imgcustomers1} />
                        </div>

                    </div>
                    <div id='review'>
                        <FormatQuoteIcon sx={{ fontSize: 40, color: "rgb(0, 110, 255)" }} id="quote" />
                        <p>LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </p>
                        <div id="info">
                            <div id='rtname'>
                            <span>full name</span>
                                <Rating name="read-only" value={5} sx={{ paddingTop: "3%" }} precision={0.25} readOnly />

                            </div>
                            <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={iamgeskamlin.imgcustomers2} />
                        </div>

                    </div>
                    <div id='review'>
                        <FormatQuoteIcon sx={{ fontSize: 40, color: "rgb(0, 110, 255)" }} id="quote" />
                        <p>LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </p>
                        <div id="info">
                            <div id='rtname'>
                                <span>full name</span>
                                <Rating name="read-only" value={5} sx={{ paddingTop: "3%" }} precision={0.25} readOnly />

                            </div>
                            <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={iamgeskamlin.imgcustomers3} />
                        </div>

                    </div>
                    <div id='review'>
                        <FormatQuoteIcon sx={{ fontSize: 40, color: "rgb(0, 110, 255)" }} id="quote" />
                        <p>LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </p>
                        <div id="info">
                            <div id='rtname'>
                            <span>full name</span>
                                <Rating name="read-only" value={5} sx={{ paddingTop: "3%" }} precision={0.25} readOnly />

                            </div>
                            <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={iamgeskamlin.imgcustomers4} />
                        </div>

                    </div>


                </Carousel>


            </div>

        </div>
    );
}

export default Seventh;
