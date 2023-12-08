import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Pagination1 = ({setPage}) => {
    const [pagi,setpagi]=useState()
    
  const handleChange = (event, value) => {

    setPage(value)
  };
    return (
        <Pagination   sx={{marginTop:"9%"}} count={10} variant="outlined" onChange={handleChange} />
    );
}

export default Pagination1;
