import React, { useContext, useEffect, useState } from 'react';
import Cardproduct from './cardproduct';
import Pagination1 from './pagination';
import { useLocation } from 'react-router-dom';
import { Page2context } from '../pages/page2/page2';
import axios from 'axios';
import Menu from './menu';


const Contentsidebar = () => {
const location=useLocation()
  const { refreshlink,contenu, setcontenu ,page,pagination,setlast,last} = useContext(Page2context)
  const [filter,setfilter]=useState(location.search.split("?")[1].split('=')[1])
  const [filteroffilter,setfilteroffilter]=useState()
  
 
  


  

  

  return (
    <div id="content" >
      <h1 style={{padding:"3% 0%"}}>
        you are searching:
        {page}
      </h1>
    
      <h2></h2>
      <Menu/>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap", columnGap: "3%", rowGap: "10px" }}>
        {contenu}

      </div>
      <Pagination1  last={last} />

    </div>
  );
}

export default Contentsidebar;
