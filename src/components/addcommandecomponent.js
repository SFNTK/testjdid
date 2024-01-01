import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removefromcard } from '../redux/productreducer';

const Addcommandecomponent = ({ prdcts, setprdcts, setOpen, settext2,setrefresheur ,refresheur}) => {
    const firstname = useRef()
    const lastname = useRef()
    const email = useRef()
    const phone = useRef()
    const [errorfrst, setfrst] = useState()
    const [errorlst, setlst] = useState()
    const [erroremail, seterremail] = useState()
    const [errorphone, setphoneer] = useState()
    const [conte, setconte] = useState(0)
    const products=useSelector(state=>state.cart.products)
    const dispatch=useDispatch()



    return (
        <form>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">FIRST NAME</label>
                <input type="text" ref={firstname} class="form-control" onBlur={() => {
                    if (firstname.current.value.length == 0) {

                        setfrst("you must write a valid name")
                        setconte(1)

                    } else {
                        setfrst("")
                        setconte(0)
                    }
                }} id="exampleFormControlInput1" placeholder="name@example.com" />
                <span>{errorfrst}</span>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">LAST NAME</label>
                <input type="text" ref={lastname} class="form-control" onBlur={() => {
                    if (lastname.current.value.length == 0) {

                        setlst("you must write a valid name")
                        setconte(1)

                    } else {
                        setlst("")
                        setconte(0)

                    }
                }} id="exampleFormControlInput1" placeholder="name@example.com" />
                <span>{errorlst}</span>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" ref={email} class="form-control" onBlur={() => {
                    if (email.current.value.length == 0) {
                        setconte(1)
                        return seterremail("you must write a valid email")

                    } else {
                        seterremail("")
                        setconte(0)
                    }
                    const emailRegex = /\S+@\S+\.\S+/;
                    const email1 = email.current.value
                    if (emailRegex.test(email1)) {
                        setconte(0)
                        seterremail("")
                    } else {
                        setconte(1)
                        seterremail("you must write a valid email")
                    }

                }} id="exampleFormControlInput1" placeholder="name@example.com" />
                <span>{erroremail}</span>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">PHONE NUMBER</label>
                <input type="text" ref={phone} class="form-control" onBlur={() => {
                    if (phone.current.value.length == 0 || phone.current.value.length < 10) {
                        setconte(1)
                        return setphoneer("you must write a valid name")

                    } else {
                        setconte(0)
                        setphoneer('')
                    }
                    if ((phone.current.value[0] == "0") && (phone.current.value[1] == "6" || phone.current.value[1] == "7")) {
                        setconte(0)
                    } else {
                        setconte(1)
                        return setphoneer("you must write a valid name")

                    }
                }} id="exampleFormControlInput1" placeholder="name@example.com" />
                <span>{errorphone}</span>
            </div>

            <Button sx={{ width: "90%" }} variant="contained" disableElevation onClick={async () => {
                try {
                    console.log(prdcts)
                    if (conte == 0) {
                        for (let i = 0; i < prdcts.length; i++) {


                            prdcts[i].firstname = firstname.current.value
                            prdcts[i].lastname = lastname.current.value
                            prdcts[i].email = email.current.value
                            prdcts[i].phonenumber = phone.current.value
                            prdcts[i].test = "ok"



                        }
                        for (let i = 0; i < prdcts.length; i++) {
                            if (i > 0) {
                                if (prdcts[i].id == prdcts[i - 1].id && prdcts[i].quantity == prdcts[i - 1].quantity && prdcts[i].taille == prdcts[i - 1].taille) {
                                    prdcts.splice(i, 1)
                                    i = i - 1;
                                }
                            }
                        }
                        console.log(prdcts[0].test + " " + prdcts[0].id)
                        console.log(prdcts)
                        
                    }
                } catch (error) {
                    console.log(error.message)
                }

            }}>
                ADD COMMANDE
            </Button>

        </form>
    );
}

export default Addcommandecomponent;
