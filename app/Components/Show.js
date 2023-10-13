import React from 'react'



function Show(props) {

    const {
        tasks,
        setTasks,
        setTitle,
        setDescription,
        setStatus,
        setActiveTask,
        
    } = props;



        const UpdateHandler = (index )=>{

            const {title,description,status}=tasks[index];
            setTitle(title);
            setDescription(description);
            setStatus(status);
            setActiveTask(index);


            
        }


        const DeleteHandler = (index) => {
            setTasks(tasks.filter((t, i)=> i !== index))
        }



    let tasklist=(<h2>LOading.....</h2>)


    if (tasks.length > 0) {


        tasklist = tasks.map((task, index) => {
            
            return (

                <main className="cards"  key={index} >

                                    <article className="card"  >

                                                        <div className="text">


                                                        <h1>{task.title}</h1>
                                                        <p>{task.description}</p>
                                                        <h3>{task.status}</h3>


                                                        <button onClick={() => UpdateHandler(index) } >update</button>
                                                        
                                                        <button  onClick={ () =>DeleteHandler(index) } >Delete</button>
                                    
                                                        </div>

                                    </article>



                </main>

            );
        });
    }

  
    return(
        
        <div>{tasklist}</div>

    )


}

export default Show