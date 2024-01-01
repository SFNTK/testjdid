import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { removefromcard } from '../redux/productreducer';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Cartcomponent = (props) => {
    const [status, setstatus] = useState()
    const [price, setprice] = useState(0)
    const [img1,setimg1]=useState()
    const products=useSelector(state=>state.cart.products)
    const dispatch=useDispatch()
    useEffect(() => {
        //Runs only on the first render
        try {
            axios.get(`${process.env.REACT_APP_APIURL}/jersey/onejersey/${props.id}`).then(res => res.data)
            .then(data => {
                for (let i = 0; i < data.data.prices.length; i++) {
                    if (props.taille == data.data.prices[i].taille) {
                        if (parseInt(data.data.prices[i].quantity) >= parseInt(props.quantity)) {
                            setstatus("in stock")
                            console.log('gere'+props.id+" "+props.name)
                            setprice(parseInt(props.quantity) * parseFloat(data.data.prices[i].price))
                           
                            if(props.prdcts.length>=1){
                                console.log("a")
                               
                            }
                            else{
                                props.setprdcts(prevArray => [...prevArray, {id:props.id,quantity:props.quantity,finalprice:parseInt(props.quantity) * parseFloat(data.data.prices[i].price),taille:props.taille}]);
    
                            }
                           
                        } else {
                            setstatus("out of stock")
                            setprice(parseInt(props.quantity)*parseFloat(data.data.prices[i].price))
                           

                        }
                        setimg1(data.data.images[0])
                    }
                }
             
            })
            .catch(err => {
                console.log(err.message)
            })
        }
        catch (error) {
            console.log(error)
        }

    }, []);



    return (
    

      
                    <tr>
                        <td data-th="Product">
                            <div class="row">
                                <div class="col-md-3 text-left">
                                    <img src={`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${img1}`} style={{height:"auto",width:"240px"}} alt="" class="img-fluid  d-md-block rounded mb-2 shadow "/>
                                </div>
                                <div class="col-md-9 text-left mt-sm-2">
                                    <h4>{props.name}</h4>
                                    <p class="font-weight-light">{status}</p>
                                </div>
                            </div>
                        </td>
                        <td data-th="Price">{price}</td>
                        <td data-th="Quantity">
                        {props.quantity}
                        </td>
                        <td class="actions" data-th="">
                            <div class="text-right">
                             
                              
                                    <DeleteForeverIcon sx={{fontSize:40}} id='trsh' onClick={()=>{
                dispatch(removefromcard({id:props.id}))
            }}/>
                             
                            </div>
                        </td>
                    </tr>
                  
              

   
    );
}

export default Cartcomponent;
