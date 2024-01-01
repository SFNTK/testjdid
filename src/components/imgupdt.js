import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Itemimg from './itemimg';
import { Button } from '@mui/material';

import RestoreIcon from '@mui/icons-material/Restore';
import { Dashboardcontext } from '../pages/dashboard/dashboard';


const Imgupdt = (props) => {
    const theme = useContext(Dashboardcontext)
    const [dsp,setdsp]=useState("none")
    const [editedmai,seteditedmain]=useState()
    const [main, setmain] = useState()
    const [editedimgs, seteditedimgs] = useState([])
    const [isedited, setisedited] = useState(0)
    const [other, setother] = useState([])
    const [deleted, setdeleted] = useState([])
    const [content, setcontnt] = useState(<div></div>)
    const [conter, setconter] = useState(0)
    const [iconmain, seticonmain] = useState(<DeleteForeverIcon
        onMouseEnter={(e) => {
            e.target.style.color = theme.palette.error.main
        }}

        onClick={() => {

            if (isedited == 0) {
                setisedited(1)
            } else {
                setisedited(0)
            }
            setconter(conter + 1)
        }}
        id="icondelete" sx={{ fontSize: 40, color: theme.palette.error.main }} />)
    const referec = useRef()
    useEffect(() => {
        //Runs only on the first render
        try {
            axios.get(`${process.env.REACT_APP_APIURL}/jersey/onejersey/${props.id}`).then(res => res.data).then(data => {
                setmain(data.data.images[0])
                for (let i = 1; i < data.data.images.length; i++) {
                    if (!other.includes(data.data.images[i])) {
                        other.push(data.data.images[i])
                    }




                }
            }).catch(err => {
                console.log(err.message)
            })
            console.log(other)






        } catch (error) {
            console.log(error.message)
        }



    }, []);


    useEffect(() => {

        if (conter > 0) {
            seticonmain(<RestoreIcon onClick={() => {
                if (isedited == 0) {
                    setisedited(1)
                } else {
                    setisedited(0)
                }
                setconter(conter + 1)
            }}

                id="icondelete" sx={{ fontSize: 40, color: theme.palette.success.main }} />)



        }

        if (isedited == 0) {
setdsp("none")

        } else {
setdsp("flex")

        }
        console.log(isedited)


    }, [conter]);

    return (
        <div>
            <div>
                <div id='mainimagecontainer'>
                    <h2>the main image:</h2>
                    <div style={{ position: "relative" }}>
                        <img id='mainimage' src={`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${main}`} />
                        <div id='overrr' ref={referec}></div>


                    </div>
                    {iconmain}
                </div>

                <input type='file' style={{ marginTop: "1%" ,display:dsp}} accept='image/*'
                class="form-control"  
                onChange={(e)=>{
                    seteditedmain(e.target.files[0])
                }} />

                <h2 style={{ textAlign: "center", margin: "1% 0%" }}>other images :</h2>
                <div id='containerimgs'>
                    {other.map(dt => {
                        return <Itemimg image={dt} deleted={deleted} setdeleted={setdeleted} />
                    })}
                </div>

            </div>


     





            <div class="mb-3" style={{ marginTop: "2%" }}>
                <label class="form-label">how money image would you put to your jersey</label>

                <input class="form-control" type="number" onBlur={(e) => {
                    let contentarray = []
                    if (typeof parseInt(e.target.value) === 'number' && e.target.value % 1 === 0) {
                        for (let i = 0; i < parseInt(e.target.value); i++) {
                            contentarray.push(<input type='file' style={{ marginTop: "1%" }} accept='image/*'
                                onChange={(e) => {
                                    let arre = editedimgs
                                    arre.push(e.target.files[0])
                                    console.log("hh")


                                    seteditedimgs(arre)
                                    console.log(editedimgs)


                                }} class="form-control" id="exampleFormControlInput1" />
                            )
                        }
                        setcontnt(contentarray)

                    }
                }} id="formFile" />

            </div>
            {content}
            <Button variant='contained' color='success' onClick={async() => {
                console.log(editedimgs)
                if(isedited==1){
                    console.log(editedmai)
                    let arrayfinal=[]
                    arrayfinal.push(editedmai)
                    for(let i=0;i<editedmai.length;i++){
                        arrayfinal.push(editedmai[i])


                    }
                    const formdata=new FormData()
                    for(let i=0;i<arrayfinal.length;i++){
                        formdata.append(`images`,arrayfinal[i])
                     }
                    
                    formdata.append('mainedded',isedited)
                    formdata.append('deleted',deleted)
                    try{
                        console.log(deleted)
                        await axios.put(`${process.env.REACT_APP_APIURL}/jersey/updateimages/${props.id}`,formdata,{
                            headers: {
                                'Content-Type': 'multipart/form-data',
                              },
                        }).then(res=>res.data).then(data=>{
                            console.log(data.message)
                        }).catch(err=>{
    alert(err.message)
                        })
                       }catch(error){
                        alert(error.message)
                       }
    
                  
                    


                }else{
                    let arrayfinal=[]
                    for(let i=0;i<editedimgs.length;i++){
                        arrayfinal.push(editedimgs[i])


                    }
                    const formdata=new FormData()
                    for(let i=0;i<arrayfinal.length;i++){
                        formdata.append(`images`,arrayfinal[i])
                     }
                    
                    formdata.append('mainedded',isedited)
                    formdata.append('deleted',deleted)

                    try{
                        console.log(deleted)
                        await axios.put(`${process.env.REACT_APP_APIURL}/jersey/updateimages/${props.id}`,formdata,{
                            headers: {
                                'Content-Type': 'multipart/form-data',
                              },
                        }).then(res=>res.data).then(data=>{
                            console.log(data.message)
                        }).catch(err=>{
    alert(err.message)
                        })
                       }catch(error){
                        alert(error.message)
                       }
    


                    console.log("no")
                }
            }}>UPDATE</Button>
        </div>
    );
}

export default Imgupdt;
