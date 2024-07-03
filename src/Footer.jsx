import React from "react"
import copyright from "public\images\copyright.png"
export default function Footer(){
    return (
        <div className="footerDiv">
            <img src={copyright} className="footerPic"/>
            <p>All Rights Reserved</p>
        </div>
    ) 
}