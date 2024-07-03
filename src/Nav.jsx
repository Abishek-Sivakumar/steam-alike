import React from "react"
import steamLogo from "/public/images/assets/steam3.png"

export default function Nav(){
    return (
        <nav>
            <img src={steamLogo} className="nav-logo" alt="Steam Logo"/>
            <p className="nav-text">STEAM</p>
        </nav>
    )
}