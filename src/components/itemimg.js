import React, { useContext, useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Dashboardcontext } from '../pages/dashboard/dashboard';
import RestoreIcon from '@mui/icons-material/Restore';

const Itemimg = ({image,deleted,setdeleted}) => {
    const theme = useContext(Dashboardcontext)
    const[supi,setsup] =useState(false)
    const[iconvl,seticonvl]=useState( <DeleteForeverIcon id="icondelete" onClick={()=>{
        setdeleted(image)
                }} sx={{ fontSize: 40 ,alignSelf:"center",justifySelf:"center",marginTop:"1%"}} />)
    useEffect(() => {
        //Runs only on the first render
        if(supi==true){
           seticonvl( <RestoreIcon onMouseEnter={(e)=>{
            e.target.style.color='green'
           }}  id="icondelete" onClick={()=>{
            setsup(!supi)
            for(let i=0;i<deleted.length;i++){
                if(image==deleted[i]){
                    deleted.splice(i,1)
                    i=i-1
                }
            }
           console.log(deleted)
                    }} sx={{ fontSize: 40 ,alignSelf:"center",justifySelf:"center",marginTop:"1%"}}  />)

        }else{
seticonvl( <DeleteForeverIcon id="icondelete"  onMouseEnter={(e)=>{
    e.target.style.color='red'
   }} onClick={()=>{
    setsup(!supi)
    deleted.push(image)
    console.log(deleted)
            }} sx={{ fontSize: 40 ,alignSelf:"center",justifySelf:"center",marginTop:"1%"}} />)
        }
            }, [supi]);
    
    return (
        <div id='item' style={{borderRadius:"5%", boxShadow:`0 5px 10px rgb(135,206,250,0.8`}}>
        <img id='itemimag'  src={`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${image}`} />
       {iconvl}

    </div>
    );
}

export default Itemimg;
