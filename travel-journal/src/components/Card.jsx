export default function Card(props) {
    return(
        <>
            <div className="card">
                <img src={`/images/${props.image}`} alt="location" className="card--photo"/>
                <div className="card--info">
                    <div className="card--geo">
                        <img src="/images/geo-anchor.svg" className="card--anchor" alt="geo"/>
                        <span className="card--country">{props.country.toUpperCase()}</span>
                        <a href={props.googleMapsLink} target="_blank">
                            <span className="card--google-maps-link">
                                View on Google Maps
                            </span>
                        </a>
                    </div>
                    <h3 className="card--location">{props.title}</h3>
                    <h4 className="card--date">{props.date}</h4>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>
            <hr/>
        </>
    )
}