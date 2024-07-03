import React from "react"
import heroPicture from  "public\images\hero-pic.png"
export default function Hero(){
    return (
        <section className="hero-section">
            <div className="hero-img">
                <img src={heroPicture} className="hero-pic" alt="marquee images" />
            </div>
            <h1 className="hero-header">Start Gaming Now !</h1>
            <p className="hero-text">Dive into the world of gaming with these awesome 
            fan favourites</p>
        </section>
    )
}