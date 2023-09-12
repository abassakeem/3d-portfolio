import React from "react";
import { AiFillLinkedin,AiFillGithub,AiFillInstagram } from 'react-icons/ai'

function Projects() {
   
    return ( 
        <div className="jumbotron-section wrapper">
            <div className="title">Welcome</div>
            
            <p className="text">LANRE- ABASS AKEEM </p>
            <span className="description">
               I develop sexy webpages using react
               <br/>
               <small>.....I play with three js too ;)</small>
            </span>
            <ul className="links">
                <li className="social-icon">
                    <a className="" href="#"> <AiFillGithub/></a>
                 </li>
                 <li className="social-icon">
                    <a className="" href="#"><AiFillLinkedin/></a>
                 </li>
                
                 <li className="social-icon">
                    <a  href="#"><AiFillInstagram/></a>
                 </li>
                
            </ul>
        </div>
     );
}

export default Projects;