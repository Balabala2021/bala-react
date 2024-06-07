import React, { useState } from 'react'

function Users({usersData,setUsersData})
 {
  const [user,setUser]=useState("")
  const [id,setId]=useState()
  function setData(k)
  {
    setUser(usersData.find((u,index)=>index==k))
    setId(k)
  }
  function updateUser()
  {
    const newUsers=[...usersData]
    newUsers[id]=user
    setUsersData(newUsers)
  }
  function deleteUser(k){
    console.log(k);
    const newUsers = usersData.filter((user,index) => index!=k)
    setUsersData(newUsers)
  }
  return (
    <div className='child'>
        <h1>child component</h1>
        <input value={user} onChange={e=>setUser(e.target.value)}/><button onClick={updateUser}>UpdateUser</button>
        {
          usersData.map((user,index)=><h2 key={index}>{user} <button onClick={()=>setData(index)}>Edit</button> <button onClick={() => deleteUser(index)} >Delete</button></h2>)
        }
    </div>

  )
}

export default Users