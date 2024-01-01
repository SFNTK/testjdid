import { Rating } from '@mui/material';
import React, { useRef } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const Cardproduct = (props) => {
    const image=`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${props.image}`
    return (
       
            <div id='card'>
                <img className='prdctimg' src={image} />
                <div className='prdctinfo'>
                    <span className='prdctnamme'>{props.name}</span>
                    <span className='prdctprice'>{props.price}<sup>DH</sup></span>
                    <Rating className='prdctrating' value={props.stars} readOnly />
                    <div id='button2' style={{color:"black",}}> <ShoppingBagIcon id="icnn" />buy now</div>
         
                </div>

            </div>
           
    
    );
}

export default Cardproduct;
