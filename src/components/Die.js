import React from "react";

export default function Die(props){
    
    return(        
        props.isHeld ? <div className="game--dice--held">{props.value}</div> : <div className="game--dice">{props.value}</div> 
        )
}