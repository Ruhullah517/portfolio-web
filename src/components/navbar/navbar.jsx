import React from "react";
import './navbar.css'
import data from "./data";



const navBar = () => {
    return (<>
        <nav>
            <div className="nav-container">
                <ul className="nav-menu">
                    {data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}
                </ul>
            </div>
        </nav>
    </>)
}


export default navBar;