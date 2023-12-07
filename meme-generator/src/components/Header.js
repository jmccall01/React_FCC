import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./troll-face.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">3rd React Project - Josh</h4>
        </header>
    )
}