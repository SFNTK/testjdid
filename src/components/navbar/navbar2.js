import React, { useEffect, useState } from 'react';
import './navbar2.css';
import PersonIcon from '@mui/icons-material/Person';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled from '@emotion/styled';
import { alpha } from '@mui/material';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));



const Navbar2 = ({theme,mode,setMode}) => {


  /*  useEffect(() => {
        //Runs only on the first render
        localStorage.getItem("mode") == "dark" ? setdarkorlight(<LightModeIcon onClick={() => {
            localStorage.setItem("mode", "light");
            setconteur(conteur + 1)

        }} />) : setdarkorlight(<DarkModeIcon onClick={() => {
            localStorage.setItem("mode", "dark");
            setconteur(conteur + 1)
        }} />)

    }, [conteur]);*/
   



    return (
        <div id='nav2' 
        style={{
            backgroundColor:mode=="dark"?theme.palette.common.black:theme.palette.primary.light,
            color:mode=="dark"?theme.palette.common.white:theme.palette.common.black
        
        }} className="navbar navbar-expand-lg">
            <div id='nav2pc'>
                <span className="navbar-brand" style={{width:"30%",color:mode=="dark"?theme.palette.common.white:theme.palette.common.black
        }}>LOGO</span>

                <ul>
                    <li><PersonIcon /></li>
                    <li>{theme.palette.mode=="dark"?<LightModeIcon onClick={()=>{
                        setMode((prevMode) =>
                        prevMode === 'light' ? 'dark' : 'light',
                      );
                    }}/>:<DarkModeIcon onClick={()=>{
                        setMode((prevMode) =>
                        prevMode === 'light' ? 'dark' : 'light',
                      );
                    }}/>}</li>

                </ul>
                <Search sx={{width:"30%",border:"1px solid",color: theme.palette.common.white , borderColor: theme.palette.common.white}}>
                    <SearchIconWrapper>
                        <SearchIcon sx={{ color: theme.palette.common.white   }}/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </div>

        </div>
    );
}

export default Navbar2;
