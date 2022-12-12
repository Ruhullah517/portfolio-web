import React, { useState } from "react";
import './myWork.css'
import { FaUserFriends, FaAward, FaCamera, } from 'react-icons/fa'
import { BsCameraReelsFill } from "react-icons/bs";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const MyWork = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (<>
        <ScrollTrigger onEnter={() => { setCounterOn(true) }} onExit={() => [setCounterOn(false)]}>
            <section id="myWorkSect">
                <div id="main-div-work">
                    <h2 id="work-heading">myWork</h2>
                    <div className="child-div-work">
                        <div className="div-work">
                            <div className="work-icons">
                                <FaUserFriends size={140} />
                            </div>
                            <h2>{counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}+</h2>
                            <p>Satisfied Customers</p>
                        </div>
                    </div>
                    <div className="child-div-work">
                        <div className="div-work">
                            <div className="work-icons">
                                <BsCameraReelsFill size={140} />
                            </div>
                            <h2>{counterOn && <CountUp start={0} end={80} duration={2} delay={0} />}+</h2>
                            <p>Sessions</p>
                        </div>
                    </div>
                    <div className="child-div-work">
                        <div className="div-work">
                            <div className="work-icons">
                                <FaAward size={140} />
                            </div>
                            <h2>{counterOn && <CountUp start={0} end={50} duration={2} delay={0} />}+</h2>

                            <p>Awards Achieved</p>
                        </div>
                    </div>
                    <div className="child-div-work">
                        <div className="div-work">
                            <div className="work-icons">
                                <FaCamera size={140} />
                            </div>
                            <h2>{counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}+</h2>

                            <p>Completed Projects</p>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    </>)
}

export default MyWork;