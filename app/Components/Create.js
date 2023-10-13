import React from 'react';
import { toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
function Create(props) {

    const {
        title,
        setTitle,
        description,
        setDescription,
        status,
        setStatus,
        tasks,
        setTasks,
        activeTask,
        setActiveTask,
    } = props;
    

    const SubmitHandler = (e) => {

        e.preventDefault();

        // validation
        if (title.length < 2 || description.length < 3) {

            toast.error(
                "Title and Description must be more than 5 and 20 characters respectively"
            );

            return;
        }



        const newtask = {
            date: new Date().toLocaleDateString(),
            title,
            description,
            status,
        };




        setTasks([...tasks, newtask]);

        setTitle("");
        setDescription("");
        setStatus("due");


    };


      
    const UpdateTask = (e) => {
        e.preventDefault();

        const copyTasks = [...tasks];
        copyTasks[activeTask] = {  ...copyTasks[activeTask ], title,description, status };

         

        setTasks(copyTasks);
        setActiveTask(null);
        setTitle("");
        setDescription("");
        setStatus("due");
    };

        


  return (
    <div>


<form >
            <h2     className='head22' >Create Your Tasks</h2>
    <br></br>
    <br></br>
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="form-control mb-3"
                type="text"
                placeholder="Title"
                id='title'
            />

            <br></br>
            <br></br>
            <br></br>

            <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="form-control mb-3"
                placeholder="description here..."
                id='description'

            >


            </textarea>

            <br></br>
            <br></br>
     

            <select
                onChange={(e) => setStatus(e.target.value)}
                className="form-control mb-3"
                value={status}

            >
                <option value="due">Due</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>

            </select>

            <br></br>        
            <br></br>
  
            {activeTask === null ? (
            
                <button onClick={SubmitHandler} className="btn btn-primary" id='craete_task'>
                    Create Task
                </button>
            ) : (
                <button onClick={UpdateTask} className="btn btn-primary">
                    Update Task
                </button>
            )}


        </form>


    </div>

  )
}

export default Create;