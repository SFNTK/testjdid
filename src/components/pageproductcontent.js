import React, { useEffect, useState } from 'react';
import Imagescompo from './imagescompo';
import Infocompo from './infocompo';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const Pageproductcontent = () => {
    const local = useLocation()
    const [imagecompo, setimagecompo] = useState()

    const [infocompo, setinfocompo] = useState()
    useEffect(() => {
        // Update local storage whenever mode changes
        axios.get(`${process.env.REACT_APP_APIURL}/jersey/onejersey/${local.pathname.split("/")[2]}`).then(res => res.data)
            .then(data => {

                setimagecompo(<Imagescompo principle={data.data.images[0]} images={data.data.images} />)
                setinfocompo(<Infocompo id={data.data._id} title={data.data.name} description={data.data.description} rating={data.data.rating} prices={data.data.prices} />)


            })
            .catch(err => { console.log(err.message) })


    }, []);
    return (
        <div id='pgprdctcont' style={{ width: "100%", padding: "4% 4%" }}>


            {imagecompo}

            {infocompo}


        </div>
    );
}

export default Pageproductcontent;
