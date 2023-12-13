import React from "react";

export default function Die(props) {
    const bgColor = {
        backgroundColor: props.data.canRoll ? "white" : "#59E391"
    }
    return(
        <div onClick={props.rollable} className="single-die" style={bgColor}>
            <p className="num">{props.data.val}</p>
        </div>
    )
}