import React from "react"

export default function Title(props){

    return(
        <div className="title--container">
            <h1 className="title--title">Tenzies</h1>
            <h5 className="title--desc">Roll until the dice are the same. Click
            each die to freeze it at its current value
            between rolls</h5>
            <h3 className="title--high">High Score: {props.high}</h3>
            <h3 className="title--rolls">Rolls: {props.roll}</h3>
        </div>
    )
}