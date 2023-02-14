import React, { useState } from 'react'

const Addtask = ({fnc}) => {
    const [newtask, setnewtask] = useState({name:"",done:false});
  return (
    <div className='form'>
      <img src='https://adniasolutions.com/wp-content/uploads/2018/05/To-Do-List-Excel-Template-01.png' />
      <input type="text" placeholder='add your task' onChange={(e)=>(setnewtask({name:e.target.value}))}/>
      <button onClick={()=>fnc(newtask)}>Add task</button>
    </div>
  )
}

export default Addtask
