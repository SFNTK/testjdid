import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import UpdateIcon from '@mui/icons-material/Update';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Jerseys = ({setcontent}) => {
    const [open, setOpen] = React.useState(true);
   

    const handleClick = () => {
      setOpen(!open);
    };
    return (
        <div>
            <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CheckroomIcon/>
        </ListItemIcon>
        <ListItemText primary="JERSEYS" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={()=>{
            setcontent("add jersey")
          }}>
            <ListItemIcon>
            <AddCircleIcon/>
            </ListItemIcon>
            <ListItemText primary="ADD JERSEY" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={()=>{
            setcontent("update jersey")
          }}>
            <ListItemIcon>
            <UpdateIcon/>
            </ListItemIcon>
            <ListItemText primary="UPDATE JERSEY" />
          </ListItemButton>
        </List>
      </Collapse>
        </div>
    );
}

export default Jerseys;
