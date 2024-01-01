import React from 'react';
import { useNavigate } from 'react-router-dom';
import './footer.css'

const Footer = ({setconteur,conteur}) => {
    const navigate = useNavigate()
    return (
        <div id='footer'>

<section id="footer">
    <div class="container">
      <div id='links' class="row text-center text-xs-center text-sm-left text-md-left">
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5>Quick links</h5>
          <ul class="list-unstyled quick-links">
            <li>
              <a onClick={()=>{
              navigate("/")
            }}>
              <i class="fa fa-angle-double-right"></i>Home
              </a>
            </li>
            <li>
              <a onClick={()=>{
              navigate("/products/retro?filter=all")
            }}>
              <i class="fa fa-angle-double-right"></i>RETRO
              </a>
            </li>
            <li>
              <a onClick={()=>{
              navigate("/admin")
            }}>
              <i class="fa fa-angle-double-right"></i>ADMIN
              </a>
            </li>
          
          </ul>
        </div>
      
        
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul class="list-unstyled list-inline social text-center">
            <li class="list-inline-item"><a ><i class="fa fa-facebook"></i></a></li>
            <li class="list-inline-item"><a ><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a ><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a ><i class="fa fa-google-plus"></i></a></li>
            <li class="list-inline-item"><a  target="_blank"><i class="fa fa-envelope"></i></a></li>
          </ul>
        </div>
      </div>  
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p><u>Discover premium sports jerseys, from classics to latest trends, celebrating your team's style.</u></p>
          <p class="h6">&copy All right Reversed.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">WEBSITES NAME</a></p>
        </div>
      </div>  
    </div>
  </section>
        </div>
    );
}

export default Footer;
