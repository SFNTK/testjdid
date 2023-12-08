import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';
const Filterbystars = () => {
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
          <span className='spnprice' >
            <Rating name="read-only" value={4} readOnly />
            <span className='spnprice'>MORE THAN 4</span>
            </span>
          <span >
            <Rating name="read-only" value={3} readOnly />
            <span className='spnprice'>ORE THAN 3</span>
            </span>
          <span >
            <Rating name="read-only" value={2} readOnly />
            <span className='spnprice'>MORE THAN 2</span>
            </span>
          <span >
            <Rating name="read-only" value={1} readOnly />
            <span className='spnprice'>MORE THAN 1</span>
            </span>
        </AccordionDetails>
        </Accordion>
    );
}

export default Filterbystars;
