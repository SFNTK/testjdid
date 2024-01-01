import React, { useRef } from 'react';
import imageskamlin from '../pictures/index'

const Scndview = () => {
    const refer = useRef()
    const refer2 = useRef()

    const refer3 = useRef()
    const refer4 = useRef()

    const refer5 = useRef()
    const refer6 = useRef()

    const refer7 = useRef()
    const refer8 = useRef()
    return (

        <div id='scnd'>
            <div id='cntr' onMouseEnter={() => {
                    refer.current.style.transform = 'scale(1.1)';
                    refer2.current.style.transition = "width 0.5s ease"
                    refer2.current.style.width = '30%';



                }}
                    onMouseLeave={() => {
                        refer.current.style.transform = 'scale(1)';

                        refer2.current.style.borderBottom = 'none';
                        refer2.current.style.width = '0%';
                    }}
>
                <img ref={refer} src={imageskamlin.imgman} />
                <div 
                    id='overay'>
                    <p style={{ cursor: "pointer" }} >RETRO JERSEYS</p>
                    <div ref={refer2} style={{ height: "1%", backgroundColor: "white" }}></div>
                </div>
            </div>

           
            <div id='cntr'
                onMouseEnter={() => {
                    refer3.current.style.transform = 'scale(1.1)';
                    refer4.current.style.transition = "width 0.5s ease"
                    refer4.current.style.width = '30%';



                }}
                onMouseLeave={() => {
                    refer3.current.style.transform = 'scale(1)';

                    refer4.current.style.borderBottom = 'none';
                    refer4.current.style.width = '0%';
                }}
            >
                <img ref={refer3} src={imageskamlin.imgmaroc} />
                <div
                    id='overay'>
                    <p style={{ cursor: "pointer" }} >MOROCCAN JERSEYS</p>
                    <div ref={refer4} style={{ height: "1%", backgroundColor: "white" }}></div>
                </div>
            </div>
            <div id='cntr'
                onMouseEnter={() => {
                    refer5.current.style.transform = 'scale(1.1)';
                    refer6.current.style.transition = "width 0.5s ease"
                    refer6.current.style.width = '30%';



                }}
                onMouseLeave={() => {
                    refer5.current.style.transform = 'scale(1)';

                    refer6.current.style.borderBottom = 'none';
                    refer6.current.style.width = '0%';
                }}
            >
                <img ref={refer5} src={imageskamlin.imgmilito} />
                <div
                    id='overay'>
                    <p style={{ cursor: "pointer" }} >LEGANDARY JERSEYS</p>
                    <div ref={refer6} style={{ height: "1%", backgroundColor: "white" }}></div>
                </div>
            </div>

            <div id='cntr'>
                <img ref={refer7} src={imageskamlin.imgronaldo} />
                <div onMouseEnter={() => {
                    refer8.current.style.transition = "width 0.5s ease"
                    refer7.current.style.transform = 'scale(1.1)';
                
                    refer8.current.style.width = '30%';



                }}
                    onMouseLeave={() => {
                        refer7.current.style.transform = 'scale(1)';

                       
                        refer8.current.style.width = '0%';
                    }}

                    id='overay'>
                    <p style={{ cursor: "pointer" }} >NATIONAL TEAMS JERSEYS</p>
                    <div id='ttt' ref={refer8} style={{ height: "1%", backgroundColor: "white" ,transition:"0.5s ease"}}></div>
                </div>
            </div>
           

        </div>
    );
}

export default Scndview;
