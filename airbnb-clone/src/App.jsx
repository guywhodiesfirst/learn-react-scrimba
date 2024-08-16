import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import "./App.css"
import data from "../data"
export default function App() {
const cardArray = data.map(cardInfo => (
  <Card 
    key={cardInfo.id}
    {...cardInfo}
  />
))
return (
<div>
  <Navbar />
  <Hero />
  <section className="cards-container">
      {cardArray}
  </section>
</div>
)
}