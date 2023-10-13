"use client";
import React, { useState } from 'react';
import './page.css'

import Create from './Components/Create';
import Show from './Components/Show';



function page() {

const [title, setTitle]= useState("");
const [description, setDescription]= useState("");
const [status, setStatus]= useState("");
const[tasks, setTasks]= useState("");
const [activeTask, setActiveTask] = useState(null);

                                                    
  return (

        <div>

      <Create   
      
          tasks={tasks}

          setTasks={setTasks}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          status={status}
          setStatus={setStatus}
          activeTask={activeTask}
          setActiveTask={setActiveTask}
       
        
      
      /> 
        
      <br></br>



      <Show 

        tasks={tasks}
        setTasks={setTasks}
        setTitle={setTitle}
        setDescription={setDescription}
        setStatus={setStatus}
        setActiveTask={setActiveTask}


      />       



  
     
    



        </div>

  );

};

export default page






