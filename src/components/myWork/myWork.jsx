import React from "react";
import './myWork.css';

const myWork = () => {
    return (<>
        <section>
            <h2>myWork</h2>
            <div id="main-div">
                <div className="speciality">
                    <div className="speciality-detail">
                        <h2 className="hover-underline-animation">Landscape Photography</h2>
                        <p>Before realizing my passion I used to take our regional natural beauty for granted but now it's different. Now I wait for golden hours like sunsets, now I stay up many nights for the perfect shot. I didn’t know about the Milky Way, I didn’t know that stars are more visible here due to less light pollution.
                            I've learned a lot in my journey & this journey has made me a nature admirer.</p>
                    </div>
                    <div className="speciality-img">
                        <img src="/images/deosai landscape.jpg" alt="" />
                    </div>
                </div>
                <div className="speciality">
                    <div className="speciality-detail">
                        <h2 className="hover-underline-animation">Portrait Photography</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur vero ad debitis ipsum laudantium eaque repellendus voluptate
                            excepturi, est nam voluptatum ab quod, accusamus officiis porro? Sed eaque aliquam totam?</p>
                    </div>
                    <div className="speciality-img">
                        <img src="/images/portrait3.jpg" alt="" />
                    </div>
                </div>
                <div className="speciality">
                    <div className="speciality-detail">
                        <h2 className="hover-underline-animation">Drone Photography</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur vero ad debitis ipsum laudantium eaque repellendus voluptate
                            excepturi, est nam voluptatum ab quod, accusamus officiis porro? Sed eaque aliquam totam?</p>
                    </div>
                    <div className="speciality-img">
                        <img src="/images/Drone1.jpg" alt="" />
                    </div>
                </div> <div className="speciality">
                    <div className="speciality-detail">
                        <h2 className="hover-underline-animation">Soothing Vedios</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur vero ad debitis ipsum laudantium eaque repellendus voluptate
                            excepturi, est nam voluptatum ab quod, accusamus officiis porro? Sed eaque aliquam totam?</p>
                    </div>
                    <div className="speciality-img">
                        <video src="/images/vedio1.mp4"></video>
                    </div>
                </div>
            </div>


        </section>
    </>)
}

export default myWork;