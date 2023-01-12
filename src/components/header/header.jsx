import React from "react";
import './header.css'
// import { a } from "react-router-dom";


const header = () => {
    return (<>
        <header>
            <img id="headerImg" src="/images/IMG_9095.jpg" alt="header-pic" />
            <div id="header-div">
                <h1>Mehmood Vzyree</h1>
            </div>
            <a href="#ContactUs"><button className="button-89" role="button">Hire Me !</button></a>

        </header>
    </>)
}
export default header;