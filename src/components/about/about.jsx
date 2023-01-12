import React from "react";
import './about.css';
import SkillsBar from "./skillbar";
import { GiPhotoCamera } from "react-icons/gi";

const about = () => {
    return (<>
        <section id="About">
            <h2> About Me <span><GiPhotoCamera/></span></h2>
            <section id="section-head">
                <div className="about-section">
                    <img src="/images/mehmood - Copy.JPG" alt="" />
                </div>
                <div className="about-section">
                    <h2>INTRODUCTION</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error nulla illo dolor
                        consectetur maiores, iure nisi sed, cum quibusdam numquam? Aspernatur in nulla iure ex consectetur repellendus perferendis quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error nulla illo dolor
                        consectetur maiores, iure nisi sed, cum quibusdam numquam? Aspernatur in nulla iure ex consectetur repellendus perferendis quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error nulla illo dolor
                        consectetur maiores, iure nisi sed, cum quibusdam numquam? Aspernatur in nulla iure ex consectetur repellendus perferendis quasi.</p>
                    <SkillsBar />
                </div>

            </section>


        </section>
    </>)
}
export default about;