import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useLocation, useNavigate } from 'react-router-dom';


const Dashboard1 = () => {
const navigate=useNavigate()
const location=useLocation()
   

    return (
        <ListItemButton onClick={()=>{
            location.pathname.split("/")[2]=="dashboard"?console.log("7na fiha"):navigate("/admin")
            
            
        }}>
          <ListItemIcon>
           <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary="DASHBOARD" />

        </ListItemButton>
    );
}

export default Dashboard1;
