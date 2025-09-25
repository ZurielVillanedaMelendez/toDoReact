import FormTask from "./FormTask";
import Task from './Task'
import '../stylesheets/TaskList.css'
import { useState } from "react";
function TaskList() {
    
    const [task, setTask] = useState([]);

    return(
        <>
            <FormTask/>
            <div className="tareas-lista-contenedor">
                LISTA DE TAREAS
                {
                    task.map((tarea) =>
                    <Task 
                       text={tarea.texto}
                       done={tarea.done} />)
                }
            </div>
        </>
    );
}

export default TaskList;