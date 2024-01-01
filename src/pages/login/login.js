import React, { useRef, useState } from 'react';
import './login.css';
import Button from '@mui/material/Button';
import imageskmlin from "../../pictures/index";
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const overlay=useRef()
    const navigate=useNavigate()
    const image=useRef()
    const[erroremail,setemailerror]=useState("")
    const[errorpass,setpasserror]=useState("")
    const email=useRef()
    const pass=useRef()
    const[conteur,setcounteur]=useState(0)
    const[getcookie,setcookie]=useCookies(["acces_token","refresh_token"])
    const handleclick=async()=>{
       try{
        await axios.post(`${process.env.REACT_APP_APIURL}/seller/login`,{email:email.current.value,password:pass.current.value})
        .then(res=>res.data)
        .then(data=>{
            setcookie('acces_token',data.token,{ path: '/' })
            setcookie('refresh_token',data.refresh,{ path: '/' })
            navigate("/admin")


        })
        .catch(err=>{
            console.log(err.message)
        })
       }
       catch(error){

        console.log(error.message)
       }
    }
    return (
        <div id='all'>
            
<div id='imagecontainer' onMouseEnter={()=>{
    overlay.current.style.opacity="1"
    image.current.style.transform= "scale(1.1)";
}} 
onMouseLeave={()=>{
    overlay.current.style.opacity="0"
    image.current.style.transform= "scale(1)";
}}>

    
<img id='imagelogin' ref={image}  src={imageskmlin.imglogin} />
<div id='layover' ref={overlay}></div>
</div>
        
            <form>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" ref={email} class="form-control" onBlur={()=>{
                        if(email.current.value.length==0){
                            setemailerror("write a valid email")
                            setcounteur(conteur+1)
                        }else{
                            setemailerror("")
                            setcounteur(0)
                        }
                        const emailRegex = /\S+@\S+\.\S+/;
                        if(emailRegex.test(email.current.value)){
                            setemailerror("")
                            setcounteur(0)
                        }else{
                            setemailerror(<span><CloseIcon />write a valid email</span>)
                            setcounteur(conteur+1)
                        }
                    }} id="exampleFormControlInput1" placeholder="name@example.com" />
                <span style={{color:"red"}}> {erroremail}</span>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">password</label>
                    <input type="password" class="form-control" ref={pass} onBlur={()=>{
                        if(pass.current.value.length==0){
                            setpasserror(<span><CloseIcon />write a valid password</span>)
                            setcounteur(conteur+1)
                        }else{
                            setpasserror("")
                            setcounteur(0)
                        }
                    }}  id="exampleFormControlInput1" placeholder="***********" />
                    <span style={{color:"red"}}> {errorpass}</span>
                </div>
                <Button sx={{width:"50%",transition:"all .4s ease"}}id='btnsbmt' onClick={()=>{
                    if(conteur==0){

                        handleclick()
                    }
                }}  variant="contained">LOGIN</Button>

            </form>

        </div>
    );
}

export default Login;
