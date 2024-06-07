import React, { useEffect } from "react"

export default function About() 
{
    useEffect(()=>console.log('Mount  child'),[])
    useEffect(()=>{return(()=>{console.log('Child removed')})},[])
    return (
        <div>
            {console.log('Child render')}
    <h1>About page</h1>
    </div>
)
}