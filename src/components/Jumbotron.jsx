import React from "react";
import { AiFillLinkedin,AiFillGithub,AiFillInstagram,AiFillPhone } from 'react-icons/ai'

function Jumbotron() {
   
    
    return ( 
        <div className="jumbotron-section wrapper">
            <div className="title welcome">Welcome</div>
            <p className="text" > Hi, I'm</p>
            <p className="text">LANRE- ABASS AKEEM </p>
            <span className="description">
               I develop sexy webpages using react
               <br/>
               <small>.....I play with three js too ;)</small>
            </span>
            <ul className="links text-center ">
               <div className="connect-links d-flex justify-content-center align-items-center">

               
                <li className="social-icon">
                    <a className="" href="#"> <AiFillGithub/></a>
                 </li>
                 <li className="social-icon">
                    <a className="" href="#"><AiFillLinkedin/></a>
                 </li>
                
                 <li className="social-icon">
                    <a  href="#"><AiFillInstagram/></a>
                 </li>
                 <li className="social-icon">
                    <a  href="#"><AiFillPhone/></a>
                 </li>
                 </div>
            </ul>
        </div>
     );
}

export default Jumbotron;