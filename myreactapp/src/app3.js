// import React, { useEffect, useState } from 'react'
// import About from './welcome/About';

// function App3() {
//     const [name,setName]=useState("bala")
//     const [isShow,setIsshow]=useState(true)

//     //ComponentDidMount
//     useEffect(()=>{
//         console.log('Mount in Parent');
//     },[])
//     //ComponentDidUpdae
//     useEffect(()=>{console.log("update in Parent")},[name])
//   return (
//     <div>
//         <h1>Name :{name}</h1>
//         {console.log('render in Parent')}
//         <button onClick={()=>setName("Balaji")}>updateName</button>
//         <hr/>
//         <button onClick={()=>setIsshow(false)}>Delete About Component</button>
//         {isShow?<About/>:""}
//     </div>
//   )
// }

// export default App3