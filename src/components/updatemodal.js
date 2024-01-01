import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box, Button, Typography } from '@mui/material';
import Cnttable from './cnttable';
import axios from 'axios';
import { useCookies } from 'react-cookie';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight:"90vh",
    overflow:"scroll"
       
  };


const Updatemodal = (props) => {
    const [getcookies, setcookies] = useCookies(["acces_token", "refresh_token"])

    const [contenu,setcontenu]=useState(<div></div>)

    useEffect(() => {
        //Runs only on the first render
        const vl=props.prices.map(dt=>{
            return  <Cnttable taille={dt.taille} price={dt.price} quantity={dt.quantity}/>
        })

        setcontenu(vl)
      }, [props]);

    const handleClose = () => props.setOpen(false);
    return (
        <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      
      >
        <Box sx={style}>
           <h1> {props.name}</h1>
           <p>{props.description}</p>
 
            <div class="table-responsive bg-white">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th scope="col">taille</th>
                    <th scope="col">quantity</th>
                    <th scope="col">price</th>
                   
                  </tr>
                </thead>
                <tbody>
                 {contenu}
                
                 
               
                
                </tbody>
                
              </table>
              <div style={{margin:"3%",display:"flex",justifyContent:"space-around",backgroundColor:'transparent'}}>
                <Button variant='contained' color='error'>BACK</Button>
                 <Button variant='contained' color='success' onClick={async()=>{
                   try{    
              
                    await axios.put(`${process.env.REACT_APP_APIURL}/jersey/updatejersey/${props.id}`,{
                      name:props.name,
                      rating:props.rating,
                      prices:JSON.stringify(props.prices),
                      categorie:props.categorie,
                      description:props.description
                    }
                    ).then(res=>res.data).then(data=>{
                        console.log(data.message)
                    }).catch(error=>{
console.log(error.message)
                    })
                   }catch(err){
console.log("err "+err.message)
                   }

                 }}>SUBMIT</Button>
                 </div>
            </div>
      
        </Box>
      </Modal>
    );
}

export default Updatemodal;
