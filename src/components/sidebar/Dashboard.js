import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';


const Dashboard1 = ({setcontent}) => {

   

    return (
        <ListItemButton onClick={()=>{
            alert("test");
            setcontent("dashboard");
        }}>
          <ListItemIcon>
           <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary="DASHBOARD" />

        </ListItemButton>
    );
}

export default Dashboard1;
