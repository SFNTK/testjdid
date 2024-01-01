import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Updateinfo from '../../../components/dashboard/updateinfo';
import Imgupdt from '../../../components/imgupdt';

const Updatejersey = () => {
    const [jersey, setjersey] = React.useState('');
 
    const refbx=useRef()
    const [updtinfo,setinfo]=useState()
    const[upstimg,setupdtimg]=useState()
    const[conteur,setconteur]=useState(true)
    const[content,setcontent]=useState()
    const handleChange = (event) => {
        setcontent()
        setjersey(event.target.value);
        refbx.current.style.display='flex'
       
        console.log(event.target.value)
        setconteur(!conteur)
    //    setinfo(<Updateinfo id={event.target.value}  />)

    };
    const instance = axios.create()
    const [getcookies, setcookies] = useCookies(["acces_token", "refresh_token"])
    const navigate = useNavigate()
    const [menu,setmenu]=useState()
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

    const getdrpdwn = async () => {
        try {
            const resp = await instance.get(`${process.env.REACT_APP_APIURL}/jersey/alljerseys`, {
                headers: {
                    Authorization: `Bearer ${getcookies.acces_token}`,
                },
            })
            if (resp.status == 200) {
                const vl=resp.data.data.map(dt=>{
                    return  <MenuItem value={dt._id}>{dt.name}</MenuItem>
                })
                setmenu(vl)

            } else {
                console.log(resp.data.message)
            }
        }
        catch (error) {
            
            console.error('Error fetching sold items:', error.message);
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

        getdrpdwn()
    }, [getcookies.acces_token,conteur]);
    return (
        <div>
            <h2>UPDATE JERSEY</h2>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">THE JERSEY</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={jersey}
                    label="THE JERSEY"
                    onChange={handleChange}
                >
                    {menu}
                </Select>
            </FormControl>


         
            <div ref={refbx} style={{width:"100%" ,display:'none'}}>
                <div id='inff' onClick={()=>{
                    setcontent(<Updateinfo id={jersey} />)
                }}>UPDATE JERSEY'S INFO</div>
                <div id='updtimgs' onClick={()=>{
                    setcontent(<Imgupdt id={jersey}/>)
                }} >UPDATE JERSEY'S IMAGES</div>
            </div>
            {content}


        </div>
    );
}

export default Updatejersey;
