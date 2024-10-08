import React from "react";
import { Link } from "react-router-dom";
export const Hnav=()=>{
    return(
        <>
         <div className="section-one">
         <header>
                <img src="/images/meetwhite.png" alt="logo image" />
        <nav className="navbar">
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Portfolio</Link></li>
                <li><Link to="/">Skills</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </nav>
    </header>
         </div>
        </>
    )
}