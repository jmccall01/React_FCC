import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'


export default function Contact() {
    return (
        <div className="contact">
            <a href="mailto: josh.mccall01@outlook.com" class="contact--link">
                <button className="contact--emailbutton">
                    <FontAwesomeIcon className="faIcons" icon={faEnvelope} />
                    <p className="buttonName">Email</p>
                </button>
            </a>
            <a href="" class="contact--link">
                <button className="contact--libutton">
                    <FontAwesomeIcon className="faIcons" icon={faLinkedin} />
                    <p className="buttonName">Linkedin</p>
                </button>
            </a>
        </div>
    )
}