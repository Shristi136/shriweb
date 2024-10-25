import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Hnav = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className="section-one">
                <header className="header">
                    <div className="gridimg">
                        <img src="/images/meetwhite.png" alt="logo image" className="logo" />
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Portfolio</Link></li>
                            <li><Link to="/">Skills</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </header>

                {/* Mobile Navbar */}
                <nav className={showMenu ? "navbar mobile-navbar" : "nothing"}>
                    <ul>
                        <li><Link to="/" onClick={() => setShowMenu(false)}>About</Link></li>
                        <li><Link to="/" onClick={() => setShowMenu(false)}>Portfolio</Link></li>
                        <li><Link to="/" onClick={() => setShowMenu(false)}>Skills</Link></li>
                        <li><Link to="/Contact" onClick={() => setShowMenu(false)}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};