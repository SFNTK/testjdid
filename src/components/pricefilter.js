import React, { useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Page2context } from '../pages/page2/page2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Pricefilter = ({ navigate }) => {

  const { contenu, setcontenu, setfilter, page } = useContext(Page2context)


  return (
    <Accordion sx={{ boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        FILTER BY PRICE

      </AccordionSummary>
      <AccordionDetails sx={{ display: "flex", flexDirection: 'column' }}>
        <span className='spnprice' onClick={async () => {
          
          navigate(`/products/${page}?filter=price:htl`)
        }} >HIGH TO LOW</span>
        <span className='spnprice' onClick={async () => {
          
          navigate(`/products/${page}?filter=price:lth`)
        }}>LOW TO HIGH</span>
        <span className='spnprice' onClick={async () => {
          
          navigate(`/products/${page}?filter=price:overaverage`)
        }}>OVER THAN AVERAGE</span>
        <span className='spnprice' onClick={async () => {
        
          navigate(`/products/${page}?filter=price:loweraverage`)
        }}>LOWER THAN AVERAGE</span>
      </AccordionDetails>
    </Accordion>
  );
}

export default Pricefilter;
