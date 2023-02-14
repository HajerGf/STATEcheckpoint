
import { useState } from 'react';
import './App.css';
import Addtask from './Components/Addtask';
import Cards from './Components/Cards';

function App() {
  const [tasks,settasks]=useState([
    {name:"sleep", done:false},
    {name:"training", done:true},
    {name:"eat", done:false},
  ])
  const addnew=(x)=>{
    settasks([x,...tasks])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Addtask fnc={addnew} />
        {tasks.map((el)=><Cards task={el} />)}
        
      </header>
    </div>
  );
}

export default App;
