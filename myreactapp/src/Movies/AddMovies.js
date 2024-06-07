import React from "react"
import { useState } from "react"

export default function AddMovies({movies,setMovies}) {

    const [movieName,setMovieName]=useState("")
    const [poster,setPoster]=useState("")


   function addMovie()
    {
      
      setMovies([...movies,{movieName,poster}])
    }

   return (<div>
    <input type="text" onChange={e=>setMovieName(e.target.value)}/><br/>
    <input type="text" onChange={e=>setPoster(e.target.value)}/><br/>
    <button onClick={addMovie}>Add movie</button>
   </div>)
}



