import React, { createContext, useEffect, useMemo, useState } from 'react';
import './page3.css'
import Navbar from '../../components/navbar/navbar';
import { createTheme } from '@mui/material';
import { getDesignTokens } from '../../theme';
import { useLocation, useNavigate } from 'react-router-dom';
import Pageproductcontent from '../../components/pageproductcontent';
import axios from "axios"
export const Page3context = createContext()

const Page3 = () => {
    const [mode, setMode] = useState(() => {
        // Get the mode from local storage or default to 'dark'
        return localStorage.getItem('mode') || 'dark';
    });
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    

    //const [bgclr,setbgslr]=useState(theme.palette.common.white)
    const local = useLocation()
    const navigate = useNavigate()
    const [conteur, setconteur] = useState("transparent")
    useEffect(() => {
        // Update local storage whenever mode changes
        localStorage.setItem('mode', mode);
        setconteur(conteur + 1)
       
        
    }, [mode, local]);
    return (
        <div style={{backgroundColor:theme.palette.mode=="dark"?"black":"white"}}>
            <Page3context.Provider value={{theme,mode,setMode}}>
                <Navbar theme={theme} />
                <Pageproductcontent />
            </Page3context.Provider>
        </div>
    );
}

export default Page3;
