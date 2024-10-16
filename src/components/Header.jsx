import React from "react";
import { Link } from "react-router-dom";
export const Hnav=()=>{
    return(
        <>
         <div className="section-one">
         <header>
            <div className="gridimg">
                <img src="/images/meetwhite.png" alt="logo image" className="logo"/>
            </div>
            <div className="gridnav">
            <nav className="navbar">
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Portfolio</Link></li>
                <li><Link to="/">Skills</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </nav>
            </div>
    </header>
         </div>
        </>
    )
}