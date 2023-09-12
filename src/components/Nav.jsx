import React from "react";
import logo from "/logo.png"
import search from "../assets/images/search.svg"
import store from "../assets/images/store.svg"
function Nav() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <img className="logo-img" src={logo} alt="Apple" />
                    </li>
                    
                    <li>
                        <a className="link-styled" >About</a>
                    </li>
                   <li>
                          <a className="link-styled" >Works</a>
                    </li>
                    <li>
                        <a className="link-styled" >Contact</a>
                    </li>
                    <li>
                        <a className="link-styled" >Avatar</a>
                    </li>
                    
                    
                   
                </ul>
            </div>

        </nav>
    );
}

export default Nav;