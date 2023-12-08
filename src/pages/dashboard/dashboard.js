import React, { useEffect, useMemo, useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Avatar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, Toolbar, Typography, createTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDesignTokens } from '../../theme';
import Navbar from '../../components/navbar/navbar';
import Navbar2 from '../../components/navbar/navbar2';
import { ThemeProvider } from '@emotion/react';
import Sidebarcontent from '../../components/sidebarcontent';

const Dashboard = () => {
    const drawerWidth = 240;
    const local = useLocation()
  
    const [content,setcontent]=useState()
    const [mode, setMode] = useState(() => {
        // Get the mode from local storage or default to 'dark'
        return localStorage.getItem('mode') || 'dark';
    });
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


    const [conteur, setconteur] = useState("transparent")
    useEffect(() => {
        // Update local storage whenever mode changes
        localStorage.setItem('mode', mode);
        setconteur(conteur + 1)
      
    }, [mode, local]);
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Navbar2 theme={theme} mode={mode} setMode={setMode}/>
        </AppBar>
        <Drawer
          variant="permanent"
          PaperProps={{
            sx: {
              backgroundColor:mode=="dark"?theme.palette.common.black:theme.palette.primary.light,
            
            }
          }}
          sx={{
            width: drawerWidth,
         
         
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            
          }}
        >
          <Toolbar />
          <div style={{height:"100%" ,paddingLeft:"2%",display:"flex",flexDirection:"column"}}>
            <Avatar  sx={{ width: 84, height: 84 ,alignSelf:'center'}} src='./cristiano-ronaldo-4k-portugal-footballer-wallpaper-preview.jpg'/>
         <Sidebarcontent setcontent={setcontent}/>
          </div>
          
          

          
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {content}
        </Box>
      </Box>
      </ThemeProvider>
    );
}

export default Dashboard;
