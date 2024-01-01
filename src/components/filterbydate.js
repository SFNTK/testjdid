import { AccordionSummary } from '@mui/material';
import React, { useContext } from 'react';
import Accordion from '@mui/material/Accordion';

import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { Page2context } from '../pages/page2/page2';
import Cardproduct from './cardproduct';
import { Link, useNavigate } from 'react-router-dom';

const Filterbydate = () => {
  const navigate=useNavigate()
  const {setrefreshedlink,refreshlink,setfilter,pagival,setpagival, contenu, setcontenu ,page,setPage,pagination,setlast,pagin,setpagin} = useContext(Page2context)
    return (
        <Accordion sx={{marginTop:"2%",boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            FILTER BY DATE
          
        </AccordionSummary>
        <AccordionDetails sx={{display:"flex",flexDirection:'column',textAlign:"center"}}>
        <span className='spnprice' onClick={async()=>{
           navigate(`/products/${page}?filter=date:0`)
         
            
          }}>TODAY</span>
       
         
          <span className='spnprice' onClick={async()=>{
           
           navigate(`/products/${page}?filter=date:1`)
            
          }}>LAST DAY</span>
          <span className='spnprice' onClick={async()=>{
            navigate(`/products/${page}?filter=date:7`)
            
          }} >THIS WEEK</span>
          <span className='spnprice' onClick={async()=>{
             navigate(`/products/${page}?filter=date:30`)
          
            
          }}>LAST MONTH</span>
          <span className='spnprice' onClick={async()=>{
           
           navigate(`/products/${page}?filter=date:90`)
            
          }}>LAST TWO MONTHS</span>
          
        </AccordionDetails>
        </Accordion>
    );
}

export default Filterbydate;
