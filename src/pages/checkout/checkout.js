import React, { useMemo, useRef, useState } from 'react';
import imgcheck from '../../pictures/index';
import './check.css'
import Navbar from '../../components/navbar/navbar';
import { Button, createTheme } from '@mui/material';
import { getDesignTokens } from '../../theme';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Checkout = () => {
    const products=useSelector(state=>state.cart.products)
    const dispatch=useDispatch()

    const [mode, setMode] = useState(() => {
        // Get the mode from local storage or default to 'dark'
        return localStorage.getItem('mode') || 'dark';
    });
    const first = useRef()
    const last = useRef()
    const email = useRef()
    const phone = useRef()
    const [firsterror, seterorfrst] = useState("")
    const [lasterror, seterorlsst] = useState("")
    const [emailerror, seteroremail] = useState("")
    const [phoneerror, seterorphone] = useState("")
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    const passcommande=async(id)=>{
       for(let i=0;i<products.length;i++){
        if(products[i].id==id){
            await axios.post(`${process.env.REACT_APP_APIURL}/commande/addcommande/${id}`,{
                firstname:first.current.value,
                lastname:last.current.value,
                email:email.current.value,
                phonenumber:phone.current.value,
                quantity:products[i].quantity,
                taille:products[i].taille


         

            }).then(res=>res.data).then(data=>{
                console.log(data.message)
            }).catch(error=>{
                console.log(error.message)
            })
        }
       }
    }
    return (
        <div>
            <Navbar theme={theme} />
            <div id='conto'>

                <img src={imgcheck.imgchck} />
                <form style={{ boxShadow: "0 5px 10px rgb(0,0,0,0.5)", padding: "2%", borderRadius: "5%" }}>
                    <div style={{ marginTop: "2%" }} >
                        <label for="exampleFormControlInput1" class="form-label">first name</label>
                        <input type="text" class="form-control" onBlur={(e) => {
                            if (e.target.value.length == 0) {
                                seterorfrst("you have to write your first name")
                            } else {
                                seterorfrst("")
                            }

                        }} id="exampleFormControlInput1" ref={first} placeholder="the name of the jersey" />
                    </div>

                    <span>{firsterror}</span>
                    <div style={{ marginTop: "2%" }}>
                        <label for="exampleFormControlInput2" class="form-label">last name</label>
                        <input type="text" class="form-control" onBlur={(e) => {
                            if (e.target.value.length == 0) {
                                seterorlsst("you have to write your last name")
                            } else {
                                seterorlsst("")
                            }
                        }} id="exampleFormControlInput2" ref={last} placeholder="the name of the jersey" />
                    </div>

                    <span>{lasterror}</span>
                    <div style={{ marginTop: "2%" }} >
                        <label for="exampleFormControlInput3" class="form-label">email</label>
                        <input type="text" class="form-control"
                            onBlur={(e) => {
                                if (e.target.value.length == 0) {
                                    seteroremail("you have to write your email")
                                } else {
                                    seteroremail("")
                                }
                                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                if (emailPattern.test(e.target.value)) {
                                    seteroremail("")
                                } else {
                                    seteroremail("you have to write a valid email")
                                }
                            }}

                            id="exampleFormControlInput3" ref={email} placeholder="the name of the jersey" />
                    </div>

                    <span >{emailerror}</span>
                    <div style={{ marginTop: "2%" }}>
                        <label for="exampleFormControlInput4" class="form-label">phone number</label>
                        <input type="text" class="form-control" onBlur={(e) => {
                            if (e.target.value.length == 10) {

                                if (e.target.value[0] == "0") {
                                    if (e.target.value[1] == "6" || e.target.value[1] == "7") {
                                        seterorphone("")
                                    } else {
                                        seterorphone("you have to write your phone number")

                                    }
                                } else {
                                    seterorphone("you have to write your phone number")
                                }
                            } else {
                                seterorphone("you have to write your phone number")
                            }



                        }} id="exampleFormControlInput4" ref={phone} placeholder="the name of the jersey" />
                    </div>
                    <span>{phoneerror}</span>
                    <Button variant='contained' onClick={()=>{
                        for(let i=0;i<products.length;i++){
                            passcommande(products[i].id)
                        }
                    }} style={{backgroundColor:'#00B0FF',marginTop:"3%"}}>CHECKOUT</Button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
