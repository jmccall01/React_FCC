import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function FooterSocials() {
    return (
        <div className="footer">
            <FontAwesomeIcon icon={faTwitter} className="media--icons" />
            <FontAwesomeIcon icon={faFacebook} className="media--icons"/>
            <FontAwesomeIcon icon={faSquareInstagram} className="media--icons"/>
            <FontAwesomeIcon icon={faSquareGithub} className="media--icons"/>
        </div>
    )
}