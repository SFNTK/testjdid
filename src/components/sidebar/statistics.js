import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useLocation, useNavigate } from 'react-router-dom';

const Statistics = () => {
  const navigate=useNavigate()
const location=useLocation()
    return (
        <ListItemButton onClick={()=>{
          location.pathname.split("/")[2]=="stats"?console.log("7na fiha"):navigate("/admin/stats")
        }}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Statistics" />
      </ListItemButton>
    );
}

export default Statistics;
