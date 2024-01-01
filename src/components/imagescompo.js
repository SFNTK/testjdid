import React, { useEffect, useState } from 'react';

const Imagescompo = ({images,principle}) => {
    const [mainimage,setmain]=useState(`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${principle}`)
    const [mini,setmini]=useState(!images?[]:images)
    const [loading,setloading]=useState(true)
    const [imgs,setimg]=useState()
    useEffect(() => {
        
      
        if(mini.length>0){
            setloading(true)
            const value=mini.map(dt=>{
            return   <img className='miniimages' onClick={()=>{
                setmain(`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${dt}`)
            }} src={`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${dt}`} />
           
        })
        setimg(value)
        setloading(false)
        }
        
      }, [mini]);
    return (
        <div className='imagescompo'>
{loading==true?      <span class="loader" ></span>:<div> <img id='mainimg' src={mainimage}/>
          <div id='miniimg'>
          {imgs}
          </div>
          </div>}


        </div>
    );
}

export default Imagescompo;
