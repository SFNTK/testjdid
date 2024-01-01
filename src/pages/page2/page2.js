import React, { createContext, useEffect, useMemo, useState } from 'react';
import Testt from '../../components/testt';
import Sidebar from '../../components/sidebar';
import Contentsidebar from '../../components/contentsidebar';
import "./page2.css"
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer';
import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Menu, Toolbar, Typography, createTheme } from '@mui/material';
import { getDesignTokens } from '../../theme';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useLocation, useNavigate } from 'react-router-dom';
import Pricefilter from '../../components/pricefilter';
import Filterbydate from '../../components/filterbydate';
import Filterbystars from '../../components/filterbystars';
import { ThemeProvider } from '@emotion/react';
import axios from 'axios';
import Cardproduct from '../../components/cardproduct';
export const Page2context = createContext()


const Page2 = () => {
    const [last, setlast] = useState(10)
    const location = useLocation()
    const[pagival,setpagival]=useState("all")
    const[refreshlink,setrefreshedlink]=useState(true)
    const drawerWidth = 240;
    const [contenu, setcontenu] = useState()
    const [pagination, setpagination] = useState(1)
   const [filter,setfilter]=useState(location.search.split("?")[1].split('=')[1])
    const local = useLocation()
  
    const [page, setPage] = React.useState(location.pathname.split("/")[2]);
    const navigate = useNavigate()
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
        try {
         
          
            if(location.search.split("?")[1].split('=')[1]=="all"){
                axios.get(`${process.env.REACT_APP_APIURL}/jersey/getjerseybykey/${page}?page=${pagination}&limit=10`)
                .then(res=>res.data)
                .then(data=>{
                    setlast(data.pagination[0].last)
                    const values=data.liste.map(dt=>{
                        return <Cardproduct image={dt.the_jersey.images[0]} price={dt.the_jersey.prices[0].price} name={dt.the_jersey.name} stars={dt.the_jersey.rating} />
    
                    })
                    setcontenu(values)
                })
                .catch(err=>{
                    console.log(err.message)
                })
    
            }else{
                
                if(location.search.split("?")[1].split('=')[1].split(":")[0]=="date"){
                    axios.get(`${process.env.REACT_APP_APIURL}/jersey/getjerseybydate/${page}/${location.search.split("?")[1].split('=')[1].split(":")[1]}?page=${pagination}&limit=10`)
                    .then(res=>res.data)
                    .then(data=>{
                        console.log(location.search.split("?")[1].split('=')[1].split(":")[1])
                        setlast(data.pagination[0].last)
                        const values=data.liste.map(dt=>{
                            return <Cardproduct image={dt.images[0]} price={dt.prices[0].price} name={dt.name} stars={dt.rating} />

                        })
                        setcontenu(values)
                    })
                    .catch()

                }
                else 
                if(location.search.split("?")[1].split('=')[1].split(":")[0]=="rating"){
                    axios.get(`${process.env.REACT_APP_APIURL}/jersey/getjerseysbyrating/${page}/${location.search.split("?")[1].split('=')[1].split(":")[1]}?page=${pagination}&limit=10`)
                    .then(res=>res.data)
                    .then(data=>{
                        setlast(data.pagination[0].last)
                        console.log(pagination)
                        console.log(data.pagination[0].last)
                        if(pagination>data.pagination[0].last){
                            setpagination(1)
                        }
                        const values=data.liste.map(dt=>{
                            return <Cardproduct image={dt.images[0]} price={dt.prices[0].price} name={dt.name} stars={dt.rating} />

                        })
                        setcontenu(values)
                    })
                    .catch(err=>{
                        console.log(err.message)
                    })
                }else 
                if(location.search.split("?")[1].split('=')[1].split(":")[0]=="price"){
                    axios.get(`${process.env.REACT_APP_APIURL}/jersey/getjerseysbyprice/${page}/${location.search.split("?")[1].split('=')[1].split(":")[1]}?page=${pagination}&limit=10`)
                    .then(res=>res.data)
                    .then(data=>{
                        setlast(data.pagination[0].last)
                        if(pagination>data.pagination[0].last){
                            setpagination(1)
                        }
                        const values=data.liste.map(dt=>{
                            return <Cardproduct image={dt.the_jersey.images[0]} price={dt.the_jersey.prices[0].price} name={dt.the_jersey.name} stars={dt.the_jersey.rating} />


                        })
                        setcontenu(values)
                    })
                    .catch(err=>err.message)
                }
            }}catch(error){
                console.log(error.message)
            }

     
    }, [mode, local,pagination]);
 
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
            <Navbar theme={theme} />

            <div id='conten'>
                <Page2context.Provider value={{setrefreshedlink,refreshlink,setfilter,pagival,setpagival, contenu, setcontenu, page, setPage, pagination, setpagination, last, setlast }} >


                    <Sidebar />
                    <Contentsidebar />
                </Page2context.Provider>
            </div>


            <div id='ftt'>
               <Footer/>
            </div>
        </div>

    );
}

export default Page2;
