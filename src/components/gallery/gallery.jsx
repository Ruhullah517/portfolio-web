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
                    <p>Portrait photography is a special art form that allows photographers to share the story of a person's life
                        without having to use words. Through careful use of lighting, posing, and backgrounds,
                        I am able to create a powerful image that speaks volumes about the individuals.</p>
                </div>
            </div>
            <div className="main-gallery">
                <div className="child-gallery1">
                    <h2>LANDSCAPE SHOTS</h2>
                    <p>I may choose to focus on landscape photography because I find beauty in the natural world,
                        enjoy capturing the unique qualities of different locations, and exploring new places.
                        Landscape photography also allows me to be creative in how they document outdoor scenes and the
                        ever-changing weather and light. Furthermore, landscapes are often timeless,
                        which can create a sense of nostalgia when the images are viewed many years later.</p>
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
                    <p>I love capturing the rugged beauty of my people, the Faces of the North and traditional culture
                        of the Northern people of Pakistan, a window into a world of stunning landscapes and rich heritage.
                        Through my lens i try to capture the warmth and resilience of the local people and their rich cultural
                        heritage, a journey that is both humbling and inspiring.</p>
                </div>
            </div>
        </section>
    </>)
}

export default Gallery;