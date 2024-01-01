import { Button, Checkbox, FormControlLabel } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


const Addjersey = () => {
    const instance = axios.create();
    const [tailleSchecked, settailleSchecked] = React.useState(false);
    const [tailleMchecked, settailleMchecked] = React.useState(false);
    const [tailleXLchecked, settailleXLchecked] = React.useState(false);
    const [taille2XLchecked, settaille2XLchecked] = React.useState(false);
    const [tailleXchecked, settailleXchecked] = React.useState(false);
    const [taillequantityprice, settaillequantityprice] = useState([])
    const [getcookies, setcookies] = useCookies(["acces_token", "refresh_token"])
const navigate=useNavigate()
    const [imagescontin, setimagescontin] = useState()

    const taillemprice = useRef()
    const taillemquantity = useRef()

    const taillexprice = useRef()
    const taillexquantity = useRef()

    const taillesprice = useRef()
    const taillesquantity = useRef()

    const taillexlprice = useRef()
    const taillexlquantity = useRef()

    const taille2xlprice = useRef()
    const taille2xlquantity = useRef()

    const [images,setimages] = useState([])
    const [mainimage,setmain] = useState();
    const nameref=useRef()
    const descpref=useRef()

    const refreshToken = async () => {
        try {
            const res = await instance.post(`${process.env.REACT_APP_APIURL}/seller/refresh`, { refresh: getcookies.refresh_token });
            if (res && res.status == 200) {
                setcookies("acces_token", res.data.token)
                return instance.request(res.config);
            } else {
                navigate("/login")
            }
        }
        catch (error) {
            console.log("the error is " + error.message)
        }


    }


    const addjrsy=async(theimages)=>{
        try{
            const formdata=new FormData()
          
 for(let i=0;i<theimages.length;i++){
    formdata.append(`images`,theimages[i])
 }
            formdata.append('name',nameref.current.value)
            formdata.append('description',descpref.current.value)
            console.log(JSON.stringify(taillequantityprice))
            formdata.append('prices',JSON.stringify(taillequantityprice))
            formdata.append('categorie',"team")
            formdata.append('rating',0)
            const response=await instance.post(`${process.env.REACT_APP_APIURL}/jersey/addjersey`,formdata,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },
            })

            if(response.status==200){
                alert(response.data.message)
            }

        }catch(err){
console.log(err.message)
        }
    }

    useEffect(() => {
        //Runs only on the first render
        instance.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && error.response.status === 401 && !error.config._retry) {
                    error.config._retry = true;
                    try {
                        const token = await refreshToken();
                        error.config.headers.Authorization = `Bearer ${token}`;
                        return instance(error.config);
                    } catch (refreshError) {
                        return Promise.reject(refreshError);
                    }
                }
                return Promise.reject(error);
            }
        );

      
    }, [getcookies.acces_token]);

    
    const handleChange = async (refe, refe2, taillechecked, settaillechecked, taillequantityprice, settaillequantityprice, taille) => {

        let arr = taillequantityprice
        if (taillechecked == false) {
            arr.push({
                "taille": taille, "quantity": refe.current.value, "price": refe2.current.value
            })
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

    return (
        <div style={{padding:"2% 5%"}}>
<h2 style={{textAlign:"center",paddingBottom:"6px"}}>ADD JERSEY</h2>
            <form >
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" ref={nameref} placeholder="the name of the jersey" />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlInput1" ref={descpref} placeholder="description of the jersey" />
                </div>

                <div class="mb-3" style={{ width: "60%" }}>
                    <label for="exampleFormControlInput1" style={{ width: "20%" }} class="form-label">SELECT SIZES:</label>
                    <div style={{ display: "flex", justifyContent: "space-around",paddingBottom:"2%",alignItems: "center" }}>
                        <FormControlLabel control={<Checkbox onChange={(event) => {
                            handleChange(taillemquantity, taillemprice, tailleMchecked, settailleMchecked, taillequantityprice, settaillequantityprice, "M")
                        }} />} label="TAILLE M" />
                        <input type="number" ref={taillemquantity} onChange={(e) => {
                            handleaddquantity(e.target.value, "M")

                        }} style={{ width: "20%" }} disabled={!tailleMchecked} class="form-control" id="exampleFormControlInput1" placeholder="quantity" />
                        <input type="text" ref={taillemprice} onChange={(e) => {
                            handleaddprice(e.target.value, "M")

                        }} style={{ width: "20%" }} disabled={!tailleMchecked} class="form-control" id="exampleFormControlInput1" placeholder="price" />

                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around",paddingBottom:"2%",alignItems: "center" }}>
                        <FormControlLabel control={<Checkbox onChange={(event) => {
                            handleChange(taillesquantity, taillesprice, tailleSchecked, settailleSchecked, taillequantityprice, settaillequantityprice, "S")

                        }} />} label="TAILLE S" />
                        <input type="number" ref={taillesquantity} style={{ width: "20%" }} onChange={(e) => {
                            handleaddquantity(e.target.value, "S")

                        }} disabled={!tailleSchecked} class="form-control" id="exampleFormControlInput1" placeholder="quantity" />
                        <input type="text" style={{ width: "20%" }} ref={taillesprice} onChange={(e) => {
                            handleaddprice(e.target.value, "S")

                        }} disabled={!tailleSchecked} class="form-control" id="exampleFormControlInput1" placeholder="price" />

                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around",paddingBottom:"2%",alignItems: "center" }}>
                        <FormControlLabel control={<Checkbox onChange={(event) => {
                            handleChange(taillexquantity, taillexprice, tailleXchecked, settailleXchecked, taillequantityprice, settaillequantityprice, "X")

                        }} />} label="TAILLE X" />
                        <input type="number" style={{ width: "20%" }} ref={taillexquantity} onChange={(e) => {
                            handleaddquantity(e.target.value, "X")

                        }} disabled={!tailleXchecked} class="form-control" id="exampleFormControlInput1" placeholder="quantity" />
                        <input type="text" style={{ width: "20%" }} ref={taillexprice} onChange={(e) => {
                            handleaddprice(e.target.value, "X")

                        }} disabled={!tailleXchecked} class="form-control" id="exampleFormControlInput1" placeholder="price" />

                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around",paddingBottom:"2%",alignItems: "center" }}>
                        <FormControlLabel control={<Checkbox onChange={(event) => {
                            handleChange(taillexlquantity, taillexlprice, tailleXLchecked, settailleXLchecked, taillequantityprice, settaillequantityprice, "XL")

                        }} />} label="TAILLE XL" />
                        <input type="number" style={{ width: "20%" }} ref={taillexlquantity} onChange={(e) => {
                            handleaddquantity(e.target.value, "XL")

                        }} disabled={!tailleXLchecked} class="form-control" id="exampleFormControlInput1" placeholder="quantity" />
                        <input type="text" style={{ width: "20%" }} ref={taillexlprice} onChange={(e) => {
                            handleaddprice(e.target.value, "XL")

                        }} disabled={!tailleXLchecked} class="form-control" id="exampleFormControlInput1" placeholder="price" />

                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around",paddingBottom:"2%",alignItems: "center" }}>
                        <FormControlLabel control={<Checkbox onChange={(event) => {
                            handleChange(taille2xlquantity, taille2xlprice, taille2XLchecked, settaille2XLchecked, taillequantityprice, settaillequantityprice, "2XL")

                        }} />} label="TAILLE 2XL" />
                        <input type="number" style={{ width: "20%" }} ref={taille2xlquantity} onChange={(e) => {
                            handleaddquantity(e.target.value, "2XL")

                        }} disabled={!taille2XLchecked} class="form-control" id="exampleFormControlInput1" placeholder="quantity" />
                        <input type="text" style={{ width: "20%" }} ref={taille2xlprice} onChange={(e) => {
                            handleaddprice(e.target.value, "2XL")

                        }} disabled={!taille2XLchecked} class="form-control" id="exampleFormControlInput1" placeholder="price" />

                    </div>
                </div>

                <div class="mb-3">
                    <label for="formFile" class="form-label">CHOOSE THE MAIN IMAGE</label>
                    <input accept='image/*' multiple class="form-control" type="file" onChange={(e)=>{
                        setmain(e.target.files[0])
                    }} id="formFile"  />
                </div>
                <input type='number' class="form-control" id="exampleFormControlInput1" onBlur={(e) => {
                    if (typeof parseInt(e.target.value) === 'number' && e.target.value % 1 === 0) {
                        let arr = []
                        for (let i = 0; i < e.target.value; i++) {
                            arr.push(<input type='file' style={{marginTop:"1%"}} accept='image/*'
                             onChange={(e)=>{
                                let arre=images
                                arre.push(e.target.files[0])
                                console.log("hh")
                              
                                
                                setimages(arre) 
                                console.log(images)
                                

                            }} class="form-control" id="exampleFormControlInput1"   />)
                        }

                        setimagescontin(arr)

                    }
                }} placeholder="how much jersey's image would you want to add" />
                <div class="mb-3">

                    <label for="formFile" class="form-label">CHOOSE OTHER IMAGES</label>

                    {imagescontin}
                </div>
               
      

                <Button variant="contained" style={{width:"50%"}} onClick={() => {
                    
          let arre=[]
          arre[0]=mainimage
          for(let i=0;i<images.length;i++){
            arre.push(images[i])
          }
          addjrsy(arre)

                 
                    //console.log(mainimage)
                /*    let ary=[]
                    ary.push(mainimage)
                    ary.push(images)
                    console.log("tt")
                    console.log(ary)
                    console.log(mainimage)
                    console.log("images")
                    console.log(images)*/
                    //console.log(finalarray[2])
              
                    
                  
                  

               
                  
                }}>ADD JERSEY</Button>
            </form>
        </div>
    );
}

export default Addjersey;
