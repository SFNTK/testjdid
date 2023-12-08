import React, { useEffect, useMemo, useState } from 'react';
import './page3.css'
import Navbar from '../../components/navbar/navbar';
import { createTheme } from '@mui/material';
import { getDesignTokens } from '../../theme';
import { useLocation, useNavigate } from 'react-router-dom';
import Pageproductcontent from '../../components/pageproductcontent';
const Page3 = () => {
    const [mode, setMode] = useState(() => {
        // Get the mode from local storage or default to 'dark'
        return localStorage.getItem('mode') || 'dark';
    });
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    //const [bgclr,setbgslr]=useState(theme.palette.common.white)
    const local = useLocation()
    const navigate=useNavigate()
    const [conteur, setconteur] = useState("transparent")
    useEffect(() => {
        // Update local storage whenever mode changes
        localStorage.setItem('mode', mode);
        setconteur(conteur + 1)
    }, [mode, local]);
    return (
        <div>
           <Navbar theme={theme}/>
           <Pageproductcontent/>
        </div>
    );
}

export default Page3;
