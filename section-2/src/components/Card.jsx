import React from "react"

export default function Card(props) {
    let label
    if(props.openSpots === 0) {
        label = "SOLD OUT"
    } else if(props.location === "Online") {
        label = "ONLINE"
    }

    return (
        <div className="card">
            {label && <div className="card-label">{label}</div>}
            <img src={`/images/${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--prive"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}