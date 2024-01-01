import React from 'react';

const Cnttable = (props) => {
    return (
        <tr>
            <th scope="row" style={{color: "#666666"}}>{props.taille}</th>
            <td>{props.quantity}</td>
            <td>{props.price}<sup>DH</sup></td>
           
          </tr>
    );
}

export default Cnttable;
