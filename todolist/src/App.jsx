
import { useState } from 'react'

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
// import {v4 as uuid} from 'uuid'
import './App.css'

export default function App() {
     
     const [tasks, setTasks] = useState("");
     const [addedTasks, setAddedTasks] = useState([]);
     const [isLiked, setIsLiked] = useState(false);
    
     
    const addTask = () =>{
       if(tasks.trim() === ""){
         alert("no task added");
          return;
       }else{
        setAddedTasks([...addedTasks, tasks]);
        setTasks("");    
       }
       
    }
    const handleClick = () => {
        setIsLiked(!isLiked);
        
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
                                   <li style={{ listStyleType: 'none', color: 'red'}}>{task}</li>
                                   <div style={{display: 'flex'}}>
                                   <button onClick={()=> deleteTask(index)}>Delete task</button>
                                   {isLiked ? (<AiFillHeart color='red' onClick={handleClick}/>) :(<AiOutlineHeart onClick={handleClick}/>)}
                                 
                                   </div>
                               </ul>
                         </div>
                    )
               })}
         
      </div>

    </div>


///// for tommorow

/////// DO SOME PROPS PROJECT
    )
}

