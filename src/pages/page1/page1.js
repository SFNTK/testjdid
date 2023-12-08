import React, { useEffect, useRef } from 'react';
import './page1.css'
import Typed from 'typed.js';
import Frstview from '../../components/frstview';
import Scndview from '../../components/scndview';
import Third from '../../components/third';
import Fourth from '../../components/fourth';
import Fifth from '../../components/fifth';
import Sixth from '../../components/sixth';
import Seventh from '../../components/seventh';
const Page1 = () => {

    useEffect(() => {
        //Runs only on the first render
       
      }, []);

    return (
        <div >
            <Frstview />

            <Scndview />
            <Third/>
            <Fourth/>
            <Fifth/>
            <Sixth/>
            <Seventh/>
        </div>
    );
}

export default Page1;
