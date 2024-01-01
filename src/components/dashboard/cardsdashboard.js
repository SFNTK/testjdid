import React from 'react';
import "./cardsdashboar.css"

const Cardsdashboard = (props) => {
    //<p class="m-b-0">Completed Orders<span class="f-right">351</span></p>
    return (
        
        
            <div style={{backgroundColor:localStorage.getItem("mode")=="dark"?props.theme.dark:props.theme.dark}} class="card  order-card">
                <div class="card-block">
                    <div>
                    <h6 class="m-b-20">{props.title}</h6>
                    {props.logo}
                    </div>
                    <h2 class="text-right"><span>{props.vl}</span></h2>
                    
                </div>
            </div>
     
       
    );
}

export default Cardsdashboard;
