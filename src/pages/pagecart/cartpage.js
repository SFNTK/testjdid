import React, { createContext, useEffect, useMemo, useState } from 'react';
import './catpage.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Navbar from '../../components/navbar/navbar';
import { Alert, Button, createTheme } from '@mui/material';
import { getDesignTokens } from '../../theme';
import { useSelector } from 'react-redux';
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Cartcomponent from '../../components/cartcomponent';
import Addcommandecomponent from '../../components/addcommandecomponent';
import { useNavigate } from 'react-router-dom';
export const Pagecartcontext = createContext()
const Cartpage = () => {
    const [mode, setMode] = useState(() => {
        // Get the mode from local storage or default to 'dark'
        return localStorage.getItem('mode') || 'dark';
    });
    const navigate=useNavigate()
    const [total,settotal]=useState(0)
    const products2=useSelector(state=>state.cart.products)
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    const products = useSelector(state => state.cart.products)
    const [cartvalue, setcartvalue] = useState([])
    const [prdcts, setprdcts] = useState([])
    const [open, setOpen] = React.useState(false);
    const[text2,settext2]=useState()
    const[refresheur,setrefresheur]=useState(0)
    const handleClick = () => {
        setOpen(true);
      };
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    useEffect(() => {
        //Runs only on the first render
        const value = products.map((dt) => {
          
           
            
            return <Cartcomponent settotal={settotal} total={total} prdcts={prdcts} setprdcts={setprdcts} id={dt.id} name={dt.title} description={dt.description} taille={dt.taille} quantity={dt.quantity} />
        })
        setcartvalue(value)
    }, [products2]);
    //  <h1 style={{ textAlign: 'center', marginTop: "2%", display: "flex", alignItems: "center", justifyContent: "center" }}><span>YOUR CART</span> <ShoppingBagIcon style={{ color: mode == "dark" ? "white" : "black", fontSize: 40 }} /></h1>
            
    return (
        <div>
            <Pagecartcontext.Provider value={{}}>
                <Navbar theme={theme} />
                  <section class="pt-5 pb-5">
  <div class="container">
    <div class="row w-100">
        <div class="col-lg-12 col-md-12 col-12">
            <h2 style={{display:"flex",alignItems:"center",justifyContent:"center"}}><span>Shopping Cart </span><ShoppingBagIcon style={{ color: mode == "dark" ? "white" : "black", fontSize: 40 }} /></h2>
            <p class="mb-5 text-center">
                <i class="text-success font-weight-bold" >{products2.length}</i> items in your cart </p>
            <table id="shoppingCart" class="table table-condensed table-responsive">
                <thead>
                    <tr>
                        <th style={{width:"60%"}}>Product</th>
                        <th style={{width:"12%"}}>Price</th>
                        <th style={{width:"10%"}}>Quantity</th>
                        <th style={{width:"16%"}}></th>
                    </tr>
                </thead>
                <tbody>
                    {cartvalue}
                </tbody>
            </table>
          
        </div>
    </div>
    <div class="row mt-4 d-flex align-items-center">
        <div class="col-sm-6 order-md-2 text-right">
        <Button variant='contained' color='success' onClick={()=>{
            navigate('/checkout')
           }}>CHECKOUT</Button>
        </div>
      
    </div>
</div>
</section>

            </Pagecartcontext.Provider>
        </div>
    );
}

export default Cartpage;
