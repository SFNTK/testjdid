import React, { useRef, useState } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Fifth = () => {
    const [hvr,sethvr]=useState("0")
 
    return (
        <div id='ffth'>
            <div id='abt'>
                <h2>ABOUT US</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div id='button' onMouseEnter={()=>{
                   hvr=="0"?sethvr("10"):sethvr("0")

                }} 
                onMouseLeave={()=>{
                    hvr=="0"?sethvr("10"):sethvr("0")
                }}> <ShoppingBagIcon id="icnn" /> SHOP NOW</div>
            </div>
         
                
                
                <div id='overl'></div>
            
        </div>
    );
}

export default Fifth;
