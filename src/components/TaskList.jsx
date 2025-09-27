import FormTask from "./FormTask";
import Task from './Task'
import '../stylesheets/TaskList.css'
import { useState } from "react";

function TaskList() {
    
    const [tasks, setTasks] = useState([]);

    const agregateTask = task => {
        console.log(task)
        if(task.texto.trim()){
            task.texto = task.texto.trim();
            const actuallyTask = [task, ...tasks];
            setTasks(actuallyTask);
        }
    }

    return(
        <>
            <FormTask onSubmit={agregateTask} />
            <div className="tareas-lista-contenedor">
                {
                    tasks.map((tarea) =>
                    <Task 
                       key={tarea.id}
                       id={tarea.id}
                       text={tarea.texto}
                       done={tarea.done} />)
                }
            </div>
        </>
    );
}

export default TaskList;