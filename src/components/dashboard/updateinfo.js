import { Button, Checkbox, FormControlLabel,Select,InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import Updatemodal from '../updatemodal';

import MenuItem from '@mui/material/MenuItem';


const Updateinfo = ({ id, jersey }) => {

    const [getcookies, setcookies] = useCookies(["acces_token", "refresh_token"])
    const [mdl, setmdl] = useState([])
    const taillemprice = useRef()
    const taillemquantity = useRef()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const [olddate, setold] = useState([])
    const[rating,setrating]=useState()

    const nameref = useRef()
    const descpref = useRef()

    const taillexprice = useRef()
    const taillexquantity = useRef()

    const taillesprice = useRef()
    const taillesquantity = useRef()

    const taillexlprice = useRef()
    const taillexlquantity = useRef()
    const [categorie, setcategorie] = React.useState('');

    const handleChangeslct = (event) => {
        setcategorie(event.target.value);
    };


    const taille2xlprice = useRef()
    const taille2xlquantity = useRef()

    const [tailleSchecked, settailleSchecked] = useState(false);
    const [tailleMchecked, settailleMchecked] = useState(false);
    const [tailleXLchecked, settailleXLchecked] = useState(false);
    const [taille2XLchecked, settaille2XLchecked] = useState(false);
    const [tailleXchecked, settailleXchecked] = useState(false);
    const [taillequantityprice, settaillequantityprice] = useState([])



    const handleChange = async (refe, refe2, taillechecked, settaillechecked, taillequantityprice, settaillequantityprice, taille) => {

        let arr = taillequantityprice
        let found = 0
        let conteur = 0;
        if (taillechecked == false) {
            for (let i = 0; i < arr.length; i++) {
                if (taille == arr[i].taille) {
                    conteur = conteur + 1
                }
            }


            if (conteur == 0) {

                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].taille == taille.toLowerCase()) {
                        arr[i] =
                        {
                            "taille": taille, "quantity": refe.current.value, "price": refe2.current.value
                        }

                    } else {
                        found = found + 1
                    }
                }
                if (found == arr.length) {

                    arr.push({
                        "taille": taille, "quantity": refe.current.value, "price": refe2.current.value
                    })

                }
                found = 0
            }


            conteur = 0

        } else {

            for (let i = 0; i < arr.length; i++) {
                if (arr[i].taille == taille) {
                    arr.splice(i, 1)
                }

            }


        }
        await settaillequantityprice(arr)

        await settaillechecked(!taillechecked);
    };

    const handleaddquantity = async (quantity, taille) => {
        for (let i = 0; i < taillequantityprice.length; i++) {
            if (taillequantityprice[i].taille == taille) {
                taillequantityprice[i].quantity = parseInt(quantity)
            }
        }
    }


    const handleaddprice = async (price, taille) => {
        for (let i = 0; i < taillequantityprice.length; i++) {
            if (taillequantityprice[i].taille == taille) {
                taillequantityprice[i].price = parseFloat(price)
            }
        }
    }


    /* useEffect(() => {
         //Runs only on the first render
 
         settailleSchecked(false);
         settailleMchecked(false);
         settailleXLchecked(false);
         settaille2XLchecked(false);
         settailleXchecked(false);
          taillemprice.current.value=null 
          taillemquantity.current.value=null 
     
          nameref.current.value=null 
          descpref.current.value=null
     
          taillexprice.current.value=null 
          taillexquantity.current.value=null 
     
        taillesprice.current.value=null
      taillesquantity.current.value=null
     
    taillexlprice.current.value=null
         taillexlquantity.current.value=null
     
  taille2xlprice.current.value=null 
  taille2xlquantity.current.value=null 
 
 
         axios.get(`${process.env.REACT_APP_APIURL}/jersey/onejersey/${id}`).then(res => res.data).then(data => {
 let supa=[]
 supa=taillequantityprice
             for(let i=0;i<supa.length;i++){
                 supa.splice(i,1)
                 
             }
             settaillequantityprice(supa)
             data.data.prices.map(dt => {
                 console.log(dt.taille)
                 switch (dt.taille.toLowerCase()) {
                     case 's':
 
                         taillesprice.current.value = dt.price
                         taillesquantity.current.value = dt.quantity
                         handleChange(taillesquantity, taillesprice, tailleSchecked, settailleSchecked, taillequantityprice, settaillequantityprice, "s")
 
 
                         break;
                     case 'm':
 
                         taillemprice.current.value = dt.price
                         taillemquantity.current.value = dt.quantity
                         handleChange(taillemquantity, taillemprice, tailleMchecked, settailleMchecked, taillequantityprice, settaillequantityprice, "m")
 
 
 
                         break;
                     case "x":
 
                         taillexprice.current.value = dt.price
                         taillexquantity.current.value = dt.quantity
                         handleChange(taillexquantity, taillexprice, tailleXchecked, settailleXchecked, taillequantityprice, settaillequantityprice, "x")
 
 
 
 
 
                         break;
                     case 'xl':
 
                         taillexlprice.current.value = dt.price
                         taillexlquantity.current.value = dt.quantity
                         // Expected output: "Mangoes and papayas are $2.79 a pound."
                         handleChange(taillexlquantity, taillexlprice, tailleXLchecked, settailleXLchecked, taillequantityprice, settaillequantityprice, "XL")
 
 
                         break;
                     case "2xl":
 
                         taille2xlprice.current.value = dt.price
                         taille2xlquantity.current.value = dt.quantity
                         handleChange(taille2xlquantity, taille2xlprice, taille2XLchecked, settaille2XLchecked, taillequantityprice, settaillequantityprice, "2XL")
 
 
                     default:
                         console.log(`Sorry, we are out of .`);
                 }
 
 
             })
             nameref.current.value = data.data.name
             descpref.current.value = data.data.description
 
 
         }).catch(error => {
             console.log(error.message)
 
         })
 
 
     }, [id]);*/



    useEffect(() => {
        //Runs only on the first render
        let array = []
setmdl([])



        let tailles = []
        axios.get(`${process.env.REACT_APP_APIURL}/jersey/onejersey/${id}`).then(res => res.data).then(data => {
            setcategorie(data.data.categorie)
            setrating(data.data.rating)

            for (let j = 0; j < data.data.prices.length; j++) {

                olddate.push(data.data.prices[j])
                console.log("e")
            }
            for (let i = 0; i < data.data.prices.length; i++) {
                tailles.push(data.data.prices[i].taille.toLowerCase())
            }
            if (!tailles.includes("m")) {
                taillemprice.current.value = null
                taillemquantity.current.value = null
                if (taillequantityprice.length > 0) {
                    for (let i = 0; i < taillequantityprice.length; i++) {
                        if (taillequantityprice[i].taille == "m") {
                            taillequantityprice.splice(i, 1)
                        }
                    }
                }

            }


            if (!tailles.includes("2xl")) {
                taille2xlprice.current.value = null
                taille2xlquantity.current.value = null
                if (taillequantityprice.length > 0) {
                    for (let i = 0; i < taillequantityprice.length; i++) {
                        if (taillequantityprice[i].taille == "2xl") {
                            taillequantityprice.splice(i, 1)
                        }
                    }
                }

            }
            if (!tailles.includes("xl")) {
                taillexlprice.current.value = null
                taillexlquantity.current.value = null
                if (taillequantityprice.length > 0) {
                    for (let i = 0; i < taillequantityprice.length; i++) {
                        if (taillequantityprice[i].taille == "xl") {
                            taillequantityprice.splice(i, 1)
                        }
                    }
                }

            }
            if (!tailles.includes("x")) {
                taillexprice.current.value = null
                taillexquantity.current.value = null
                if (taillequantityprice.length > 0) {
                    for (let i = 0; i < taillequantityprice.length; i++) {
                        if (taillequantityprice[i].taille == "x") {
                            taillequantityprice.splice(i, 1)
                        }
                    }
                }

            }
            if (!tailles.includes("s")) {
                taillesprice.current.value = null
                taillesquantity.current.value = null
                if (taillequantityprice.length > 0) {
                    for (let i = 0; i < taillequantityprice.length; i++) {
                        if (taillequantityprice[i].taille == "s") {
                            taillequantityprice.splice(i, 1)
                        }
                    }
                }

            }

            settaille2XLchecked(false)
            settailleMchecked(false)
            settailleSchecked(false)
            settailleXLchecked(false)
            settailleXchecked(false)

            data.data.prices.map(dt => {

                settaillequantityprice([{
                    taille: "s", quantity: null, price: null
                }, {
                    taille: "m", quantity: null, price: null
                }, {
                    taille: "x", quantity: null, price: null
                }, {
                    taille: "xl", quantity: null, price: null
                }, {
                    taille: "2xl", quantity: null, price: null
                },]
                )


                switch (dt.taille.toLowerCase()) {
                    case 'm':

                        taillemprice.current.value = dt.price
                        taillemquantity.current.value = dt.quantity
                        for (let i = 0; i < taillequantityprice.length; i++) {
                            if (taillequantityprice[i].taille == dt.taille.toLowerCase()) {
                                taillequantityprice[i] = {
                                    "taille": dt.taille.toLowerCase(), "quantity": dt.quantity, "price": dt.price
                                }

                            }
                        }




                        break;
                    case 's':

                        taillesprice.current.value = dt.price
                        taillesquantity.current.value = dt.quantity

                        for (let i = 0; i < taillequantityprice.length; i++) {
                            if (taillequantityprice[i].taille == dt.taille.toLowerCase()) {
                                taillequantityprice[i] =
                                {
                                    "taille": dt.taille.toLowerCase(), "quantity": dt.quantity, "price": dt.price
                                }

                            }
                        }
                        break;

                    case 'x':

                        taillexprice.current.value = dt.price
                        taillexquantity.current.value = dt.quantity

                        console.log('Mangoes and papayas are $2.79 a pound.');
                        for (let i = 0; i < taillequantityprice.length; i++) {
                            if (taillequantityprice[i].taille == dt.taille.toLowerCase()) {
                                taillequantityprice[i] =
                                {
                                    "taille": dt.taille.toLowerCase(), "quantity": dt.quantity, "price": dt.price
                                }

                            }
                        }
                        // Expected output: "Mangoes and papayas are $2.79 a pound."
                        break;
                    case 'xl':

                        taillexlprice.current.value = dt.price
                        taillexlquantity.current.value = dt.quantity

                        for (let i = 0; i < taillequantityprice.length; i++) {
                            if (taillequantityprice[i].taille == dt.taille.toLowerCase()) {
                                taillequantityprice[i] =
                                {
                                    "taille": dt.taille.toLowerCase(), "quantity": dt.quantity, "price": dt.price
                                }

                            }
                        }
                        break;
                    case '2xl':

                        taille2xlprice.current.value = dt.price
                        taille2xlquantity.current.value = dt.quantity


                        break;
                    default:
                        console.log(`Sorry, we are out of .`);
                }




            })
            nameref.current.value = data.data.name
            descpref.current.value = data.data.description



        }).catch(err => {
            console.log(err.message)
        })

    }, [id])


    return (
        <div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">name</label>
                <input type="text" ref={nameref} class="form-control" id="exampleFormControlInput1" />
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">description</label>
                <textarea ref={descpref} class="form-control" id="exampleFormControlInput1" />
            </div>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">categorie</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categorie}
                label="categorie"
                onChange={handleChangeslct}
            >
                <MenuItem value={"team"}>team</MenuItem>
                <MenuItem value={"national team"}>national team</MenuItem>
                <MenuItem value={"other"}>other</MenuItem>
            </Select>
            </FormControl>
            <div class="mb-3" style={{ width: "60%" }}>
                <label for="exampleFormControlInput1" style={{ width: "20%" }} class="form-label">SELECT SIZES:</label>
                <div style={{ display: "flex", justifyContent: "space-around", paddingBottom: "2%", alignItems: "center" }}>
                    <FormControlLabel control={<Checkbox checked={tailleMchecked} onChange={(event) => {
                        handleChange(taillemquantity, taillemprice, tailleMchecked, settailleMchecked, taillequantityprice, settaillequantityprice, "M")
                    }} />} label="TAILLE M" />
                    <input type="number" ref={taillemquantity} onChange={(e) => {
                        handleaddquantity(e.target.value, "M")

                    }} style={{ width: "20%" }} disabled={!tailleMchecked} defaultValue={null} class="form-control" id="exampleFormControlInput1" placeholder="quantity" />
                    <input type="text" defaultValue={null} ref={taillemprice} onChange={(e) => {
                        handleaddprice(e.target.value, "M")

                    }} style={{ width: "20%" }} disabled={!tailleMchecked} class="form-control" id="exampleFormControlInput1" placeholder="price" />

                </div>

                <div style={{ display: "flex", justifyContent: "space-around", paddingBottom: "2%", alignItems: "center" }}>
                    <FormControlLabel control={<Checkbox checked={tailleSchecked} onChange={(event) => {
                        handleChange(taillesquantity, taillesprice, tailleSchecked, settailleSchecked, taillequantityprice, settaillequantityprice, "S")

                    }} />} label="TAILLE S" />
                    <input type="number" ref={taillesquantity} defaultValue={null} style={{ width: "20%" }} onChange={(e) => {
                        handleaddquantity(e.target.value, "S")

                    }} disabled={!tailleSchecked} class="form-control" id="exampleFormControlInput1" placeholder="quantity" />
                    <input type="text" style={{ width: "20%" }} defaultValue={null} ref={taillesprice} onChange={(e) => {
                        handleaddprice(e.target.value, "S")

                    }} disabled={!tailleSchecked} class="form-control" id="exampleFormControlInput1" placeholder="price" />

                </div>

                <div style={{ display: "flex", justifyContent: "space-around", paddingBottom: "2%", alignItems: "center" }}>
                    <FormControlLabel control={<Checkbox checked={tailleXchecked} onChange={(event) => {
                        handleChange(taillexquantity, taillexprice, tailleXchecked, settailleXchecked, taillequantityprice, settaillequantityprice, "X")

                    }} />} label="TAILLE X" />
                    <input type="number" style={{ width: "20%" }} defaultValue={null} ref={taillexquantity} onChange={(e) => {
                        handleaddquantity(e.target.value, "X")

                    }} disabled={!tailleXchecked} class="form-control" id="exampleFormControlInput1" placeholder="quantity" />
                    <input type="text" style={{ width: "20%" }} defaultValue={null} ref={taillexprice} onChange={(e) => {
                        handleaddprice(e.target.value, "X")

                    }} disabled={!tailleXchecked} class="form-control" id="exampleFormControlInput1" placeholder="price" />

                </div>

                <div style={{ display: "flex", justifyContent: "space-around", paddingBottom: "2%", alignItems: "center" }}>
                    <FormControlLabel control={<Checkbox checked={tailleXLchecked} onChange={(event) => {
                        handleChange(taillexlquantity, taillexlprice, tailleXLchecked, settailleXLchecked, taillequantityprice, settaillequantityprice, "XL")

                    }} />} label="TAILLE XL" />
                    <input type="number" style={{ width: "20%" }} defaultValue={null} ref={taillexlquantity} onChange={(e) => {
                        handleaddquantity(e.target.value, "XL")

                    }} disabled={!tailleXLchecked} class="form-control" id="exampleFormControlInput1" placeholder="quantity" />
                    <input type="text" style={{ width: "20%" }} defaultValue={null} ref={taillexlprice} onChange={(e) => {
                        handleaddprice(e.target.value, "XL")

                    }} disabled={!tailleXLchecked} class="form-control" id="exampleFormControlInput1" placeholder="price" />

                </div>

                <div style={{ display: "flex", justifyContent: "space-around", paddingBottom: "2%", alignItems: "center" }}>
                    <FormControlLabel control={<Checkbox checked={taille2XLchecked} onChange={(event) => {
                        handleChange(taille2xlquantity, taille2xlprice, taille2XLchecked, settaille2XLchecked, taillequantityprice, settaillequantityprice, "2XL")

                    }} />} label="TAILLE 2XL" />
                    <input type="number" style={{ width: "20%" }} defaultValue={null} ref={taille2xlquantity} onChange={(e) => {
                        handleaddquantity(e.target.value, "2XL")

                    }} disabled={!taille2XLchecked} class="form-control" id="exampleFormControlInput1" placeholder="quantity" />
                    <input type="text" style={{ width: "20%" }} defaultValue={null} ref={taille2xlprice} onChange={(e) => {
                        handleaddprice(e.target.value, "2XL")

                    }} disabled={!taille2XLchecked} class="form-control" id="exampleFormControlInput1" placeholder="price" />

                </div>
            </div>
            <Button variant='contained' color='success' onClick={async () => {
                console.log(taillequantityprice)
                console.log(olddate)
                let are = []
                let conteurr = 0
                for (let i = 0; i < taillequantityprice.length; i++) {
                    if (taillequantityprice[i].quantity == "" || taillequantityprice[i].quantity == null) {
                        if (taillequantityprice[i].price == "" || taillequantityprice[i].price == null) {
                            conteurr = conteurr + 1
                        } else {
                            conteurr = conteurr + 1
                        }
                    } else {
                        are.push(taillequantityprice[i])

                    }

                }
                console.log(taillequantityprice)
                let arreoete = []
                arreoete = taillequantityprice
                for (let m = 0; m < arreoete.length; m++) {
                    if (arreoete[m].quantity == null || arreoete[m].quantity == "") {
                        arreoete.splice(m, 1)
                        m = m - 1
                    }
                }
                settaillequantityprice(arreoete)
                let modalarray = []
                modalarray.push({

                    prices: taillequantityprice,
                    nom: nameref.current.value,
                    description: descpref.current.value
                })
                setmdl(modalarray)
                setOpen(true)
                console.log(taillequantityprice)
                console.log('prices')
           
                console.log(mdl)
                console.log(are)

            }}>TEST</Button>

            {mdl.length > 0 ? <Updatemodal open={open} rating={rating} categorie={categorie} setOpen={setOpen} id={id} handleOpen={handleOpen} name={mdl[0].nom} prices={mdl[0].prices} description={mdl[0].description} />
                : <div></div>}








        </div>
    );
}

export default Updateinfo;
