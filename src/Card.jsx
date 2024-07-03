import React from "react"
import sample from "/public/images/assets/eldenring.png"
export default function Card(props){
    let tagText
    if(props.item.stats.rating=="5"){
        tagText="Top Rated"
    }

    
    return (
        <div className="game-div">
            {tagText && <div className="tagDiv">{tagText}</div>}
            <img className="game-pic" src={sample}/>
            <div className="game-stats">
               <img className="like-pic" src={`public\images\like.png`}/>
               <p className="rating-mode">{props.item.stats.rating}({props.item.stats.reviewCount})/{props.item.stats.mode}</p>
            </div>
            <p className="game-name"><strong>{props.item.name}</strong></p>
            <p className="price-type">$ {props.item.price}/{props.item.type}</p>
        </div>
    )
}