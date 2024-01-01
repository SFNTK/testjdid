import React, { useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import Pricefilter from './pricefilter';
import Filterbydate from './filterbydate';
import Filterbystars from './filterbystars';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const[isopen,setopen]=useState(false)
    const navigate=useNavigate()
    return (
        <div  id="menucontainer">
           <div id='dvmenufilter' onClick={()=>{
                setopen(!isopen)

            }} style={{display:"flex"}}>
           <FilterListIcon id='fltricon'  />
            <span style={{marginLeft:"1%",cursor:"pointer"}}>FILTRES</span>
           </div>
            <div id='menufilter' style={{display:isopen==true?"block":"none"}}>
                <Pricefilter navigate={navigate} />
                <Filterbydate navigate={navigate}/>
                <Filterbystars navigate={navigate}/>
            </div>
            
        </div>
    );
}

export default Menu;
