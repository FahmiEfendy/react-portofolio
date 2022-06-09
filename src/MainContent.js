import React from "react"
import "./css/style.css"
import email from "./img/email.png"
import linkedin from "./img/linkedin.png"

export default function MainContent() {
    return (
        <div className="main-div">
            <h4 className="user-name">Fahmi Efendy</h4>
            <h5 className="user-role">Frontend Developer</h5>
            <p className="user-web">fahmiefendy.website</p>
            <div className="btn-div">
                <a className="btn-link" href={"https://gmail.com"} target={"_blank"}>
                    <div className="btn btn-email">
                        <img className="logo logo-email" src={email} target={"_blank"} />
                        <label className="label label-email">Email</label>
                    </div>
                </a>
                <a className="btn-link" href={"https://gmail.com"}>
                    <div className="btn btn-linkedin">
                        <img className="logo logo-linkedin" src={linkedin} />
                        <label className="label label-linkedin">LinkedIn</label>
                    </div>
                </a>
            </div>
            <h4 className="h4 h4-about">About</h4>
            <p className="about-text">Hello I am a Front-End Developer with a particular interest in making some website. I try to keep up with simplicity and best practice, and I am always looking for new things to learn..</p>
            <h4 className="h4 h4-interests">Interests</h4>
            <p className="about-text">Everything about Web Development especially Front-End, currently learning about ReactJS. I also like anime, manga and coffee.</p>
        </div>
    )
}