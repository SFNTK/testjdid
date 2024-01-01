import React, { useContext, useEffect, useState } from 'react';
import { Page3context } from '../pages/page3/page3';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../redux/productreducer';
import { useLocation } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Infocompo = (props) => {
    const [counter, setcounter] = useState(1)
    const { theme, mode, setMode } = useContext(Page3context)
    const [prices, setprices] = useState(props.prices)
    const title = props.title
    const description = props.description
    const [price, setprice] = useState(prices[0].price)
    const [taille, settaille] = useState(prices[0].taille)
    const [size, setsize] = useState()
    const [maxcount, setmax] = useState(prices[0].quantity)
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()

    useEffect(() => {
        //Runs only on the first render
        const vl = prices.map(dt => {
            return <div className='size'
                style={{
                    color: mode == "dark" ? theme.palette.common.white : theme.palette.common.black,
                    border: "1px solid", borderColor: localStorage.getItem("mode") == "dark" ? theme.palette.common.white : theme.palette.common.black,
                    backgroundColor: localStorage.getItem("mode") == "dark" ? theme.palette.common.black : theme.palette.common.white
                }}
                onClick={() => {
                    settaille(dt.taille)
                    setmax(dt.quantity)

                }}
            >{dt.taille}
            </div>
        })
        setsize(vl)
        for (let i = 0; i < prices.length; i++) {
            if (prices[i].taille == taille) {
                setprice(parseFloat(prices[i].price) * parseInt(counter))
            }
        }



    }, [counter, taille]);

    const handleaddtocart = async (data) => {
        dispatch(addtocart(data))

    }

    return (
        <div className='infocompo'>
            <h1 style={{ color: localStorage.getItem("mode") == "dark" ? theme.palette.common.white : theme.palette.common.black }}>{title}</h1>
            <p style={{ color: localStorage.getItem("mode") == "dark" ? theme.palette.common.white : theme.palette.common.black, fontSize: "large" }}>
                {description}
            </p>


            <div id='pricecontainer' style={{ color: localStorage.getItem("mode") == "dark" ? "white" : "black" }} >
                <h2 id='price'>{price}<sup>DH</sup>
                </h2>
            </div>
            <span style={{ fontWeight: 'bolder', fontSize: "x-large" }}>Choose Size :</span>
            <div id='sizes'>
                {size}
            </div>
            <div id='counter'>
                <RemoveIcon onClick={() => {
                    if (counter > 1) {

                        setcounter(counter - 1)
                    }
                }} />
                <span>{counter}</span>
                <AddIcon onClick={() => {
                    if (counter < maxcount) {
                        setcounter(counter + 1)
                    } else {
                        setcounter(maxcount)
                    }
                }} />

            </div>
            <span style={{ display: "block", paddingBottom: "3%" }}>quantity:{maxcount}</span>

            <Button sx={{ width: "80%", height: "60px" }} onClick={() => {
                const data = {
                    id: props.id,
                    title: title,
                    description:description,
                    quantity: counter,
                    taille: taille
                }

              dispatch(addtocart(data))
            }} variant="contained" disableElevation>
                ADD TO CART    </Button>
      

        </div>

    );
}

export default Infocompo;
