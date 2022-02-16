import React from "react";

export default function Die(props){

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return(        
        <div className="game--dice" style={styles} onClick={props.onClick}>{props.value}</div> 
        )
}