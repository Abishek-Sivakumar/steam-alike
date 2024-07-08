import React from "react"
import like from "/public/images/assets/like.png"
import god from "/public/images/assets/god.png"
import cyberpunk from "/public/images/assets/cyberpunk.png"
import eldenring from "/public/images/assets/eldenring.png"
import got from "/public/images/assets/got.png"
import gtav from "/public/images/assets/gtav.png"
import hitman from "/public/images/assets/hitman.png"
import rdr2 from "/public/images/assets/rdr2.png"
import re4 from "/public/images/assets/re4.png"
import sekiro from "/public/images/assets/sekiro.png"
import witcher3 from "/public/images/assets/witcher3.png"

export default function Card(props){
    let tagText
    if(props.item.stats.rating=="5"){
        tagText="Top Rated"
    }

    let cardImage=""

    if(props.item.id==1){
        cardImage=got
    }else if(props.item.id==2){
        cardImage=god
    }
    else if(props.item.id==3){
        cardImage=eldenring
    }else if(props.item.id==4){
        cardImage=gtav
    }else if(props.item.id==5){
        cardImage=hitman
    }else if(props.item.id==6){
        cardImage=re4
    }else if(props.item.id==7){
        cardImage=rdr2
    }else if(props.item.id==8){
        cardImage=cyberpunk
    }else if(props.item.id==9){
        cardImage=sekiro
    }

    //`/public/images/assets/${props.item.imgSrc}`
    
    return (
        <div className="game-div">
            {tagText && <div className="tagDiv">{tagText}</div>}
            <img className="game-pic" src={cardImage}/>
            <div className="game-stats">
               <img className="like-pic" src={like}/>
               <p className="rating-mode">{props.item.stats.rating}({props.item.stats.reviewCount})/{props.item.stats.mode}</p>
            </div>
            <p className="game-name"><strong>{props.item.name}</strong></p>
            <p className="price-type">$ {props.item.price}/{props.item.type}</p>
        </div>
    )
}