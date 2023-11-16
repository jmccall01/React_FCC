import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'


export default function Contact() {
    return (
        <div>
            <button className="contact--emailbutton">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>Email</p>
            </button>
            <button className="contact--emailbutton">
                <FontAwesomeIcon icon={faLinkedin} />
                <p>Linkedin</p>
            </button>
        </div>
    )
}