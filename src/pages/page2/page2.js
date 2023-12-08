import React, { useEffect, useMemo, useState } from 'react';
import Testt from '../../components/testt';
import Sidebar from '../../components/sidebar';
import Contentsidebar from '../../components/contentsidebar';
import "./page2.css"
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer';
import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, createTheme } from '@mui/material';
import { getDesignTokens } from '../../theme';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useLocation, useNavigate } from 'react-router-dom';
import Pricefilter from '../../components/pricefilter';
import Filterbydate from '../../components/filterbydate';
import Filterbystars from '../../components/filterbystars';


const Page2 = () => {

    const drawerWidth = 240;
    const local = useLocation()
    const navigate=useNavigate()
    const [mode, setMode] = useState(() => {
        // Get the mode from local storage or default to 'dark'
        return localStorage.getItem('mode') || 'dark';
    });
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    //const [bgclr,setbgslr]=useState(theme.palette.common.white)

    const [conteur, setconteur] = useState("transparent")
    useEffect(() => {
        // Update local storage whenever mode changes
        localStorage.setItem('mode', mode);
        setconteur(conteur + 1)
    }, [mode, local]);
    /* <div>
    /*
    <Box sx={{ display: 'flex' ,zIndex:900}}>
                <CssBaseline />

                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Navbar theme={theme} />
                </AppBar>

                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        zIndex:901,

                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },

                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto',}}>
                       <Pricefilter />
                        <Divider />
                        <Filterbydate/>
                        <Divider/>
                        <Filterbystars/>
                        
                        
                    </Box>

                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3,minHeight:"130vh", position: "relative" }}>
                    <Toolbar />
                    
                    
                </Box>

            </Box> */
           /* <Navbar theme={theme} mode={mode} setmode={setMode} />
            <div id='bigcont'>
                <Sidebar />
                <Contentsidebar />
                
            </div>

        </div>*/
    return (
        <div >
            <Navbar theme={theme}/>
            <div id='conten'>
                <Sidebar/>
                <Contentsidebar/>
            </div>
            
<div id='ftt'>
<button onClick={() => {
                setconteur(conteur+1)
                navigate("/products")
            }} >clck</button>
</div>
        </div>

    );
}

export default Page2;
