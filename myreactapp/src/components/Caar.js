import React from "react";

class Caar extends React.Component{
    constructor(){
       super();
       this.state = {color: "Red", model:"Ford"}
    }

     render(){ 
     
     return <>
         <h1>My Car color is {this.state.color} and model is {this.state.model}</h1>
        <button onClick={() => { this.setState((previousState) => { return {...previousState,color:"Blue"}})  }}>Change color</button>
     
     </>
     }
    
}

export default Caar;