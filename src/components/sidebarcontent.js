import React, { useEffect, useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useNavigate } from 'react-router-dom';
import Dashboard1 from './sidebar/Dashboard';
import Statistics from './sidebar/statistics';
import Jerseys from './sidebar/jerseys';
const Sidebarcontent = ({setcontent}) => {
   
  
    return (
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" sx={{bgcolor:"transparent"}} id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
        <Dashboard1 setcontent={setcontent}/>
      
      <Statistics setcontent={setcontent}/>
      <Jerseys setcontent={setcontent}/>

      
      
    </List>
    );
}

export default Sidebarcontent;
