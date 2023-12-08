import { useEffect, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { getDesignTokens } from './theme';
import Navbar from './components/navbar/navbar';
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/footer';
import Page1 from './pages/page1/page1';

function App() {
  const [mode, setMode] = useState(() => {
    // Get the mode from local storage or default to 'dark'
    return localStorage.getItem('mode') || 'dark';
  });
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  //const [bgclr,setbgslr]=useState(theme.palette.common.white)

  const [conteur,setconteur]=useState("transparent")
 
const local=useLocation()

  useEffect(() => {
    // Update local storage whenever mode changes
    localStorage.setItem('mode', mode);
    setconteur(conteur+1)
  }, [mode,local]);
 // <div style={{ backgroundColor:"transparent" ,position:"relative", width: '100%',minHeight:"100vh" }}>  </div>

  return (
    <ThemeProvider theme={theme}>
    
        <Navbar theme={theme} mode={mode} setmode={setMode} conteur={conteur}/>
          <Page1/>
        <Footer setconteur={setconteur} conteur={conteur}/>
        
       
    
    </ThemeProvider>
  );
}

export default App;
