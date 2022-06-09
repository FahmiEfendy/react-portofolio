import React from "react"
import "./css/style.css"
import twitter from "./img/twitter.png"
import facebook from "./img/facebook.png"
import instagram from "./img/instagram.png"
import github from "./img/github.png"

export default function Footer() {
    return (
        <div className="footer-div">
            <a href={"https://twitter.com"} target={"_blank"}><img src={twitter} /></a>
            <a href={"https://facebook.com"} target={"_blank"}><img src={facebook} /></a>
            <a href={"https://instagram.com"} target={"_blank"}><img src={instagram} /></a >
            <a href={"https://github.com"} target={"_blank"}>< img src={github} /></a >
        </div >
    )
}