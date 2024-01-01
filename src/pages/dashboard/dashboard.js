import React, { createContext, useEffect, useMemo, useState } from 'react';
import './dashboard.css'
import { AppBar, Avatar, Box, CssBaseline, Divider, Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Toolbar, createTheme, styled } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getDesignTokens } from '../../theme';

import Navbar2 from '../../components/navbar/navbar2';
import { ThemeProvider } from '@emotion/react';
import Sidebarcontent from '../../components/sidebarcontent';
import { useContext } from 'react';
import { useCookies } from 'react-cookie';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export const Dashboardcontext=createContext()
const Dashboard = () => {
    const drawerWidth = 240;
    const local = useLocation()
    
  
    const [content,setcontent]=useState()
    const [mode, setMode] = useState(() => {
        // Get the mode from local storage or default to 'dark'
        return localStorage.getItem('mode') || 'dark';


      });

      const [open, setOpen] = React.useState(false);
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
const navigate=useNavigate()
const [getcookies,setcookies]=useCookies(["acces_token","refresh_token"])

    const [conteur, setconteur] = useState("transparent")
    useEffect(() => {
        // Update local storage whenever mode changes
        if(!getcookies.refresh_token||!getcookies.acces_token||getcookies.acces_token==null){
          navigate('/login')
        }
        localStorage.setItem('mode', mode);
        setconteur(conteur + 1)
        local.pathname.split("/")[2]==""?navigate("/admin"):console.log("perfectp")
        
        
      
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
        <Dashboardcontext.Provider value={theme} >
          <Outlet clr="sf sd9at" />
          </Dashboardcontext.Provider>
        </Box>
      </Box>
      </ThemeProvider>
    );
}

export default Dashboard;
