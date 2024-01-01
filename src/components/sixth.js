import React, { useEffect, useState } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Carousel from 'react-multi-carousel';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Rating } from '@mui/material';
import axios from 'axios';
import Fourthcarousel from './fourthcarousel';


const Sixth = () => {
    const [content,setcontent]=useState(<div></div>)


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
    };
useEffect(() => {
  //Runs only on the first render
  try{
    axios.get(`${process.env.REACT_APP_APIURL}/commande/trendy`).then(res=>res.data).then(data=>{
        const values=data.data.map((dt)=>{
            return <Fourthcarousel image={dt.images[0]} title={dt.name} price={dt.prices[0].price} stars={dt.rating} id={dt._id} />
          
        })
        setcontent(values)

    })
    .catch(error=>{
        console.log(error)
    })
  }
  catch(err){
    console.log(err)

  }


}, []);


    return (
        <div  id="containn">
            <Carousel
                responsive={responsive}
sx={{position:"relative"}}
                showDots={true}
                draggable={true}
                swipeable={true}
                infinite={true}

                autoPlaySpeed={1000}
                keyBoardControl={true}

                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["mobile"]}
                arrows={false} customButtonGroup={<ButtonGroup />} renderButtonGroupOutside={true}



                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"

               
            >
                {content}

            </Carousel>
        </div>
    )
}

export default Sixth;
