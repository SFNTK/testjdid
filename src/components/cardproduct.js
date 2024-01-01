import { Rating } from '@mui/material';
import React, { useRef } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const Cardproduct = () => {
    return (
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap", columnGap: "3%", rowGap: "10px" }}>
            <div id='card'>
                <img className='prdctimg' src="./ronaldo-wc2002-vaultleadjpg.jpg" />
                <div className='prdctinfo'>
                    <span className='prdctnamme'>REAL MADRID</span>
                    <span className='prdctprice'>25<sup>DH</sup></span>
                    <Rating className='prdctrating' value={3} readOnly />
                    <div id='button2' style={{color:"black",}}> <ShoppingBagIcon id="icnn" />buy now</div>
         
                </div>

            </div>
            <div id='card'>
                <img className='prdctimg' src="./wp9333076.jpg" />
                <div className='prdctinfo'>
                    <span className='prdctnamme'>REAL MADRID</span>
                    <span className='prdctprice'>25<sup>DH</sup></span>
                    <Rating className='prdctrating' value={3} readOnly />
                    <div id='button2' style={{color:"black",}}> <ShoppingBagIcon id="icnn" />buy now</div>
         
                </div>

            </div>
            <div id='card'  >

                <img className='prdctimg'
                    src='./387829160_849057019928982_6794097387075104108_n.jpg' />


                <div className='prdctinfo'>
                    <span className='prdctnamme'>REAL MADRID</span>
                    <span className='prdctprice'>25<sup>DH</sup></span>
                    <Rating className='prdctrating' value={3} readOnly />
                    <div id='button2' style={{color:"black",}}> <ShoppingBagIcon id="icnn" />buy now</div>
                </div>

            </div>
            <div id='card'>
                <img className='prdctimg' src='./387873626_850677586433592_3454741033777112757_n.jpg' />
                <div className='prdctinfo'>
                    <span className='prdctnamme'>REAL MADRID</span>
                    <span className='prdctprice'>25<sup>DH</sup></span>
                    <Rating className='prdctrating' value={3} readOnly />
                    <div id='button2' style={{color:"black",}}> <ShoppingBagIcon id="icnn" />buy now</div>
         
                </div>

            </div>
            <div id='card'>
                <img className='prdctimg' src='./ronaldo-wc2002-vaultleadjpg.jpg' />
                <div className='prdctinfo'>
                    <span className='prdctnamme'>REAL MADRID</span>
                    <span className='prdctprice'>25<sup>DH</sup></span>
                    <Rating className='prdctrating' value={3} readOnly />
                    <div id='button2' style={{color:"black",}}> <ShoppingBagIcon id="icnn" />buy now</div>
         
                </div>

            </div>
            
        </div>
    );
}

export default Cardproduct;
