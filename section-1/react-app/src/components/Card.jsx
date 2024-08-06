import React from "react"
import "../App.css"
import me from "../assets/me.png"
import CardImage from "./CardImage"
import CardMainContent from "./CardMainContent"

export default function Card() {
    return(
        <>
            <div className="card">
                <CardImage src={me}/>
                <CardMainContent/>
                <footer className="card-footer"></footer>
            </div>
        </>
    )
}