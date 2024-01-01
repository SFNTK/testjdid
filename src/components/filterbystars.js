import React, { useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import { Page2context } from '../pages/page2/page2';
const Filterbystars = () => {
  const navigate=useNavigate()
  const {page,pagination}=useContext(Page2context)
    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            FILTER BY STARS
          
        </AccordionSummary>
        <AccordionDetails sx={{display:"flex",flexDirection:'column'}}>
          <span className='spnpricecon'
          onClick={async()=>{
            navigate(`/products/${page}?filter=rating:4`)

          }}
          >
            <Rating name="read-only" value={4} readOnly />
            <span className='spnup'>&UP</span>
            </span>
          <span className='spnpricecon'    onClick={async()=>{
            navigate(`/products/${page}?filter=rating:3`)

          }}>
            <Rating name="read-only" value={3} readOnly />
            <span  className='spnup'>&UP</span>
            </span>
          <span className='spnpricecon'   onClick={async()=>{
            navigate(`/products/${page}?filter=rating:2`)

          }}  >
            <Rating name="read-only" value={2} readOnly />
            <span  className='spnup'>&UP</span>
            </span>
          <span className='spnpricecon'    onClick={async()=>{
            navigate(`/products/${page}?filter=rating:1`)

          }} >
            <Rating name="read-only" value={1} readOnly />
            <span  className='spnup'>&UP</span>
            </span>
        </AccordionDetails>
        </Accordion>
    );
}

export default Filterbystars;
