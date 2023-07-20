
import { useState } from 'react'
// import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
// import {v4 as uuid} from 'uuid'
import './App.css'

export default function App() {
     
     const [tasks, setTasks] = useState([]);
     const [addedTasks, setAddedTasks] = useState([]);

    const addTask = () =>{
       
        setAddedTasks([...addedTasks, tasks]);
        setTasks([]);
    }
    
    const deleteTask = (taskIndex) =>{
        const filteredTask = addedTasks.filter((task, index)=> index !== taskIndex)

        return setAddedTasks(filteredTask);
    }
    return(
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
     <h1 style={{textAlign: 'center', margin: '1em'}}>REACT LESSONS</h1>
         <h2 style={{marginBottom: '.5em'}}>PROJECT NO1. PROPS AND STATE IN REACT</h2>

         <div style={{display: 'flex', gap: '1em', justifyContent: 'center'}}>
          <input type="text" placeholder='enter a task...' value={tasks} onChange={(event)=> setTasks(event.target.value)}/>
          <button onClick={addTask}>Add task</button>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1em'}}>
         
               {addedTasks.map((task, index)=>{
                    return(
                         <div style={{border: '1px solid red', padding: '1em', display: 'flex'}} key={index}>
                               <ul>
                                   <li>{task}</li>
                                   <button onClick={()=> deleteTask(index)}>Delete task</button>
                               </ul>
                         </div>
                    )
               })}
         
      </div>
    </div>


///// for tommorow
//////ADD HEART BUTTON ON TASK
/////// DO SOME PROPS PROJECT
    )
}

