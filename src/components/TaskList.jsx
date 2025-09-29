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

    const taskDelete = id => {
        const actuallyTask = tasks.filter(task => task.id !== id);
        setTasks(actuallyTask);
    }

    const taskComplete = id => {
        const actuallyTask = tasks.map(task => {
            if(task.id == id) {
                task.done = !task.done;
            }
            return task;
        });
        setTasks(actuallyTask);
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
                       texto={tarea.texto}
                       done={tarea.done}
                       taskDelete={taskDelete}
                       taskComplete={taskComplete} />)
                }
            </div>
        </>
    );
}

export default TaskList;