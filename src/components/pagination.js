import { Pagination } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Page2context } from '../pages/page2/page2';

const Pagination1 = ({last}) => {
  const { pagival,setpagival,setpagination,pagination} = useContext(Page2context)
  
    
  const handleChange = (event, value) => {
    
  
    setpagination(value)
  };
    return (
        <Pagination   sx={{marginTop:"9%"}} count={last} variant="outlined" onChange={handleChange} />
    );
}

export default Pagination1;
