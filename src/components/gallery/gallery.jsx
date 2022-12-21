import React from "react";
import { Carousel } from '3d-react-carousal'
import { slides, slides2, slides3 } from "./slides";
import './gallery.css';


const Gallery = () => {

    const callback = function (index) {
        console.log("callback", index);
    }

    return (<>
        <section id="gallery-section">
            <h2>Gallery</h2>
            <div className="main-gallery">
                <div className="child-gallery">
                    <h2 className="mobile-h2">PORTRAIT SHOTS</h2>
                    <Carousel slides={slides} interval={1000} onSlideChange={callback} />

                </div>
                <div className="child-gallery">
                    <h2>PORTRAIT SHOTS</h2>
                    <p>Before realizing my passion I used to take our regional natural beauty for granted but now it's different. Now I wait for golden hours like sunsets, now I stay up many nights for the perfect shot. I didn’t know about the Milky Way, I didn’t know that stars are more visible here due to less light pollution.
                        I've learned a lot in my journey & this journey has made me a nature admirer.</p>
                </div>
            </div>
            <div className="main-gallery">
                <div className="child-gallery1">
                    <h2>LANDSCAPE SHOTS</h2>
                    <p>Before realizing my passion I used to take our regional natural beauty for granted but now it's different. Now I wait for golden hours like sunsets, now I stay up many nights for the perfect shot. I didn’t know about the Milky Way, I didn’t know that stars are more visible here due to less light pollution.
                        I've learned a lot in my journey & this journey has made me a nature admirer.</p>
                </div>
                <div className="child-gallery1">
                    <h2 className="mobile-h2">LANDSCAPE SHOTS</h2>
                    <Carousel slides={slides2} interval={1000} onSlideChange={callback} />

                </div>
            </div>
            <div className="main-gallery">
                <div className="child-gallery">
                    <h2 className="mobile-h2">FACES OF THE NORTH</h2>
                    <Carousel slides={slides3} interval={1000} onSlideChange={callback} />

                </div>
                <div className="child-gallery">
                    <h2>FACES OF THE NORTH</h2>
                    <p>Before realizing my passion I used to take our regional natural beauty for granted but now it's different. Now I wait for golden hours like sunsets, now I stay up many nights for the perfect shot. I didn’t know about the Milky Way, I didn’t know that stars are more visible here due to less light pollution.
                        I've learned a lot in my journey & this journey has made me a nature admirer.</p>
                </div>
            </div>
        </section>
    </>)
}

export default Gallery;