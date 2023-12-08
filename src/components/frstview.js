import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Frstview = () => {
    const el=useRef()
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Nostalgic Treasures Await!", "Classic Jersey Vault!", "Heritage Cache!","Vintage Football Trove","winning collection!"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 200,
          backSpeed: 200,
          backDelay: 170,
          loop: true
        });
    
        // Destropying
    
      }, []);
    return (
        <div style={{ zIndex:998,width: "100%", height: "100vh", position: "relative" }}>
        <div id='overlay'></div>
        <div id='imagee'></div>
        <div id='tpoverlay'>
            <h2>Reviving Football Classics!</h2>
            <p>Score iconic nostalgia: Vintage football jerseys for your <span ref={el}></span></p>
        </div>

    </div>
    );
}

export default Frstview;
