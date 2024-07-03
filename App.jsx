import React from 'react';
import Nav from "./src/Nav.jsx"
import Hero from "./src/Hero.jsx"
import Card from "./src/Card.jsx"
import Footer from "./src/Footer.jsx"
import data from "./src/data.jsx"

export default function App() {
    const cards = data.map(item=>{
        return (
            <Card
                key={item.id}
                item={item}
                />
        )
    })
    
  return (
    <div>
      <Nav/>
      <Hero/> 
        <div className="games-list">
            {cards}
        </div>
        <Footer/>
    </div>
  )
}