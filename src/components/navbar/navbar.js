import React, { useEffect, useState } from 'react';
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import { Badge, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


import { useLocation, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

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

const Navbar = ({ theme, mode, setmode ,conteur,setconteur}) => {
    const loca=useLocation()
    const navigate=useNavigate()
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [bgggl,setbackf]=useState()
    const [pst,setpst]=useState("absolute")
    const products=useSelector(state=>state.cart.products)
    const[Searchvalue,setsearch]=useState()
   
    useEffect(() => {
        //Runs only on the first render
         
        console.log(loca)
        loca.pathname=="/"?setbackf("transparent"):setbackf("black")
        loca.pathname=="/"?setpst("absolute"):setpst("relative")
      }, [conteur]);
   // const [bggg,setbgg]=useState(mode=="black"?theme.palette.common.white:theme.palette.common.black)



    return (
        <nav id='nvtst' style={{backgroundColor:bgggl,position:pst}}  class="navbar navbar-expand-lg">
            <div class="container-fluid" id='nvpc' style={{ cursor:"pointer",textAlign: "center", backgroundColor: "transparent" }}>
                <span class="navbar-brand" onClick={()=>{
                    navigate("/")
                }} style={{ color: theme.palette.common.white  }}>LOGO</span>


                <ul class="nv1" style={{paddingTop:"1%"}} >
                    <li >
                        <a style={{ textAlign:"center",height:"100%", color: theme.palette.common.white   }} aria-current="page" href="#">Home</a>
                    </li>
                    <li class=" dropdown">
                        <a class="dropdown-toggle" style={{  color: theme.palette.common.white,cursor:"pointer"  }} role="button" data-bs-toggle="dropdown" aria-expanded="false">JERSEYS</a>
                        <ul class="dropdown-menu" style={{ backgroundColor: "grey", border: "none", textAlign: "center" }}>
                            <li class="dropdown-item" >
                                <a style={{  color: theme.palette.common.black  ,cursor:"pointer" }}
                                onClick={()=>{
                                    navigate('/products/morocco?filter=all')
                                }}
                                onMouseEnter={()=>{

                                }}
                                >NATIONAL TEAMS</a></li>
                            <li class="dropdown-item" ><a onClick={()=>{
                                    navigate('/products/napoli?filter=all')
                                }} style={{  color: theme.palette.common.black   }}>TEAMS</a></li>

                        </ul>
                    </li>
                    <li >
                        <a href="#" style={{  color: theme.palette.common.white   }}>
                            ABOUT US
                        </a>

                    </li>
                    <li>
                    <Badge badgeContent={products.length} color="primary">
  <ShoppingCartIcon style={{color:"white"}} onClick={()=>{
    navigate("/cart")
  }}/>
</Badge>
                    </li>


                </ul>
               
                <Search id='srchg'sx={{border:"1px solid",color: theme.palette.common.white , borderColor: theme.palette.common.white}}>
                    <SearchIconWrapper onClick={()=>{
                        navigate(`/products/${Searchvalue}?filter=all`)
                        alert(Searchvalue)
                    }} >
                        <SearchIcon sx={{ color: theme.palette.common.white   }}/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e)=>{
                            setsearch(e.target.value)
                        }}
                    />
                </Search>


            </div>





            <div class="container-fluid"  id='nvtbl' style={{ backgroundColor:theme.palette.common.black,textAlign: "center" }}>
                <a class="navbar-brand" style={{color:theme.palette.common.white}} href="#">LOGO</a>
               
                <div class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <MenuIcon
                     sx={{ fontSize: 40, color:theme.palette.common.white  }} 
                    
                     />
                </div>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 vpp" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
                        <li class="nav-item" >
                            <a class="nav-link active" aria-current="page" href="#" style={{ color: theme.palette.common.white  }} >Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a style={{ color: theme.palette.common.white  }} class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">JERSEYS</a>
                            <ul class="dropdown-menu" style={{ transition:"0.5 ease",border: "none", textAlign: "center" }}>
                                <li class="dropdown-item" style={{transition:"0.5 ease"}} >
                                    <a style={{ color: "white", backgroundColor: isHovered ? "grey" : "transparent" }} class="dropdown-item" href="#" onMouseLeave={() => {
                                        setIsHovered(false)
                                    }}
                                        onMouseEnter={() => {
                                            setIsHovered(true)
                                        }} >NATIONAL TEAM</a></li>
                                <li class="dropdown-item" ><a style={{ color: "white", backgroundColor: isHovered2 ? "grey" : "transparent" }} class="dropdown-item" href="#" onMouseLeave={() => {
                                    setIsHovered2(false)
                                }}
                                    onMouseEnter={() => {
                                        setIsHovered2(true)
                                    }}>TEAM</a></li>

                            </ul>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link " style={{ color: theme.palette.common.white }} href="#" >
                                ABOUT US
                            </a>

                        </li>
                        <Search   onChange={(e)=>{
                                    setsearch(e.target.value)
                                    console.log(Searchvalue)
                                }} sx={{border:"1px solid",color:  theme.palette.common.white  , borderColor:theme.palette.common.white ,width:"50%"}}>
                            <SearchIconWrapper  onChange={(e)=>{
                            setsearch(e.target.value)
                        }} >
                                <SearchIcon sx={{color:theme.palette.common.white }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                              
                            />
                        </Search>


                    </ul>

                </div>
            </div>
           
        </nav>
    );
}

export default Navbar;
