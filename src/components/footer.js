import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = ({setconteur,conteur}) => {
    const navigate = useNavigate()
    return (
        <div id='footer'>

            <button onClick={() => {
                setconteur(conteur+1)
                navigate("/products")
            }} >clck</button>
        </div>
    );
}

export default Footer;
