import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function FooterSocials() {
    return (
        <div>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faSquareInstagram} />
            <FontAwesomeIcon icon={faSquareGithub} />
        </div>
    )
}