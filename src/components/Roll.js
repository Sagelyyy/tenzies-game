import React from "react"


export default function Roll(props){
    return(
            <div className="game--button--container">
                {props.onWin ? <button onClick={props.onClick} className="game--button--button">New Game</button> : 
                <button onClick={props.onClick} className="game--button--button">Roll</button>}
            </div>
    )
}