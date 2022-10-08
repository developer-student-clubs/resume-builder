import React, { useState, useEffect } from 'react'
import './Navbar.css';

const Navbar = () => {

    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        setMobileView(false);
    }, []);

    return (
        <>
            <div className='navbar-container'>
                <div className="topnav" id="myTopnav">

                    <div className={mobileView ? "menu-toggle is-mobile-active" : "menu-toggle"} id="mobile-menu" onClick={() => setMobileView((prev) => !prev)}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                    <div className='logo-links-container'>
                        <a href='/' className="logo-heading">Resu.Me</a>

                        <div className={mobileView ? "link-container mobile-active" : "link-container"} >
                            <a href='/' className="nav-links">Home</a>
                            <a href='/' className="nav-links">View Template</a>
                            <a href='/' className="nav-links">Create Resume</a>
                            <a href='/' className="nav-links">About</a>
                            <a href='/' className="nav-links">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar