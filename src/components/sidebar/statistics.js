import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';

const Statistics = ({setcontent}) => {
    return (
        <ListItemButton onClick={()=>{
            setcontent("statistics")
        }}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Statistics" />
      </ListItemButton>
    );
}

export default Statistics;
