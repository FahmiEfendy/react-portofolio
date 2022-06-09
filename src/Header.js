import React from "react"
import profile from "./img/profile.jpg"


export default function Header() {
    return (
        <div>
            <img className="header-image" src={profile} />
        </div>
    )
}