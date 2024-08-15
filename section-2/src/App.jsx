import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import "./App.css"
import data from "../data"
export default function App() {
  // <Hero />
const cardArray = data.map(cardInfo => (
  <Card 
    key={cardInfo.id}
    img={cardInfo.coverImg}
    rating={cardInfo.stats.rating}
    reviewCount={cardInfo.stats.reviewCount}
    location={cardInfo.location}
    title={cardInfo.title}
    price={cardInfo.price}
    openSlots={cardInfo.openSpots}
    description={cardInfo.description}
  />
))
return (
<div>
  <Navbar />
  <div>
      {cardArray}
  </div>
</div>
)
}