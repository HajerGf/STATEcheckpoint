import React, { useState } from 'react'

const Addtask = ({fnc}) => {
    const [newtask, setnewtask] = useState({name:"",done:false});
  return (
    <div>
      <input type="text" placeholder='add your task' onChange={(e)=>(setnewtask({name:e.target.value}))}/>
      <input type="text" placeholder='add description' onChange={(e)=>(setnewtask({name:e.target.value}))}/>
      <button onClick={()=>fnc(newtask)}>Add task</button>
    </div>
  )
}

export default Addtask
