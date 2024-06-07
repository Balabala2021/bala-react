import { useState } from "react";

function FavoriteColor(){

    // let color = 'blue';
    const [color,setColor] = useState('Blue')

    return <>
     <h1>My FavoriteColor is {color}</h1>
    <button onClick={()=>{setColor('Red')}}>Change color</button>

    </>
   
}

export default FavoriteColor;