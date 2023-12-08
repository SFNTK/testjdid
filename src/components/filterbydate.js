import { AccordionSummary } from '@mui/material';
import React from 'react';
import Accordion from '@mui/material/Accordion';

import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Filterbydate = () => {
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
          <span className='spnprice' onClick={()=>{
            alert("cool")
          }}>TODAY</span>
          <span className='spnprice'>LAST DAY</span>
          <span className='spnprice'>THIS WEEK</span>
          <span className='spnprice'>LAST MONTH</span>
          <span className='spnprice'>LAST TWO MONTHS</span>
          
        </AccordionDetails>
        </Accordion>
    );
}

export default Filterbydate;
