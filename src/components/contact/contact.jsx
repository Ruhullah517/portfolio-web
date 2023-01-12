import React from "react";
import './contact.css';
import { SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";
import GoogLocation from "../map/map";
import { useForm, ValidationError } from '@formspree/react';
import { Link } from "react-router-dom";

const Contact = () => {

    const [state, handleSubmit] = useForm("xgebepnz");
    if (state.succeeded) {
        alert("Message Sent !");
    }

    return (<>
        <section id="ContactUs">
            <h2>Contact US</h2>
            <div className="background">
                <div className="container">
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-button close" />
                                <div className="screen-header-button maximize" />
                                <div className="screen-header-button minimize" />
                            </div>
                            <div className="screen-header-right">
                                <div className="screen-header-ellipsis" />
                                <div className="screen-header-ellipsis" />
                                <div className="screen-header-ellipsis" />
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>CONTACT</span>
                                    <span>US</span>
                                </div>

                                <div className="app-contact">
                                    <a
                                        class='social-icon-link github'
                                        href="https://instagram.com/hello_skardu?igshid=YmMyMTA2M2Y="
                                        target='_blank'
                                        rel="noopener"
                                    > <SiInstagram />
                                    </a>
                                    <a
                                        class='social-icon-link github'
                                        href="https://www.facebook.com/VZYREEPHOTOGRAP?mibextid=ZbWKwL"
                                        target='_blank'
                                        rel="noopener"
                                    > <SiFacebook /></a>
                                    <a
                                        class='social-icon-link github'
                                        href="https://www.tiktok.com/@hello_skardu?is_from_webapp=1&sender_device=pc"
                                        target='_blank'
                                        rel="noopener"
                                    > <SiTiktok /></a>
                                </div>
                            </div>
                            <div className="screen-body-item">
                                <form onSubmit={handleSubmit} method="POST">
                                    <div className="app-form">
                                        <div className="app-form-group">
                                            <input
                                                className="app-form-control"
                                                placeholder="NAME"
                                                name="username"
                                                id="userName"
                                            />
                                        </div>
                                        <div className="app-form-group">
                                            <input className="app-form-control"
                                                placeholder="EMAIL"
                                                name="Email"
                                                id="email"
                                                type="email" />
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <div className="app-form-group">
                                            <input className="app-form-control"
                                                placeholder="CONTACT NO"
                                                name="Contact-Number" />
                                        </div>
                                        <div className="app-form-group message">
                                            <input className="app-form-control"
                                                placeholder="MESSAGE"
                                                name="message"
                                                id="message" />
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <div className="app-form-group buttons">
                                            <button className="app-form-button" type="submit" disabled={state.submitting}>SEND</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <GoogLocation />
        </section>
    </>)
}

export default Contact;