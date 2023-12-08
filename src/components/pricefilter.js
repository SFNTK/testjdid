import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Pricefilter = () => {
    return (
        <Accordion sx={{boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            FILTER BY PRICE
          
        </AccordionSummary>
        <AccordionDetails sx={{display:"flex",flexDirection:'column'}}>
          <span className='spnprice' >HIGH TO LOW</span>
          <span className='spnprice'>LOW TO HIGH</span>
          <span className='spnprice'>OVER THAN AVERAGE</span>
          <span className='spnprice'>LOWER THAN AVERAGE</span>
        </AccordionDetails>
        </Accordion>
    );
}

export default Pricefilter;
