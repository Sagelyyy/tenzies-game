import React from "react"


export default function Game(){
    return(
        <div>
            <div className="game--container">
                <div className="game--dice">1</div>
                <div className="game--dice">1</div>
                <div className="game--dice">1</div>
                <div className="game--dice">1</div>
                <div className="game--dice">1</div>
                <div className="game--dice">1</div>
                <div className="game--dice">1</div>
                <div className="game--dice">1</div>
                <div className="game--dice">1</div>
                <div className="game--dice">1</div>
            </div>
            <div className="game--button--container">
                <button className="game--button--button">Roll</button>
            </div>
        </div>
    )
}