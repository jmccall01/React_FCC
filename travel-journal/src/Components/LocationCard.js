import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function LocationCard(props) {
    return(
        <div className="card">
            <img className="card--img" src={props.img} height="168px" width="125px"/>
            <div className="card--info">
                <div className="card--locator">
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#ad2020",}} className="card--pin"/>
                    <p className="card--country">{props.country}</p>
                    <a className="card--mapslink" target="_blank" href={props.maps_link}>View on Google Maps</a>
                </div>
                <p className="card--landmark">{props.landmark}</p>
                <p className="card--dates">{props.year}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}