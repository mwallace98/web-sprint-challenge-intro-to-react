// Write your Character component here
import React from "react";


const characterStyle = {
    borderRadius: "100px", 
    padding: "1px",
    margin: "50px", 
    backgroundColor:"rgba(242, 242, 242, .3)"
  };

 

  export default function Character(props){
    return (
        <div style={characterStyle}>
            <h1>  Name: {props.character.name}</h1>
            <p>Height: {props.character.height}</p>
            <p>Birth Year: {props.character.birth_year}</p>
        </div>

    
    )     
}


 