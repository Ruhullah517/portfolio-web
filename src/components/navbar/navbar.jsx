import React from "react";
import './navbar.css'
import data from "./data";

import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";



const NavBar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    return (<>
        <nav>
            <div className="nav-logo">
                <a href="#"> <img src="/logo3.PNG" alt="logo" /></a>
            </div>
            <div className="nav-container">
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {data.map(item => <li key={item.id}><a href={item.link} onClick={closeMenu}>{item.title}</a></li>)}
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
            </div>
        </nav>
    </>)
}


export default NavBar;