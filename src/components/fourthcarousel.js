import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Fourthcarousel = (props) => {
    const image=`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${props.image}`
    useEffect(() => {
        //Runs only on the first render
        console.log(`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${props.image}`)
      }, []);
   
    return (

        <div className='item'>
            <img className='img1' src={image} />
            <p  className='pdng title1'>
                {props.title}
            </p>
            <span className='pdng'>
                <Rating name="read-only" value={props.stars} precision={0.25} readOnly />
            </span>
            <span className='pdng price1' >{props.price}<sup>DH</sup></span>
        </div>
    );
}

export default Fourthcarousel;
