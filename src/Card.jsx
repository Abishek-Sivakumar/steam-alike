import React from "react"

export default function Card(props){
    let tagText
    if(props.item.stats.rating=="5"){
        tagText="Top Rated"
    }

    
    return (
        <div className="game-div">
            {tagText && <div className="tagDiv">{tagText}</div>}
            <img className="game-pic" src={`src/assets/${props.item.imgSrc}`}/>
            <div className="game-stats">
               <img className="like-pic" src={`public\assets\like.png`}/>
               <p className="rating-mode">{props.item.stats.rating}({props.item.stats.reviewCount})/{props.item.stats.mode}</p>
            </div>
            <p className="game-name"><strong>{props.item.name}</strong></p>
            <p className="price-type">$ {props.item.price}/{props.item.type}</p>
        </div>
    )
}